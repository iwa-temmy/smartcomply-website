import React from "react";
import FrameWorkIso27001HeroSectionAnimation from "./FrameWorkIso27001HeroSectionAnimation";

const FrameWorkIso27001HeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Expand global reach with <br className="hidden md:block" /> ISO
              27001 Compliance
            </h2>
            <p className="font-test-sohne-light">
              The International Organization for Standardization (ISO) 27001
              stands as the paramount international standard dedicated to
              information security. It is developed to aid businesses across all
              sizes and industries with the aim to safeguard information
              systematically and cost-effectively. Implementing an Information
              Security Management System, organisations can secure the
              information they hold in a structured and efficient manner.
            </p>
          </div>
          <FrameWorkIso27001HeroSectionAnimation />
        </div>
      </div>
    </div>
  );
};

export default FrameWorkIso27001HeroSection;
