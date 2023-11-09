import React from "react";
import CustomLink from "../../primitive/CustomLink";

const SubscribeToNewsLetterSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row">
        <div className="w-full md:w-[40%]">
          <h3 className="flex flex-col text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium">
            <span>Subscribe to </span>
            <span>our Newsletter</span>
          </h3>
          <p className="text-sm md:text-base text-CharcoalGrey">
            Get latest news about security and compliance
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
                className="bg-Ebony px-4 py-1.5 text-sm md:text-base text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToNewsLetterSection;
