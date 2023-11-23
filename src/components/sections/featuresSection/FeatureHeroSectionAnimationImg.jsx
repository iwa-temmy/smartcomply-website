import React, { useEffect, useState } from "react";
import feature_hero_section_card1_line from "../../../assets/icons/feature_hero_section_card1_line.svg";
import feature_hero_section_card2_line from "../../../assets/icons/feature_hero_section_card2_line.svg";
import feature_hero_section_card3_line from "../../../assets/icons/feature_hero_section_card3_line.svg";

const FeatureHeroSectionAnimationImg = () => {
  const [cardOne, setCardOne] = useState(true);
  const [cardTwo, setCardTwo] = useState(true);
  const [cardThree, setCardThree] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCardOne((prev) => !prev);
    }, 3000);

    const interval = setInterval(() => {
      setCardTwo((prev) => !prev);
    }, 3000);

    const interva = setInterval(() => {
      setCardThree((prev) => !prev);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(interval);
      clearInterval(interva);
    };
  }, []);

  const translateCardOne = cardOne ? "-translate-y-8 md:-translate-y-24" : "";
  const translateCardTwo = cardTwo ? "translate-y-32 md:translate-y-24" : "";
  const translateCardThree = cardThree
    ? "-translate-y-6 md:-translate-y-24"
    : "";
  return (
    <div className="grid grid-cols-3 gap-x-4 md:gap-x-8">
      <div
        className={`relative top-40 ${translateCardOne} transition-all transition_duration`}
      >
        <div className="bg-white px-1.5 md:px-3 py-2 md:py-4 space-y-3 rounded-2xl shadow-2xl shadow-white">
          <div className="w-full px-1 py-1 flex items-center space-x-2">
            <span className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-BlueChalk"></span>
            <span className="text-CharcoalGrey text-[8px] md:text-base">
              ISO27001
            </span>
          </div>
          <div className="bg-BlueChalk flex flex-col items-center space-y-6 py-12 rounded-lg md:w-56 md:h-60">
            <div className="flex flex-col text-[6px] md:text-base font-test-sohne-light ">
              <span>Audit questions</span>
              <span>completed</span>
            </div>
            <div className="bg-white rounded-[4px] py-0.5 md:py-1.5 px-2 flex items-center space-x-4 relative -right-2 md:-right-6">
              <span className="w-6 md:w-20 h-0.5 md:h-[5px] rounded-3xl bg-PaleViolet"></span>
              <span className="text-[3px] sm:text-[7px] font-test-sohne-light">
                70% completion
              </span>
            </div>
          </div>
        </div>
        <div className="pl-10 pt-4">
          <img src={feature_hero_section_card1_line} alt="" />
        </div>
      </div>
      <div
        className={`flex flex-col items-center relative -top-20 ${translateCardTwo} transition-all transition_duration`}
      >
        <div className="bg-white px-1.5 md:px-3 py-2 md:py-4 space-y-3 rounded-2xl shadow-2xl shadow-white">
          <div className="w-full px-1 py-1 flex items-center space-x-2">
            <span className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-BlueChalk"></span>
            <span className="text-CharcoalGrey text-[8px] md:text-base">
              ISO27001
            </span>
          </div>
          <div className="bg-PastelPink flex flex-col items-center space-y-6 py-12 rounded-lg md:w-56 md:h-60">
            <div className="flex flex-col text-[6px] md:text-base font-test-sohne-light ">
              <span>Documents</span>
              <span>Pending</span>
            </div>
            <div className="bg-white rounded-[4px] py-0.5 md:py-1.5 px-2 flex items-center space-x-4 relative -right-2 md:-right-6">
              <span className="w-6 md:w-24 h-0.5 md:h-[5px] rounded-3xl bg-Geraldine"></span>
              <span className="text-[3px] sm:text-[7px] font-test-sohne-light">
                80% completion
              </span>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <img src={feature_hero_section_card2_line} alt="" />
        </div>
      </div>
      <div
        className={`relative top-10 cursor-pointer ${translateCardThree} transition-all transition_duration`}
      >
        <div className="bg-white px-1.5 md:px-3 py-2 md:py-4 space-y-3 rounded-2xl shadow-2xl shadow-white">
          <div className="w-full px-1 py-1 flex items-center space-x-2">
            <span className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-BlueChalk"></span>
            <span className="text-CharcoalGrey text-[8px] md:text-base">
              ISO27001
            </span>
          </div>
          <div className="bg-Oasis flex flex-col items-center space-y-6 py-12 rounded-lg md:w-56 md:h-60">
            <div className="flex flex-col text-[6px] md:text-base font-test-sohne-light ">
              <span>PCI Scans Completed</span>
              <span>Documents uploaded</span>
            </div>
            <div className="bg-white rounded-[4px] py-0.5 md:py-1.5 px-2 flex items-center space-x-2 relative -right-2 md:-right-6">
              <span className="w-8 md:w-24 h-0.5 md:h-[5px] rounded-3xl bg-Chardonnay"></span>
              <span className="text-[3px] sm:text-[7px] font-test-sohne-light">
                95% completion
              </span>
            </div>
          </div>
        </div>
        <div className="pl-16 absolute bottom-20">
          <img src={feature_hero_section_card3_line} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeatureHeroSectionAnimationImg;
