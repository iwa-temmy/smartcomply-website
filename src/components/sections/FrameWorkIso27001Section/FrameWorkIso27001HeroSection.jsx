import React from "react";
import ISO27001_hero_img from "../../../assets/images/ISO27001_hero_img.svg";
import ISO27001Body from "./ISO27001Body";

const FrameWorkIso27001HeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Expand global reach with ISO27001 Compliance
            </h2>
            <p className="font-test-sohne-light">
              The International Organization for Standardization (ISO)27001 is
              the preeminent international standard that is centred on
              information security. It was developed to assist businesses,
              regardless of their size or field, in protecting the information
              that they hold in a methodical and economical manner by
              implementing an Information Security Management System.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={ISO27001_hero_img} alt="" />
          </div>
        </div>
      </div>
      <ISO27001Body />
    </div>
  );
};

export default FrameWorkIso27001HeroSection;
