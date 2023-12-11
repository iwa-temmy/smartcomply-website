import React, { useMemo, useState, useEffect } from "react";
// import BaseCheckbox from '../base/BaseCheckbox';
// import BaseInput from '../base/BaseInput';
// import BaseModal from '../base/BaseModal';
// import BaseButton from '../base/BaseButton';
import axios from "axios";
import { toast } from "react-toastify";
import { Checkbox } from "primereact/checkbox";
import CheckboxInput from "../../primitive/CheckboxInput";
import { formatAmount, CurrencySign } from "../../../utils/helper";
import Modal from "../../primitive/Modal";
import Input from "../../primitive/Input";
import Button from "../../primitive/Button";

const PricingModal = ({
  closeModal,
  isOpen,
  paymentMethods,
  activePlan,
  standardPrices,
  activePlanIndex,
}) => {
  const [standards, setStandards] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [employees, setEmployee] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [acknowledgement, setAcknowledgment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});

  //functions
  const handleStandardChange = (name, value) => {
    let standardsCopy = [...standards];
    if (value) {
      standardsCopy.push(name);
    } else {
      const indexOfStandard = standardsCopy?.indexOf(name);
      standardsCopy.splice(indexOfStandard, 1);
    }
    setStandards(standardsCopy);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  //Memo
  const totalCost = useMemo(() => {
    return standards?.reduce((previous, current) => {
      return (
        standardPrices.find((standard) => standard?.standard_type === current)
          ?.amount + previous
      );
    }, activePlan?.price);
  }, [activePlan, standards, standardPrices]);

  const handleCloseModal = () => {
    setStandards([]);
    setEmployee("");
    setPaymentMethod("");
    setWorkEmail("");
    setAcknowledgment(false);
    closeModal();
  };

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      email: workEmail,
      compliance_type: standards?.join(","),
      company_size: employees,
      plan: activePlan?.id,
      payment_method: paymentMethod,
      total_cost: totalCost,
    };
    if (!employees) {
      setErrorMsg({
        ...errorMsg,
        employees: "Company size cannot be empty",
      });
      return;
    }
    if (!standards?.length) {
      setErrorMsg({
        ...errorMsg,
        standards: "Select a standard",
      });
      return;
    }
    if (!workEmail) {
      setErrorMsg({ ...errorMsg, workEmail: "Work email cannot be blank" });
      return;
    }
    if (!acknowledgement) {
      setErrorMsg({
        ...errorMsg,
        acknowledgement:
          "Oops! We can't proceed without your consent, please, tick the box",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://api.smartcomplyapp.com/api/user_mgt/request_custom_plan/",
        payload,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response?.data?.status) {
        setIsSubmitting(false);
        handleCloseModal();
        toast.success("Successful request, you will be contacted shortly");
      }
    } catch (err) {
      setIsSubmitting(false);
      if (err?.response.status === 400) {
        const { data } = err?.response || {};
        toast.error(data.message);
      } else {
        toast.error("Error while processing your request");
      }
    }
  };
  // useEffect
  useEffect(() => {
    // const { standard, flexi } = paymentMethods;
    // eslint-disable-next-line array-callback-return
    const paymentMethod = paymentMethods?.find((method) => {
      if (
        totalCost >= method.min_cost &&
        totalCost < (method?.max_cost || Infinity)
      ) {
        return true;
      }
    });

    setPaymentMethod(paymentMethod?.name || "");
  }, [totalCost, activePlan?.id, paymentMethods]);
  return (
    <Modal
      closeModal={handleCloseModal}
      modalSize="large"
      closable={false}
      visible={isOpen}
      dismissableMask={true}
      contentStyle={{ padding: 0, borderRadius: "32px" }}
      headerStyle={{ padding: 0 }}
      height="80vh"
    >
      <form
        className="flex flex-col flex-1 lg:flex-row w-full relative"
        onSubmit={handleSubmit}
      >
        <div className="absolute left-[23%] lg:left-[38%] top-4 textbrandColor text-[24px] lg:text-[32px] font-semibold">
          Calculate your Cost
        </div>
        <div className="w-full lg:w-[55%] h-full relative">
          <div
            className={`absolute rotate-[-45deg] font-semibold top-3 lg:top-6 left-[-2.3rem] lg:left-[-2.8em] ${
              activePlanIndex === 0
                ? "bg-HintOfGreen"
                : activePlanIndex === 1
                ? "bg-BlueChalk"
                : "bg-LilyWhite"
            } h-[44px] w-[40%] text-CharcoalGrey flex items-center justify-center`}
          >
            {activePlan === "Custom" ? activePlan : activePlan?.name}
          </div>
          <div className="flex flex-col mt-[8rem] px-[3rem] h-full w-full items-center">
            <div className="w-full my-4">
              <Input
                label="What's your company's size?"
                className="w-full border border-Ebony rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                onChange={(e) =>
                  /^[0-9]*$/g.test(e.target.value) &&
                  setEmployee(e.target.value)
                }
                value={employees}
                type="number"
                name="employee"
                id="employee"
                placeholder="What's your company's size?"
                error={errorMsg?.employees}
                min={0}
              />
            </div>
            <div className="w-full my-4">
              <label className="py-4">
                Choose your auditing compliance standard:
              </label>
              <div className="grid grid-cols-2">
                {standardPrices?.length ? (
                  standardPrices?.map((item, index) => {
                    return (
                      <CheckboxInput
                        type="checkbox"
                        name="standard"
                        checked={standards[item?.standard_type]}
                        label={item?.standard_type}
                        key={index}
                        styles=""
                        onChange={(e) =>
                          handleStandardChange(
                            item?.standard_type,
                            e.target.checked
                          )
                        }
                      />
                    );
                  })
                ) : (
                  <small>data not currently available</small>
                )}
              </div>
              {errorMsg?.standards?.length && (
                <p className="text-[#F85359] text-[12px] pt-1">
                  {errorMsg?.standards}
                </p>
              )}
            </div>
            <div className="w-full my-4">
              <label className="py-4">Method of Payment:</label>
              <div className="grid gap-4 grid-cols-2">
                {paymentMethods?.length ? (
                  paymentMethods?.map((item, index) => {
                    return (
                      <CheckboxInput
                        type="radio"
                        name="payment_method"
                        label={item?.name}
                        key={index}
                        onChange={() => handlePaymentMethodChange(item?.name)}
                        checked={item?.name === paymentMethod}
                        labelStyles="normal-case font-medium"
                        styles="bg-[#EEF0FF] py-2 px-[0.4rem] rounded-lg"
                        disabled={item?.min_cost > totalCost}
                      />
                    );
                  })
                ) : (
                  <small>data not currently available</small>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] bg-[#EEF0FF]">
          <div className="flex flex-col pt-[8rem] px-[3rem] h-full w-full ">
            <div className="text-CharcoalGrey font-bold text-[1rem]">
              TOTAL COST: {CurrencySign}
              {formatAmount(totalCost)}
            </div>
            <div className="text-[12px]">
              <span className="font-bold">Standard Payment:</span> 70% payment
              before commencement and 30% payment after completion.
            </div>

            <div className="w-full">
              <div className=" my-4">
                <Input
                  name="work_email"
                  placeholder="Work Email"
                  className="w-full border border-Ebony rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  onChange={(e) => setWorkEmail(e.target.value)}
                  value={workEmail || ""}
                  error={errorMsg?.workEmail}
                />
              </div>
              <div className="flex w-full items-center my-4 sample_dropdown">
                <Checkbox
                  inputId="consent"
                  value={acknowledgement}
                  name="acknowledgement"
                  onChange={(e) => setAcknowledgment(e.target.checked)}
                  checked={acknowledgement}
                />
                <label
                  htmlFor="consent"
                  className="textbrandColor text-[12px] font-[400] ml-3"
                >
                  I agree to receive marketing communications from Smartcomply
                </label>
              </div>
              <div className="w-full text-[12px]">
                By clicking <span className="font-bold">Get Started</span>, you
                agree to Smartcomply’s privacy and terms
              </div>
              <Button
                title="Submit"
                variant="primary"
                className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey w-full my-2"
                loading={isSubmitting}
                // disabled={!employees?.length}
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PricingModal;
