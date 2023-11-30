import React from "react";
import FrameWorkNdprHeroSectionAnnimation from "../FrameWorkNdprSection/FrameWorkNdprHeroSectionAnnimation";

const FrameWorkNdprHeroSection = () => {
  return (
    <div className="py-5 md:py-10 mb-12 md:mb-24">
      <div className="container mx-auto flex flex-col space-y-16 md:space-y-36">
        <div className=" space-y-4 md:space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
            Protect Privacy and Revenue with NDPR Compliance
          </h2>
          <p className="font-test-sohne-light">
            In line with NDPR, data controllers and processors must fulfil
            specific responsibilities for legal data access and processing.
            Trust between companies and customers relies on robust data privacy
            compliance. Achieving NDPR compliance demands a comprehensive
            understanding, encompassing organisational policies, contracts,
            legal engagements, information technology, security protocols, audit
            processes, and operational systems.
          </p>
        </div>
        <FrameWorkNdprHeroSectionAnnimation />
      </div>
    </div>
  );
};

export default FrameWorkNdprHeroSection;
