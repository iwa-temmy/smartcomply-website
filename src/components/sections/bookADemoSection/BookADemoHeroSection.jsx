import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import forgot_password_text_bg from "../../../assets/icons/forgot_password_text_bg.svg";
import book_a_demo from "../../../assets/images/book_a_demo.svg";
import initial_black_icon from "../../../assets/icons/inital_black_arrow.svg";
import hover_black_icon from "../../../assets/icons/hover_black_arrow.svg";
import { Link } from "react-router-dom";
import { Countries } from "../../../utils/data";
import useFormValidation from "../../../hooks/useFormValidation";
import axios from "axios";
import { toast } from "react-toastify";
import { BOOK_DEMO_VALIDATION } from "../../../utils/fieldValidations";
import Input from "../../primitive/Input";
import FormHelperText from "../../primitive/FormHelperText";
import Button from "../../primitive/Button";
import { useNavigate } from "react-router-dom";

const BookADemoHeroSection = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});

  const navigate = useNavigate();

  const submitForm = async (values) => {
    if (isAgreed === false) {
      setErrorMsg({
        ...errorMsg,
        agreementChecked:
          "Oops! We can't proceed without your consent, please, tick the box",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://api.smartcomplyapp.com/api/landing_page/demo/",
        values,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response?.data?.status) {
        clearFormState();
        navigate("/success", { state: "demo" });
      }
    } catch (err) {
      if (err?.response.status === 400) {
        const { data } = err?.response || {};
        toast.error(data.message);
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
  } = useFormValidation(BOOK_DEMO_VALIDATION, submitForm);

  // functions
  const clearFormState = () => {
    resetForm();
  };
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  const handleSelectChange = (e) => {
    setFieldValue("country", e.value);
  };

  const tickConsent = (e) => {
    setIsAgreed(e.target.checked);
    setErrorMsg({ ...errorMsg, agreementChecked: null });
  };
  return (
    <div className="">
      <div className="py-5 md:py-10">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-2">
            <span className="relative hidden md:block">
              <img src={forgot_password_text_bg} alt="" />
              <p className="absolute top-3 left-10 md:top-2.5 md:left-14 text-sm md:text-base flex space-x-1 text-CharcoalGrey">
                <span>Book a Demo</span>
              </p>
            </span>
            <div className="md:hidden">
              <img src={book_a_demo} alt="" />
            </div>
            <h2 className="max-w-xs text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Want to see what we do?
            </h2>
          </div>
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleFormSubmit}
              className="bg-WhiteTitanic border-[0.1px] border-SunsetOrange pt-4 pb-12 space-y-6"
            >
              <div className="w-full px-8">
                <Input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("firstName")}
                  value={data?.firstName || ""}
                  error={showError("firstName")}
                />
              </div>
              <div className="w-full px-8">
                <Input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("lastName")}
                  value={data?.lastName || ""}
                  error={showError("lastName")}
                />
              </div>
              <div className="w-full px-8">
                <Input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="email"
                  name="work_email"
                  id="work_email"
                  placeholder="Work Email"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("work_email")}
                  value={data?.work_email || ""}
                  error={showError("work_email")}
                />
              </div>
              <div className="w-full px-8">
                <Input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company Name"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("company")}
                  value={data?.company || ""}
                  error={showError("company")}
                />
              </div>
              <div className="w-full px-8">
                <Input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Position"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("position")}
                  value={data?.position || ""}
                  error={showError("position")}
                />
              </div>
              <div className="w-full px-8">
                <Input
                  className="w-full border-none outline outline-offset-1 outline-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone Number"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("phone_number")}
                  value={data?.phone_number || ""}
                  error={showError("phone_number")}
                />
              </div>
              <div className="w-full px-8">
                <Dropdown
                  className="w-full border-solid bg-white border border-1 border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  name="country"
                  id="country"
                  placeholder="Country"
                  onChange={handleSelectChange}
                  options={Countries}
                  // onBlur={() => setFieldTouched("country")}
                  // value={data?.country || {}}
                />

                {showError("country") ? (
                  <FormHelperText text={showError("country")} />
                ) : null}
              </div>
              <div className="px-8 flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="consent"
                  className="mt-1.5 cursor-pointer"
                  id="consent"
                  value={isAgreed}
                  onChange={tickConsent}
                />
                <p>
                  I agree to receive marketing communications from Smartcomply
                  and also subjected to our{" "}
                  <Link to="" className="font-test-sohne-medium ">
                    Privacy
                  </Link>{" "}
                  and{" "}
                  <Link to="" className="font-test-sohne-medium ">
                    Terms
                  </Link>
                </p>
              </div>
              <div className="px-8">
                {errorMsg?.agreementChecked ? (
                  <FormHelperText text={errorMsg?.agreementChecked} />
                ) : null}
              </div>
              <div className="flex flex-col items-center space-y-20 md:space-y-0 md:flex-row  md:space-x-4 px-8 w-[90%]">
                <div className="w-full md:w-[40%] xl:w-[60%] border-b border-PaleViolet"></div>
                <Button
                  title="Get started"
                  className="bg-Oasis text-sm md:text-base text-Ebony hover:opacity-90"
                  inital_arrow={initial_black_icon}
                  hover_arrow={hover_black_icon}
                  loading={loading}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookADemoHeroSection;
