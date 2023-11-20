import React from "react";
import integration_hero_img from "../../../assets/images/integration_hero_img.png";

const IntegrationHeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col items-center space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 relative xl:-top-16">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Integrations
            </h2>
            <p className="font-test-sohne-light max-w-xs">
              Connect your infrastructures & applications forcontinuous
              monitoring
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={integration_hero_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationHeroSection;
