import React from "react";
import we_are_bg from "../../../assets/images/we_are_bg.svg";
import get_in_touch_img from "../../../assets/images/get_in_touch_img.png";
import CustomLink from "../../primitive/CustomLink";
import initial_black_icon from "../../../assets/icons/inital_black_arrow.svg";
import hover_black_icon from "../../../assets/icons/hover_black_arrow.svg";

const GetInTouch = () => {
  return (
    <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row py-32">
      <div className="w-full md:w-1/2 space-y-32">
        <div className="flex flex-col font-test-sohne-medium relative ">
          <span className="text-5xl lg:text-[75px] lg:leading-[5rem]">
            Get in
          </span>{" "}
          <span className="text-5xl lg:text-[75px] lg:leading-[5rem]">
            touch
          </span>
          <div className="absolute left-28 top-12 lg:left-44 lg:top-24">
            <span className="relative">
              <img src={we_are_bg} className="w-[80%]" alt="" />
              <div className="text-CharcoalGrey text-sm md:text-base lg:text-xl w-full absolute inset-0 left-9 lg:left-12 flex flex-col items-start justify-center">
                <span>We are looking </span>
                <span>forward to </span>
                <span>connecting with you.</span>
              </div>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <CustomLink
            to=""
            title="Contact Us"
            className="bg-PaleViolet text-sm md:text-base text-Ebony"
            inital_arrow={initial_black_icon}
            hover_arrow={hover_black_icon}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={get_in_touch_img} alt="" />
      </div>
    </div>
  );
};

export default GetInTouch;
