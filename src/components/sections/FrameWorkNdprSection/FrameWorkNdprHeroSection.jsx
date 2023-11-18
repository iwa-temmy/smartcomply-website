import React from "react";
import protect_pravacy_hero_img from "../../../assets/images/protect_pravacy_hero_img.svg";
import NdprBody from "./NdprBody";

const FrameWorkNdprHeroSection = () => {
  return (
    <div>
      <div className="py-5 md:py-10 mb-2">
        <div className="container mx-auto flex flex-col space-y-8">
          <div className=" space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
            Protect Privacy and revenue with NDPR Compliance
            </h2>
            <p className="font-test-sohne-light">
            In order for data controllers and processors to legally access and process data, the NDPR sets a number of responsibilities that they must fulfil.The strengthening of trust between companies and their customers results from compliance with data privacy legislation. Compliance with data protection regulations needs a grasp of not only the policies, contracts, and legal engagements of an organization, but also of the organization's information technology, security, audit, and operational system. This is in addition to prior knowledge
            </p>
          </div>
          <div className="">
            <img src={protect_pravacy_hero_img} alt="" />
          </div>
        </div>
      </div>
      <NdprBody />
    </div>
  );
};

export default FrameWorkNdprHeroSection;
