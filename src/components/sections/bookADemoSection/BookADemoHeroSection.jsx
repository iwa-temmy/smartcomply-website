import React from "react";
import forgot_password_text_bg from "../../../assets/icons/forgot_password_text_bg.svg";
import book_a_demo from "../../../assets/images/book_a_demo.svg";
import CustomLink from "../../primitive/CustomLink";
import initial_black_icon from "../../../assets/icons/inital_black_arrow.svg";
import hover_black_icon from "../../../assets/icons/hover_black_arrow.svg";
import { Link } from "react-router-dom";
import { Countries } from "../../../utils/data";

const BookADemoHeroSection = () => {
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
            <div className="bg-WhiteTitanic border-[0.1px] border-SunsetOrange pt-4 pb-12 space-y-6">
              <div className="w-full px-8">
                <input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                />
              </div>
              <div className="w-full px-8">
                <input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full px-8">
                <input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="email"
                  name=""
                  id=""
                  placeholder="Work Email"
                />
              </div>
              <div className="w-full px-8">
                <input
                  className="w-full border border-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name=""
                  id=""
                  placeholder="Company Name"
                />
              </div>
              <div className="w-full px-8">
                <input
                  className="w-full border-none outline outline-offset-1 outline-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full px-8">
                <select
                  className="w-full border-r-[12px] border-0 border-solid border-white outline outline-offset-1 outline-SunsetOrange rounded-xl px-6 py-5 text-sm md:text-lg font-test-sohne-light placeholder:text-CharcoalGrey"
                  type="text"
                  name=""
                  id=""
                  placeholder="Country"
                >
                  {Countries?.map((country, index) => (
                    <option key={index} value={country?.name}>
                      {country?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-8 flex items-start space-x-3">
                <input
                  type="checkbox"
                  name=""
                  className="mt-1.5 cursor-pointer"
                  id=""
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
              <div className="flex flex-col items-center space-y-20 md:space-y-0 md:flex-row  md:space-x-4 px-8 w-[90%]">
                <div className="w-full md:w-[40%] xl:w-[60%] border-b border-PaleViolet"></div>
                <CustomLink
                  to="/auth/sign-up"
                  title="Get started"
                  className="bg-Oasis text-sm md:text-base text-Ebony hover:opacity-90"
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

export default BookADemoHeroSection;
