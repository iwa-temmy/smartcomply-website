import React from "react";
import create_account_text_bg from "../../../assets/icons/create_account_text_bg.svg";
import signup_img from "../../../assets/images/signup_img.svg";
import CustomLink from "../../primitive/CustomLink";
import Slide from "./Slide";
import initial_black_icon from "../../../assets/icons/inital_black_arrow.svg";
import hover_black_icon from "../../../assets/icons/hover_black_arrow.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFormValidation from "../../../hooks/useFormValidation";
import { GET_STARTED_VALIDATION } from "../../../utils/fieldValidations";
import Button from "../../primitive/Button";
import Input from "../../primitive/Input";
import FormHelperText from "../../primitive/FormHelperText";

const SignupHeroSection = () => {
  const navigate = useNavigate();

  //form submission
  const submitForm = async (values) => {
    if (values?.password !== values?.confirm_password) {
      toast.error("Password does not match, please confirm and retry");
      return;
    }
    delete data?.confirm_password;
    try {
      const response = await axios.post(
        "https://api.smartcomplyapp.com/api/user_mgt/users/",
        values,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response?.data?.status) {
        clearFormState();
        navigate("/success", { state: "register" });
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
  } = useFormValidation(GET_STARTED_VALIDATION, submitForm);

  // functions
  const clearFormState = () => {
    resetForm();
  };
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <div className="py-5 md:py-10">
      <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <span className="relative hidden md:block">
            <img src={create_account_text_bg} alt="" />
            <p className="absolute top-2.5 left-8 md:top-2.5 md:left-8 text-sm md:text-base flex space-x-1 text-CharcoalGrey">
              <span>Create</span> <span>account</span>
            </p>
          </span>
          <div className="md:hidden">
            <img src={signup_img} alt="" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
            Provide your credentials to create an account
          </h2>
          <Slide />
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-Ceramic border-[0.1px] border-Chardonnay pb-2 space-y-6">
            <div className="flex justify-center">
              <div className="flex justify-between w-[83%]">
                <div className="bg-white px-2 w-fit space-y-4 relative -top-2">
                  <div className="w-full px-2 py-1 bg-white flex items-center space-x-2">
                    <span className="w-4 h-4 rounded-full bg-BlueChalk"></span>
                    <span className="text-CharcoalGrey text-sm font-test-sohne-light">
                      ISO27001
                    </span>
                  </div>
                  <div className="px-2">
                    <div className="bg-BlueChalk flex flex-col items-center space-y-6 py-12 rounded-lg md:w-44 md:h-48">
                      <div className="flex flex-col text-[10px] font-test-sohne-light ">
                        <span>Audit questions</span>
                        <span>completed</span>
                      </div>
                      <div className="bg-white rounded-[4px] py-1 px-2 flex items-center space-x-8 relative -right-2 md:-right-6">
                        <span className="w-8 md:w-12 h-1 rounded-3xl bg-AztecPurple"></span>
                        <span className="text-[4px] sm:text-[6px]">
                          70% completion
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white px-3 w-fit space-y-4 relative -top-2">
                  <div className="bg-PastelPink flex flex-col items-center space-y-6 py-12 rounded-lg md:w-44 md:h-48">
                    <div className="flex flex-col text-[10px] font-test-sohne-light">
                      <span>Documents</span>
                      <span>pending</span>
                    </div>
                    <div className="bg-VistaWhite rounded-[4px] py-1 px-2 flex items-center space-x-8 relative -right-2 md:-right-6">
                      <span className="w-10 md:w-16 h-1 rounded-3xl bg-Geraldine"></span>
                      <span className="text-[4px] sm:text-[6px]">
                        80% completion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleFormSubmit}
              className="grid grid-cols-2 gap-x-2 gap-y-2.5 px-8"
            >
              <div className="w-full">
                <Input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="first_name"
                  id="first_name"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("first_name")}
                  value={data?.first_name || ""}
                  error={showError("first_name")}
                  placeholder="First name"
                />
              </div>
              <div className="w-full">
                <Input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="last_name"
                  id="last_name"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("last_name")}
                  value={data?.last_name || ""}
                  error={showError("last_name")}
                  placeholder="Last name"
                />
              </div>
              <div className="w-full">
                <Input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name="company_name"
                  id="company_name"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("company_name")}
                  value={data?.company_name || ""}
                  error={showError("company_name")}
                  placeholder="Company"
                />
              </div>
              <div className="w-full">
                <Input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("email")}
                  value={data?.email || ""}
                  error={showError("email")}
                  placeholder="Email address"
                />
              </div>
              <div className="col-span-2 w-full">
                <Input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("password")}
                  value={data?.password || ""}
                  error={showError("password")}
                  placeholder="Password"
                />
              </div>
              <div className="col-span-2 w-full mb-2">
                <Input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("confirm_password")}
                  value={data?.confirm_password || ""}
                  error={showError("confirm_password")}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="col-span-2  w-full">
                <label
                  htmlFor="userType"
                  className="text-sm md:text-lg text-CharcoalGrey"
                >
                  User Type
                </label>
                <select
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey placeholder:opacity-40 mt-2"
                  type="text"
                  name="user_type"
                  id="user_type"
                  placeholder="What are you registering as?"
                  onChange={handleTextChange}
                  onBlur={() => setFieldTouched("user_type")}
                  value={data?.user_type || ""}
                >
                  <option value="">What are you registering as?</option>
                  <option value="merchant">Merchant</option>
                </select>
                {showError("user_type") ? (
                  <FormHelperText text={showError("user_type")} />
                ) : null}
              </div>
              <div className="pt-3">
                <Button
                  type="submit"
                  title="Create Account"
                  loading={loading}
                  className="bg-Oasis text-sm md:text-base text-Ebony mb-2"
                  inital_arrow={initial_black_icon}
                  hover_arrow={hover_black_icon}
                />
              </div>
            </form>

            <div className="p-2.5">
              <div className="w-full bg-Oasis py-4 px-5 rounded-xl flex items-center justify-between">
                <div className="md:flex md:items-center md:space-x-4">
                  <p className="text-xs md:text-[15px]">
                    Already have an Account?
                  </p>
                  <div className="hidden xl:block w-24 border-b border-PaleViolet"></div>
                </div>
                <CustomLink
                  to="https://app.smartcomply.com/auth/login"
                  target="_blank"
                  title="Sign in"
                  className="bg-PaleViolet text-sm md:text-base text-Ebony"
                  inital_arrow={initial_black_icon}
                  hover_arrow={hover_black_icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupHeroSection;
