import React from "react";
import forgot_password_text_bg from "../../../assets/icons/forgot_password_text_bg.svg";
import CustomLink from "../../primitive/CustomLink";
import Slide from "../signupSection/Slide";

const ResetPasswordHeroSection = () => {
  return (
    <div className="">
      <div className="py-5 md:py-10">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-2">
            <span className="relative">
              <img src={forgot_password_text_bg} alt="" />
              <span className="absolute top-2.5 left-10">Forgot Password?</span>
            </span>
            <h2 className=" text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Resset Password
            </h2>
            <Slide />
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-RoseWhite border-[0.1px] border-SunsetOrange pb-2 space-y-6">
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
                          <span>complete</span>
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
              <div className="w-full px-8">
                <input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col space-y-20 px-8">
                <CustomLink
                  to=""
                  title="Reset Password"
                  className="bg-SunsetOrange px-3.5 py-1.5 text-sm md:text-base text-white mb-2"
                />
                <CustomLink
                  to="/auth/sign-in"
                  title="Sign In"
                  className="bg-PaleViolet px-3.5 py-1.5 text-sm md:text-base text-Ebony mb-2"
                />
              </div>
              <div className="p-2.5">
                <div className="w-full bg-BlueChalk py-4 px-5 rounded-xl flex items-center justify-between">
                  <div className="md:flex md:items-center md:space-x-4">
                    <p className="text-xs md:text-[15px]">
                      Don't have an Account?
                    </p>
                    <div className="hidden xl:block w-24 border-b border-PaleViolet"></div>
                  </div>
                  <CustomLink
                    to="/auth/sign-up"
                    title="Create Account"
                    className="bg-Oasis px-3.5 py-1.5 text-sm md:text-base text-Ebony"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordHeroSection;
