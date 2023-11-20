import React from "react";
import CustomLink from "../../primitive/CustomLink";
import BookDemoIconsTransition from "./BookDemoIconsTransition";
import HomeHeroSectionAnimationImg from "./HomeHeroSectionAnimationImg";
import pennyTreeLogo from "../../../assets/logos/pennyTreeLogo.svg";
import smile_identify from "../../../assets/logos/smile_identify.svg";
import simplifyLogo from "../../../assets/logos/simplifyLogo.svg";
import crus_logo from "../../../assets/logos/crus_logo.svg";
import swiftendLogo from "../../../assets/logos/swiftendLogo.svg";
import veend_logo from "../../../assets/logos/veend_logo.svg";
import swifcard_logo from "../../../assets/logos/swifcard_logo.svg";
import three_LineLogo from "../../../assets/logos/three_LineLogo.svg";
import appZoneLogo from "../../../assets/logos/appZoneLogo.svg";
import blackcopper_logo from "../../../assets/logos/blackcopper_logo.svg";
import initial_white_icon from "../../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../../assets/icons/hover_white_arrow.svg";

const HomeHeroSection = () => {
  return (
    <div className="container mx-auto space-y-10">
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
              className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
              inital_arrow={initial_white_icon}
            hover_arrow={hover_white_icon}
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
      <div className="hidden md:flex flex-col space-y-8 md:space-y-0 md:flex-row">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl md:text-4xl max-w-sm font-test-sohne-medium">
            Fast Growing brands that trusts us
          </h4>
          <p className="font-test-sohne-light">Because we are inevitable</p>
        </div>
        <div className="w-full md:w-1/2 md:space-y-4">
          <div className="flex flex-row items-center space-x-6">
            <div>
              <img src={pennyTreeLogo} alt="" />
            </div>
            <div>
              <img src={smile_identify} alt="" />
            </div>
            <div>
              <img src={simplifyLogo} alt="" />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-6">
            <div>
              <img src={crus_logo} alt="" />
            </div>
            <div>
              <img src={swiftendLogo} alt="" />
            </div>
            <div>
              <img src={veend_logo} alt="" />
            </div>
            <div>
              <img src={swifcard_logo} alt="" />
            </div>
          </div>
          <div className="flex flex-row items-center space-x-6">
            <div>
              <img src={three_LineLogo} alt="" />
            </div>
            <div>
              <img src={appZoneLogo} alt="" />
            </div>
            <div>
              <img src={blackcopper_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HomeHeroSection;
