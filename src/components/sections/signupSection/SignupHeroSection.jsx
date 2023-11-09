import React from "react";
import create_account_text_bg from "../../../assets/icons/create_account_text_bg.svg";
import CustomLink from "../../primitive/CustomLink";

const SignupHeroSection = () => {
  return (
    <div className="py-4 md:py-8">
      <div className="container mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row">
        <div className="w-full md:w-1/2">
          <span className="relative">
            <img src={create_account_text_bg} alt="" />
            <span className="absolute top-2.5 left-8">Create account</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
            Provide credentials to create your account
          </h2>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-Ceramic border border-Chardonnay px-8 py-44">
            <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 mb-4 md:mb-6">
              <div className="w-full">
                <input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name=""
                  id=""
                  placeholder="First name"
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name=""
                  id=""
                  placeholder="Last name"
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name=""
                  id=""
                  placeholder="Company"
                />
              </div>
              <div className="w-full">
                <input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email address name"
                />
              </div>
              <div className="col-span-2 w-full">
                <input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
              <div className="col-span-2 w-full mb-6">
                <input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
              <div className="col-span-2  w-full">
                <label
                  htmlFor="userType"
                  className="text-sm md:text-lg text-CharcoalGrey"
                >
                  User Type
                </label>
                <input
                  className="w-full border border-Chardonnay rounded-xl px-6 py-4 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey placeholder:opacity-40 mt-2"
                  type="text"
                  name=""
                  id=""
                  placeholder="What are you registering as?"
                />
              </div>
            </div>
            <div>
              <CustomLink
                to="/auth/sign-up"
                title="Get started"
                className="bg-Oasis px-5 py-1.5 text-sm md:text-base text-Ebony"
              />
            </div>
            <div className="w-full bg-Oasis rounded-lg flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupHeroSection;
