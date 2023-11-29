import React from "react";
import FrameWorkPcidssHeroSectionAnnimation from "../FrameWorkPcidssSection/FrameWorkPcidssHeroSectionAnnimation";

const FrameWorkPcidssHeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Simplify and Accelerate your PCI-DSS Certification
            </h2>
            <p className="font-test-sohne-light">
              The Payment Card Industry Data Security Standard (PCI DSS)
              comprises a set of security principles mandated for adherence by
              any company engaging with credit card information.
            </p>
          </div>
          <FrameWorkPcidssHeroSectionAnnimation />
        </div>
      </div>
    </div>
  );
};

export default FrameWorkPcidssHeroSection;
