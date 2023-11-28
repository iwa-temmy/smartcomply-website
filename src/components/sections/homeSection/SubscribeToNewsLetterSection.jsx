import React from "react";
import CustomLink from "../../primitive/CustomLink";
import initial_white_icon from "../../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../../assets/icons/hover_white_arrow.svg";

const SubscribeToNewsLetterSection = () => {
  return (
    <div className="container mx-auto py-8 md:py-16">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row">
        <div className="w-full md:w-[40%] space-y-4">
          <h3 className="flex flex-col text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium md:max-w-[16rem]">
            Be in the Loop!
          </h3>
          <p className="text-sm md:text-base text-CharcoalGrey md:max-w-sm">
            Read the Latest News About Smartcomply, AI, Automation,
            Cybersecurity and Compliance.
          </p>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="w-full bg-HintOfGreen pb-4 rounded-xl">
            <div className="w-full bg-PaleTurquoise px-6 py-8 rounded-xl space-y-6">
              <div>
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full bg-white placeholder:text-SilverChalice px-10 py-6 rounded-lg"
                  placeholder="Enter email here..."
                />
              </div>
              <CustomLink
                to=""
                title="Subscribe"
                className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
                inital_arrow={initial_white_icon}
                hover_arrow={hover_white_icon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToNewsLetterSection;
