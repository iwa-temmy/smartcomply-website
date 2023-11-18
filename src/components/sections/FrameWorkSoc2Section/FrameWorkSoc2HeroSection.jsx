import React from "react";
import soc2_hero_img from "../../../assets/images/soc2_hero_img.svg";
import Soc2Body from "./Soc2Body";

const FrameWorkSoc2HeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-12 md:space-y-32">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              Get compliant in SOC2
            </h2>
            <p className="font-test-sohne-light max-w-md">
              A SOC 2 audit report provides detailed information and assurance
              about a service organization&apos;s security, availability,
              processing integrity, confidentiality and privacy controls, based
              on their compliance with the AICPA&apos;s TSC, in accordance with
              SSAE 18.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={soc2_hero_img} alt="" />
          </div>
        </div>
      </div>
      <Soc2Body />
    </div>
  );
};

export default FrameWorkSoc2HeroSection;
