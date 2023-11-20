import React from "react";
import about_us_hero_img from "../../../assets/images/about_us_hero_img.svg";

const AboutUsHeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col items-center space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2 space-y-2 md:space-y-4 relative xl:-top-16">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
              About Us
            </h2>
            <p className="font-test-sohne-light max-w-xs">
              Wondering who we are?
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={about_us_hero_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
