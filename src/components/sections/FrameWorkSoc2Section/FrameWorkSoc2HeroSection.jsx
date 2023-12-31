import React from "react";
import FrameWorkSoc2HeroSectionAnnimation from "../FrameWorkSoc2Section/FrameWorkSoc2HeroSectionAnnimation";

const FrameWorkSoc2HeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-12 md:space-y-32">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Achieve SOC2 Compliance Faster
            </h2>
            <p className="font-test-sohne-light max-w-md">
              Smartcomply accelerates businesses&apos; SOC2 compliance by
              providing a platform for easy onboarding and smart questionnaires
              that get organisations started in minutes. Smartcomply is designed
              with an automated documentation and evidence collection process,
              audit readiness monitoring, and tracking follow-up process for
              remediation and process improvement.
            </p>
          </div>
          <FrameWorkSoc2HeroSectionAnnimation />
        </div>
      </div>
    </div>
  );
};

export default FrameWorkSoc2HeroSection;
