import React from "react";
import its_ok_bg from "../../../assets/images/Unionn.png";
import still_rying_to_get_the_hang from "../../../assets/images/still_rying_to_get_the_hang.png";
import CustomLink from "../../primitive/CustomLink";
import initial_black_icon from "../../../assets/icons/inital_black_arrow.svg";
import hover_black_icon from "../../../assets/icons/hover_black_arrow.svg";

const StillTryingToGetTheHang = () => {
  return (
    <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row py-32">
      <div className="w-full md:w-1/2 space-y-10">
        <div className="flex flex-col font-test-sohne-medium">
          <span className="text-5xl lg:text-[75px] lg:leading-[5rem]">
            Still trying to
          </span>{" "}
          <span className="text-5xl lg:text-[75px] lg:leading-[5rem]">
            get the hang{" "}
          </span>
          <div className="flex space-x-2">
            <span className="text-5xl lg:text-[75px] lg:leading-[5rem]">
              of it?
            </span>
            <span className="relative">
              <img src={its_ok_bg} alt="" />
              <span className="absolute inset-0 flex items-center justify-center">
                It is ok
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <CustomLink
            to="/book-a-demo"
            title="Book a demo"
            className="bg-PaleViolet text-sm md:text-base text-Ebony"
            inital_arrow={initial_black_icon}
            hover_arrow={hover_black_icon}
          />
          <CustomLink
            to="/auth/sign-up"
            title="Try for free"
            className="bg-Chardonnay text-sm md:text-base text-Ebony"
            inital_arrow={initial_black_icon}
            hover_arrow={hover_black_icon}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={still_rying_to_get_the_hang} alt="" />
      </div>
    </div>
  );
};

export default StillTryingToGetTheHang;
