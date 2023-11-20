import React from "react";
import snyk_logo from "../../../assets/logos/snyk_logo.svg";
import aws_logo from "../../../assets/logos/aws_logo.svg";
import digital_ocean_logo from "../../../assets/logos/digital_ocean_logo.svg";
import google_cloud_logo_2 from "../../../assets/logos/google_cloud_logo_2.svg";
import azure_logo from "../../../assets/logos/azure_logo.svg";
import github_logo_2 from "../../../assets/logos/github_logo_2.svg";
import jira_logo_2 from "../../../assets/logos/jira_logo_2.svg";

const ConnectYourInfastructure = () => {
  return (
    <div className="connect_your_infastructure_hero_bg_img pt-8 pb-4 md:pt-44 md:pb-20">
      <div className="container mx-auto space-y-10">
        <h3 className="flex flex-col text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium">
          <span>Connect Your Infrastructure &</span>
          <span>Application For Continuous Monitoring</span>
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-7 lg:gap-0">
          <div className="bg-white/[.2] backdrop-blur-[4px] border-2 border-Porcelain rounded-xl w-36 h-40 flex items-center justify-center">
            <img src={snyk_logo} className="" alt="" />
          </div>
          <div className="bg-white/[.2] backdrop-blur-[4px] border-2 border-Porcelain rounded-xl w-36 h-40 flex items-center justify-center">
            <img src={aws_logo} className="" alt="" />
          </div>
          <div className="bg-white/[.2] backdrop-blur-[4px] border-2 border-Porcelain rounded-xl w-36 h-40 flex items-center justify-center">
            <img src={digital_ocean_logo} className="" alt="" />
          </div>
          <div className="bg-white/[.2] backdrop-blur-[4px] border-2 border-Porcelain rounded-xl w-36 h-40 flex items-center justify-center">
            <img src={google_cloud_logo_2} className="" alt="" />
          </div>
          <div className="bg-white/[.2] backdrop-blur-[4px] border-2 border-Porcelain rounded-xl w-36 h-40 flex items-center justify-center">
            <img src={azure_logo} className="" alt="" />
          </div>
          <div className="bg-white/[.2] backdrop-blur-[4px] border-2 border-Porcelain rounded-xl w-36 h-40 flex items-center justify-center">
            <img src={github_logo_2} className="" alt="" />
          </div>
          <div className="bg-white/[.2] backdrop-blur-[4px] border-2 border-Porcelain rounded-xl w-36 h-40 flex items-center justify-center">
            <img src={jira_logo_2} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectYourInfastructure;
