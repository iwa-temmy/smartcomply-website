import React from "react";
import CustomLink from "../../primitive/CustomLink";
import BookDemoIconsTransition from "./BookDemoIconsTransition";
import HomeHeroSectionAnimationImg from "./HomeHeroSectionAnimationImg";

const HomeHeroSection = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:space-x-10 py-4">
        <div className="w-full md:w-1/2 space-y-8 md:space-y-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[70px] lg:leading-[5rem] font-test-sohne-medium">
            Embrace Automation and AI for Seamless Compliance!
          </h2>
          <p>
            An automated and AI-powered compliance platform, SmartcomplyApp
            provides the most in-demand standards, risk assessment and
            monitoring, and privacy frameworks in the business, allowing you to
            gain your customers' trust and grow your business safely.
          </p>
          <div className="w-full flex items-center space-x-4 ">
            <CustomLink
              to=""
              title="Book a demo"
              className="bg-black px-3.5 py-1.5 text-sm md:text-base text-white"
            />
            <div className="hidden xl:block w-24 border-b border-AshGrey"></div>
            <BookDemoIconsTransition />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:flex md:justify-end">
          <HomeHeroSectionAnimationImg />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HomeHeroSection;
