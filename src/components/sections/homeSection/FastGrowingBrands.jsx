import React from "react";
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

const FastGrowingBrands = () => {
  return (
    <div className="relative container mx-auto md:-top-32 pb-8 md:pb-16">
      <hr />
      <div className="py-6 md:py-16">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl md:text-4xl max-w-sm font-test-sohne-medium">
              Trusted by Rapidly Growing Brands
            </h4>
            <p className="font-test-sohne-light">We're Inevitable!</p>
          </div>
          <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
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
      </div>
      <hr />
    </div>
  );
};

export default FastGrowingBrands;
