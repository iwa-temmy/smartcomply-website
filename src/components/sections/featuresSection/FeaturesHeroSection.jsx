import React from "react";
import FeatureHeroSectionAnimationImg from "./FeatureHeroSectionAnimationImg";

const FeaturesHeroSection = () => {
  return (
    <div className="relative z-10">
      <div className="container mx-auto flex flex-col items-center lg:flex-row md:justify-start md:items-start py-32">
        <div className="space-y-4 relative -top-20 md:-top-0">
          <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
            Features
          </h2>
          <p className="text-sm md:text-base font-test-sohne-light">
            What our platform offers you in terms of benefits
          </p>
        </div>
        <div className="lg:absolute lg:right-0">
          <FeatureHeroSectionAnimationImg />
        </div>
      </div>
    </div>
  );
};

export default FeaturesHeroSection;
