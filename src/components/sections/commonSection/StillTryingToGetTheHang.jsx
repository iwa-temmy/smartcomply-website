import React from "react";
import its_ok_bg from "../../../assets/images/Unionn.png";
import still_rying_to_get_the_hang from "../../../assets/images/still_rying_to_get_the_hang.png";
import CustomLink from "../../primitive/CustomLink";

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
            to=""
            title="Schedule a demo"
            className="bg-PaleViolet px-4 py-1.5 text-sm md:text-base text-Ebony"
          />
          <CustomLink
            to=""
            title="Try for free"
            className="bg-Chardonnay px-4 py-1.5 text-sm md:text-base text-Ebony"
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
