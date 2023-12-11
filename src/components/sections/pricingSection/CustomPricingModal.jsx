import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Checkbox } from "primereact/checkbox";
import {
  MdOutlineDoneAll,
  MdRemoveCircleOutline,
  MdAddCircleOutline,
} from "react-icons/md";
import CheckboxInput from "../../primitive/CheckboxInput";
import Input from "../../primitive/Input";
import Button from "../../primitive/Button";
import Modal from "../../primitive/Modal";

const CustomPricingModal = ({
  features,
  groupedFeature,
  activePlan,
  isOpen,
  closeModal,
  standardPrices,
}) => {
  const [standards, setStandards] = useState([]);
  const [employees, setEmployee] = useState(0);
  const [workEmail, setWorkEmail] = useState("");
  const [acknowledgement, setAcknowledgment] = useState(false);
  const [customPlanPayload, setCustomPlanPayload] = useState({});
  const [featureChecklist, setFeatureChecklist] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //functions
  const prepareCustomPlanPayload = () => {
    const payload = {},
      checklist = {};
    features?.forEach((feature) => {
      checklist[feature?.key] = false;
      payload[feature?.key] = feature?.value_type === "check" ? false : 0;
    });
    setCustomPlanPayload(payload);
    setFeatureChecklist(checklist);
  };
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
  const incrementValue = (featureKey, value, checked) => {
    if (!checked) return;
    handleCustomPlanPayloadChange(featureKey, value + 1);
  };
  const decrementValue = (featureKey, value, checked) => {
    if (!checked || value < 1) return;
    handleCustomPlanPayloadChange(featureKey, value - 1);
  };
  const handleCustomPlanPayloadChange = (key, value) => {
    setCustomPlanPayload({ ...customPlanPayload, [key]: value });
  };
  const handleFeatureCheckList = (key, value) => {
    setFeatureChecklist({ ...featureChecklist, [key]: value });
    const currentValue = customPlanPayload[key];
    if (typeof currentValue === "number") {
      if (value) {
        setCustomPlanPayload({
          ...customPlanPayload,
          [key]: currentValue < 1 ? 1 : currentValue,
        });
      }
    } else {
      setCustomPlanPayload({ ...customPlanPayload, [key]: !currentValue });
    }
  };

  const handleCloseModal = () => {
    setStandards([]);
    setEmployee("");
    setWorkEmail("");
    setAcknowledgment(false);
    setCustomPlanPayload({});
    closeModal();
  };
  //handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {};
    payload.compliance_type = standards?.join(",");
    payload.company_size = employees;
    for (let key in customPlanPayload) {
      payload[key] = customPlanPayload[key] || null;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://api.smartcomplyapp.com/api/user_mgt/request_plan/",
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
  useEffect(() => {
    prepareCustomPlanPayload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features]);
  return (
    <Modal
      closeModal={handleCloseModal}
      modalSize="extra-large"
      closable={false}
      visible={isOpen}
      dismissableMask={true}
      contentStyle={{ padding: 0, borderRadius: "32px" }}
      headerStyle={{ padding: 0 }}
      height="h-[85vh]"
    >
      <form
        className="flex flex-row justify-between flex-1 w-full h-full relative"
        onSubmit={handleSubmit}
      >
        <div className="absolute left-[38%] top-4 textbrandColor text-[32px] font-semibold">
          Customize your features
        </div>
        <div className="w-[55%] text-[14px] h-full relative">
          <div className="absolute rotate-[-45deg] font-semibold top-6 left-[-5rem] bg-[#0E2C66] h-[44px] w-[40%] text-white flex items-center justify-center">
            {activePlan === "Custom" && activePlan}
          </div>
          <div className="flex flex-col mt-[6.5rem] px-3 h-full w-full items-center">
            <div className="w-full mb-3">
              Check the necessary features, and raise the number that is
              appropriate for your business.
            </div>
            <div className="overflow-x w-full">
              {Object.keys(groupedFeature)
                ?.sort((a, b) => (a > b ? 1 : -1))
                ?.map((category, index) => {
                  const features = groupedFeature[category];
                  return (
                    <div key={index}>
                      <div
                        className="bg-[#0E2C66] flex justify-between px-4 py-1 items-center cursor-pointer"
                        // onClick={() => togglePanel(category)}
                      >
                        <h3 className="font-bold text-white text-[14px]">
                          {category}
                        </h3>
                      </div>
                      <div
                        className={`
                                            block transition transition-opacity w-full bg-[#EEF0FF] border-collapse`}
                      >
                        <div className="w-full">
                          {Object.values(features).map((feature, index) => {
                            return (
                              <React.Fragment key={index}>
                                <div className="flex px-4 border-b border-b-[#9EA9BD] w-full">
                                  <div className="py-3 px-4 w-1/2 border-r border-r-[#9EA9BD]">
                                    <div className="flex items-center w-full">
                                      <CheckboxInput
                                        type="checkbox"
                                        name={feature?.name}
                                        checked={featureChecklist[feature?.key]}
                                        label={feature.name}
                                        onChange={(e) =>
                                          handleFeatureCheckList(
                                            feature?.key,
                                            e.target.checked
                                          )
                                        }
                                        labelStyles="normal-case font-medium text-[#46464A]"
                                        key={index}
                                      />
                                    </div>
                                  </div>
                                  {GenerateCustomValue(
                                    customPlanPayload[feature?.key],
                                    feature.value_type,
                                    feature.suffix,
                                    featureChecklist[feature?.key],
                                    feature?.key,
                                    incrementValue,
                                    decrementValue
                                  )}
                                </div>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="w-[45%] text-[14px]">
          <div className="flex flex-col mt-[6rem] px-[3rem] h-full w-full ">
            <div className="w-full my-2">
              <label className="py-4">
                Choose your auditing compliance standard:
              </label>
              <div className="grid grid-cols-2">
                {standardPrices?.map((item, index) => {
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
                })}
              </div>
            </div>
            <div className="w-full my-2">
              <Input
                name="employees"
                placeholder="What's your company's size?"
                type="number"
                min={0}
                onChange={(e) =>
                  /^[0-9]*$/g.test(e.target.value) &&
                  setEmployee(e.target.value)
                }
                value={employees}
              />
            </div>
            <div className="my-2">
              <Input
                name="work_email"
                placeholder="Work Email"
                onChange={(e) => setWorkEmail(e.target.value)}
                value={workEmail}
              />
            </div>
            <div className="flex w-full items-center my-8 sample_dropdown">
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
                I agree to receive marketing communications from Smartcomplyapp.
              </label>
            </div>
            <p className="w-full text-[12px]">
              By clicking <span className="font-bold">Get Started</span>, you
              agree to smartcomplyapp’s privacy and terms.
            </p>
            <Button
              title="Get Started"
              variant="primary"
              className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey w-full my-2"
              loading={isSubmitting}
              disabled={!employees?.length}
              type="submit"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

const GenerateCustomValue = (
  value,
  type,
  suffix,
  checked,
  key,
  incrementValue,
  decrementValue
) => {
  switch (type) {
    case "check":
      return (
        <div className="flex justify-center items-center m-auto w-1/2">
          <MdOutlineDoneAll
            size="20px"
            className={`${value ? "textbrandColor" : "text-[#C7C6CA]"}`}
          />
        </div>
      );
    case "upto":
    case "abs_value":
      return (
        <div className="m-auto">
          <div className="flex flex-row flex-1 justify-between items-center w-full">
            <button
              className="mx-3"
              type="button"
              onClick={() => decrementValue(key, value, checked)}
            >
              <MdRemoveCircleOutline
                size="16px"
                className="text-[18px] text-[#858999] cursor-pointer"
              />
            </button>
            <div className="flex flex-row items-center">
              <p className="text-[14px] font-bold">{value}</p>
              <span className="ml-[12px]">{suffix}</span>
            </div>
            <button
              className="mx-3"
              type="button"
              onClick={() => incrementValue(key, value, checked)}
            >
              <MdAddCircleOutline
                size="16px"
                className="text-[14px] text-[#858999] cursor-pointer"
              />
            </button>
          </div>
        </div>
      );
    default:
      return <>No option</>;
  }
};

export default CustomPricingModal;
