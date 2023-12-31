import React, { useEffect, useState } from "react";

const FrameWorkIso27001HeroSectionAnimation = () => {
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
    <div className="w-full md:w-1/2 relative py-64 md:py-0">
      <div
        className={`w-fit h-fit bg-white rounded-lg pl-8 py-5 space-y-2 absolute top-1/2 transform -translate-y-1/2 shadow_bg ${scaleClass} transition-all transition_duration`}
      >
        <p className="text-[10px] pr-8">Clause 4</p>
        <div className="flex items-start space-x-1 pr-8">
          <span className="w-2 h-2 bg-Oasis_2 rounded-full mt-2.5"></span>
          <p className="flex flex-col text-base md:text-xl font-test-sohne-medium text-CharcoalGrey">
            <span> Context of</span>
            <span>the Organization</span>
          </p>
        </div>
        <div className="w-full bg-OldLace rounded-[4px] py-1 md:py-1.5 px-2 flex items-center justify-between">
          <span className="w-8 md:w-12 h-1 md:h-1.5 rounded-3xl bg-Chardonnay"></span>
          <span className="text-[4px] sm:text-[6px]">30% completion</span>
        </div>
        <p className="text-Nobel text-xs">18/45 Questions Answered</p>
      </div>
      <div
        className={`w-fit h-fit bg-white rounded-lg pl-8 pt-10 pb-5 space-y-3 absolute z-30 top-16 left-1/2 -transform -translate-x-1/2 shadow_bg ${secondScaleClass} transition-all transition_duration`}
      >
        <div className="flex items-start space-x-1 pr-8">
          <span className="w-2 h-2 bg-Oasis_2 rounded-full mt-2.5"></span>
          <p className="flex flex-col text-base md:text-xl font-test-sohne-medium text-CharcoalGrey">
            IOS27001
          </p>
        </div>
        <p className="text-[10px]">Audit questions completed</p>
        <div className="w-full bg-OldLace rounded-[4px] py-1 md:py-1.5 px-2 flex items-center space-x-4">
          <span className="w-8 md:w-24 h-1 md:h-1.5 rounded-3xl bg-Chardonnay"></span>
          <span className="text-[4px] sm:text-[6px]">70% completion</span>
        </div>
      </div>
      <div
        className={`w-fit h-fit bg-white rounded-lg pl-8 py-5 space-y-12 absolute right-0 top-[60%] transform -translate-y-1/2 shadow_bg ${scaleClass} transition-all transition_duration`}
      >
        <div className="space-y-2">
          <p className="text-[10px]">Clause 5</p>
          <div className="flex items-start space-x-1 pr-16">
            <span className="w-2 h-2 bg-Oasis_2 rounded-full mt-2.5"></span>
            <p className="flex flex-col text-base md:text-xl font-test-sohne-medium text-CharcoalGrey">
              Leadership
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-full bg-OldLace rounded-[4px] py-1 md:py-1.5 px-2 flex items-center justify-between">
            <span className="w-8 md:w-12 h-1 md:h-1.5 rounded-3xl bg-Chardonnay"></span>
            <span className="text-[4px] sm:text-[6px]">30% completion</span>
          </div>
          <p className="text-Nobel text-xs">18/45 Questions Answered</p>
        </div>
      </div>
    </div>
  );
};

export default FrameWorkIso27001HeroSectionAnimation;
