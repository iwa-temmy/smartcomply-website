import React from "react";

const FaqHeroSection = () => {
  return (
    <div>
      <div className="container mx-auto py-5 md:py-10 mb-6 space-y-12">
        <div className="w-full flex flex-col items-center justify-center space-y-4 py-10">
          <p className="font-test-sohne-light max-w-xs">FAQ</p>
          <h2 className="text-center flex flex-col text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
            <span> Frequently Asked</span> <span>Questions</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FaqHeroSection;
