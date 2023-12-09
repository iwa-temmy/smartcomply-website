import React from "react";
import initial_white_icon from "../../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../../assets/icons/hover_white_arrow.svg";
import useFormValidation from "../../../hooks/useFormValidation";
import { SUBSCRIPTION_VALIDATION } from "../../../utils/fieldValidations";
import Button from "../../primitive/Button";
import axios from "axios";
import { toast } from "react-toastify";
import FormHelperText from "../../primitive/FormHelperText";

const SubscribeToNewsLetterSection = () => {
  const submitForm = async (values) => {
    try {
      const response = await axios.post(
        "https://api.smartcomplyapp.com/api/user_mgt/subscribers/",
        values,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response?.data?.status) {
        toast.success(
          `${values?.email} successfully subscribed to updates from SmartComply`
        );
        clearFormState();
      }
    } catch (err) {
      if (err?.response.status === 400) {
        const { data } = err?.response || {};
        console.log(data?.message);
        toast.error(data?.message);
      } else {
        toast.error("Error while processing your request");
      }
    }
  };

  //   validation hook
  const {
    data,
    loading,
    setFieldValue,
    setFieldTouched,
    showError,
    handleFormSubmit,
    resetForm,
  } = useFormValidation(SUBSCRIPTION_VALIDATION, submitForm);

  // functions
  const clearFormState = () => {
    resetForm();
  };
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <div className="container mx-auto py-8 md:py-16">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row">
        <div className="w-full md:w-[40%] space-y-4">
          <h3 className="flex flex-col text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium md:max-w-[16rem]">
            Be in the Loop!
          </h3>
          <p className="text-sm md:text-base text-CharcoalGrey md:max-w-sm">
            Read the Latest News About Smartcomply, AI, Automation,
            Cybersecurity and Compliance.
          </p>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="w-full bg-HintOfGreen pb-4 rounded-xl">
            <form
              onSubmit={handleFormSubmit}
              className="w-full bg-PaleTurquoise px-6 py-8 rounded-xl space-y-6"
            >
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data?.email || ""}
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("email")}
                  className="w-full bg-white placeholder:text-SilverChalice px-10 py-6 rounded-lg"
                  placeholder="Enter email here..."
                />
                {showError("email") ? (
                  <FormHelperText text="Email is required" />
                ) : null}
              </div>
              <Button
                title="Subscribe"
                loading={loading}
                className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
                inital_arrow={initial_white_icon}
                hover_arrow={hover_white_icon}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToNewsLetterSection;
