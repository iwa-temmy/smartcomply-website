import React from "react";
import integration_arrow_icon from "../../../assets/icons/integration_arrow_icon.svg";
import image_s_1 from "../../../assets/images/image_s_1.png";
import image_s_2 from "../../../assets/images/image_s_2.png";

const WantToKnowUs = () => {
  const tabLists = [
    { tabName: "What is Smartcomply", border_color: "border-b-AztecPurple" },
    { tabName: "How it works", border_color: "border-b-SunsetOrange" },
    { tabName: "Why Smartcomply", border_color: "border-b-Chardonnay" },
  ];
  return (
    <div className="container mx-auto pb-72 md:pb-44">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-16">
        <div className="w-full md:w-3/12">
          <h3 className="flex flex-col text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium">
            <span>Get to</span>
            <span> Know Us?</span>
          </h3>
          <div>
            {tabLists.map((tab, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 border-b ${tab.border_color} text-CharcoalGrey text-sm md:text-[15px] pt-8 pb-4`}
              >
                <p>{tab.tabName}</p>
                <img src={integration_arrow_icon} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-9/12 relative">
          <div className="absolute top-0 fadeInClass z-10">
            <img src={image_s_1} className="w-full" alt="" />
          </div>
          <div className="absolute top-0">
            <img src={image_s_2} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WantToKnowUs;
