import React, { useEffect, useState } from "react";

const FrameWorkNdprHeroSectionAnnimation = () => {
  const [isScaled, setIsScaled] = useState(true);
  const [isSecondScaled, setIsSecondScaled] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsScaled((prev) => !prev);
    }, 3000);

    const secondIntervalId = setInterval(() => {
      setIsSecondScaled((prev) => !prev);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(secondIntervalId);
    };
  }, []);

  const scaleClass = isScaled ? "scale-100" : "scale-110";
  const secondScaleClass = isSecondScaled ? "scale-110" : "scale-100";
  return (
    <div className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-center space-x-4 md:space-x-8 xl:space-x-20">
      <div
        className={`w-fit h-fit bg-FloraWhite rounded-2xl pl-8 py-5 space-y-2 shadow_bg ${scaleClass} shadow-red-600 transition-all transition_duration`}
      >
        <div>
          <div className="flex items-start space-x-1 pr-6">
            <span className="w-2 h-2 bg-Chardonnay rounded-full mt-2.5"></span>
            <p className="flex flex-col text-xs sm:text-base md:text-xl text-CharcoalGrey font-test-sohne-medium ">
              PCIDSS
            </p>
          </div>
          <p className="text-[8px] md:text-[10px] flex flex-col font-test-sohne-light">
            <span>PCI Scans Completed</span>
            <span>Documents Uploaded</span>
          </p>
        </div>
        <div className="space-y-2">
          <div className="w-full bg-PapayaWhip rounded-[4px] py-1 md:py-1.5 px-2 flex items-center justify-between">
            <span className="w-8 md:w-16 h-1 md:h-1.5 rounded-3xl bg-Chardonnay"></span>
            <span className="text-[4px] sm:text-[6px]">70% completion</span>
          </div>
          <p className="text-Nobel text-[8px] md:text-xs">
            18/45 Questions Answered
          </p>
        </div>
      </div>
      <div
        className={`relative md:-top-16 w-fit h-fit bg-white rounded-2xl pl-12 pt-10 pb-5 space-y-6 z-30  shadow_bg ${secondScaleClass} transition-all transition_duration`}
      >
        <div className="space-y-2">
          <div className="flex items-start space-x-1 pr-1">
            <span className="w-2 h-2 bg-SunsetOrange rounded-full mt-2.5"></span>
            <p className="flex flex-col text-xs sm:text-base md:text-xl text-CharcoalGrey font-test-sohne-medium ">
              NDPR
            </p>
          </div>
          <p className="text-[8px] md:text-[10px] flex flex-col font-test-sohne-light">
            Documents pending
          </p>
        </div>
        <div className="w-full bg-LightRose rounded-[4px] py-1 md:py-1.5 px-2 flex items-center space-x-4">
          <span className="w-8 md:w-20 h-1 md:h-1.5 rounded-3xl bg-SunsetOrange"></span>
          <span className="text-[4px] sm:text-[6px]">80% completion</span>
        </div>
      </div>

      <div
        className={`w-fit h-fit bg-white rounded-2xl pl-4 md:pl-8 py-3 md:py-5 space-y-2 shadow_bg ${scaleClass} transition-all transition_duration`}
      >
        <div className="space-y-2">
          <p className="text-[10px]">Clause 5</p>
          <div className="flex items-start space-x-1 pr-2">
            <span className="w-2 h-2 bg-CaribbeanGreen rounded-full mt-2.5"></span>
            <p className="flex flex-col md:-space-y-1 text-xs sm:text-base md:text-xl text-CharcoalGrey font-test-sohne-medium ">
              <span>Data Protection Officer/</span> <span>Data Protection</span>
              <span>Compliance Organization</span>
            </p>
          </div>
        </div>
        <div className="space-y-2 pl-10">
          <div className="w-full bg-AeroBlue rounded-[4px] py-1 md:py-1.5 px-2 flex items-center justify-between">
            <span className="w-8 md:w-16 h-1 md:h-1.5 rounded-3xl bg-CaribbeanGreen"></span>
            <span className="text-[4px] sm:text-[6px]">30% completion</span>
          </div>
          <p className="text-Nobel text-[8px] md:text-xs">
            18/45 Questions Answered
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameWorkNdprHeroSectionAnnimation;
