import React, { useState } from "react";
import CustomLink from "../../primitive/CustomLink";
import initial_white_icon from "../../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../../assets/icons/hover_white_arrow.svg";
import entreprise_img from "../../../assets/images/entreprise_img.png";
import {
  startup_data,
  growth_data,
  enterprise_data,
} from "../../../mockdata/pricingdata";

const CertificationAudit = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen_2, setIsMenuOpen_2] = useState(false);
  const [isMenuOpen_3, setIsMenuOpen_3] = useState(false);

  return (
    <div className="relative pb-8 md:pb-24 space-y-10">
      <div className="container mx-auto space-y-2 md:space-y-4">
        <h2 className="text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium max-w-5xl text-CharcoalGrey">
          Certification Audit <br className="hidden xl:block" /> available on
          paid request
        </h2>
        <p className="font-test-sohne-light max-w-xs">
          Compare and check out what you might miss
        </p>
      </div>
      <div className="px-[1.5rem] md:px-0 w-full flex flex-col md:space-y-0 md:flex-row md:space-x-6 md:pl-16 xl:pl-24">
        <div className="w-full md:w-fit h-fit md:h-[730px]">
          <div className="bg-CaribbeanGreen rounded-t-3xl">
            <p className=" text-white text-2xl py-4 px-3">Popular choice</p>
          </div>
          <div className="relative md:z-40 h-full">
            <div
              className={`absolute inset-y-0 -ml-2 left-[100%] flex items-start pl-12 pr-3 space-x-2 bg-white border-r-4 border-r-white rounded-tr-3xl rounded-br-3xl ${
                isMenuOpen
                  ? "opacity-100 transform scale-x-100 translate-x-0"
                  : "opacity-0 transform scale-x-0 -translate-x-1/2"
              } transition ease-in-out duration-1000`}
            >
              <div className="flex flex-col md:w-[500px]">
                <div className="flex space-x-8 border-b-[0.1px] border-b-CaribbeanGreen">
                  <div className="w-[60%] space-y-3 pt-10 md:pb-8 xl:pb-10 startup_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Audit and Auditor Collaboration</p>
                      <p>Artificial Intelligence</p>
                      <p>In-House Auditor Support</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-10 md:pb-8 xl:pb-10">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Yes</p>
                      <p>No</p>
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-8 border-b-[0.1px] border-b-CaribbeanGreen">
                  <div className="w-[60%] space-y-3 pt-4 md:pb-8 xl:pb-10 startup_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Pre-Security Assessment</p>
                      <p>Trust Report</p>
                      <p>Dedicated Support</p>
                      <p>Vendor Management</p>
                      <p>CISO Report</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-4 md:pb-8 xl:pb-10">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Yes</p>
                      <p>No</p>
                      <p>No</p>
                      <p>Up to 5 Vendors</p>
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-8  md:pb-8 xl:pb-10">
                  <div className="w-[60%] space-y-3 pt-4 startup_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Scan functionality
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Automated Scan</p>
                      <p>PCI Frequency</p>
                      <p>PCI Scan</p>
                      <p>Frequency Of Penetration Test</p>
                      <p>Penetration Test</p>
                      <p>On-Premises Server Monitoring</p>
                      <p>Background Check</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-4">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Up to 10 Infrastructure</p>
                      <p>3 IP(s)</p>
                      <p>10 uploads</p>
                      <p>1 IP(s)</p>
                      <p>2 Upload + Pentest</p>
                      <p>10 Server</p>
                      <p>Up to 5 users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full pr-1.5 bg-CaribbeanGreen rounded-b-3xl">
              <div
                className={`h-full relative inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 rounded-tl-full rounded-bl-full focus:outline-none transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-white hover:bg-white"
                    : "rounded-tr-full rounded-br-full"
                }`}
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <div className="w-full md:w-72 h-full space-y-8 bg-HintOfGreen px-4 pt-8 pb-4 md:pb-24 xl:pb-32 rounded-3xl">
                  <div className="flex flex-col space-y-4">
                    <h4 className="font-test-sohne-medium text-2xl md:text-4xl text-CharcoalGrey">
                      Start Up
                    </h4>
                    <span className="w-fit text-CharcoalGrey bg-white px-4 py-2 rounded-md text-sm md:text-[15px]">
                      1 - 50 Employees
                    </span>
                    <div>
                      <CustomLink
                        to="/auth/sign-up"
                        title="Get started"
                        className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
                        inital_arrow={initial_white_icon}
                        hover_arrow={hover_white_icon}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {startup_data.map((start_up_list, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div>
                            <img src={start_up_list.icon} alt="" />
                          </div>
                          <p className="text-sm md:text-base text-CharcoalGrey">
                            {start_up_list.list}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit h-fit md:md:h-[730px]">
          <div className="">
            <p className=" text-white text-2xl py-4 px-3">Popular choice</p>
          </div>
          <div className="relative md:z-30 h-full">
            <div
              className={`h-full absolute inset-y-0 -ml-2 left-[100%] flex items-start pl-12 pr-3 space-x-2 bg-white border-r-4 border-r-white rounded-tr-3xl rounded-br-3xl ${
                isMenuOpen_2
                  ? "opacity-100 transform scale-x-100 translate-x-0"
                  : "opacity-0 transform scale-x-0 -translate-x-1/2"
              } transition ease-in-out duration-1000`}
            >
              <div className="flex flex-col h-full w-[500px]">
                <div className="flex space-x-8 border-b-[0.1px] border-b-PaleViolet">
                  <div className="w-[60%] space-y-3 pt-10 md:pb-8 xl:pb-10 growth_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Audit and Auditor Collaboration</p>
                      <p>Artificial Intelligence</p>
                      <p>In-House Auditor Support</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-10 md:pb-8 xl:pb-10">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Yes</p>
                      <p>No</p>
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-8 border-b-[0.1px] border-b-PaleViolet">
                  <div className="w-[60%] space-y-3 pt-4 md:pb-8 xl:pb-10 growth_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Pre-Security Assessment</p>
                      <p>Trust Report</p>
                      <p>Dedicated Support</p>
                      <p>Vendor Management</p>
                      <p>CISO Report</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-4 md:pb-8 xl:pb-10">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Yes</p>
                      <p>No</p>
                      <p>No</p>
                      <p>Up to 10 Vendors</p>
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-8  md:pb-8 xl:pb-10">
                  <div className="w-[60%] space-y-3 pt-4 growth_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Scan functionality
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Automated Scan</p>
                      <p>PCI Frequency</p>
                      <p>PCI Scan</p>
                      <p>Frequency Of Penetration Test</p>
                      <p>Penetration Test</p>
                      <p>On-Premises Server Monitoring</p>
                      <p>Background Check</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-4">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Up to 30 Infrastructure</p>
                      <p>20 IP(s)</p>
                      <p>100 uploads</p>
                      <p>2 IP(s)</p>
                      <p>100 Upload + Pentest</p>
                      <p>20 Server</p>
                      <p>Up to 20 users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full pr-1.5 bg-PaleViolet rounded-3xl">
              {/* <p className="text-white text-2xl py-4 px-3">Popular choice</p> */}
              <div
                className={`h-full relative inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 rounded-tl-full rounded-bl-full focus:outline-none transition-all duration-300 ${
                  isMenuOpen_2
                    ? "bg-white hover:bg-white"
                    : "rounded-tr-full rounded-br-full"
                }`}
                onMouseEnter={() => setIsMenuOpen_2(true)}
                onMouseLeave={() => setIsMenuOpen_2(false)}
              >
                <div className="w-full md:w-64 h-full space-y-8 bg-BlueChalk px-4 pt-8 pb-4 md:pb-24 xl:pb-32 rounded-3xl">
                  <div className="flex flex-col space-y-4">
                    <h4 className="font-test-sohne-medium text-2xl md:text-4xl text-CharcoalGrey">
                      Growth
                    </h4>
                    <span className="w-fit text-CharcoalGrey bg-white px-4 py-2 rounded-md text-sm md:text-[15px]">
                      50 - 100 Employees
                    </span>
                    <div>
                      <CustomLink
                        to="/auth/sign-up"
                        title="Get started"
                        className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
                        inital_arrow={initial_white_icon}
                        hover_arrow={hover_white_icon}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="font-test-sohne-medium max-w-[12rem] text-lg md:text-xl text-CharcoalGrey">
                      All the goodness of Start-up plan, with more range and
                    </p>
                    {growth_data.map((start_up_list, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div>
                            <img src={start_up_list.icon} alt="" />
                          </div>
                          <p className="text-sm md:text-base text-CharcoalGrey">
                            {start_up_list.list}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit h-fit md:h-[730px]">
          <div className="">
            <p className=" text-white text-2xl py-4 px-3">Popular choice</p>
          </div>
          <div className="relative md:z-20 h-full">
            <div
              className={`h-full absolute inset-y-0 -ml-2 left-[100%] flex items-start pl-12 pr-3 space-x-2 bg-white border-r-4 border-r-white rounded-tr-3xl rounded-br-3xl ${
                isMenuOpen_3
                  ? "opacity-100 transform scale-x-100 translate-x-0"
                  : "opacity-0 transform scale-x-0 -translate-x-1/2"
              } transition ease-in-out duration-1000`}
            >
              <div className="flex flex-col h-full w-[500px]">
                <div className="flex space-x-8 border-b-[0.1px] border-b-PaleViolet">
                  <div className="w-[60%] space-y-3 pt-10 md:pb-8 xl:pb-10 growth_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Audit and Auditor Collaboration</p>
                      <p>Artificial Intelligence</p>
                      <p>In-House Auditor Support</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-10 md:pb-8 xl:pb-10">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Yes</p>
                      <p>No</p>
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-8 border-b-[0.1px] border-b-PaleViolet">
                  <div className="w-[60%] space-y-3 pt-4 md:pb-8 xl:pb-10 growth_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Pre-Security Assessment</p>
                      <p>Trust Report</p>
                      <p>Dedicated Support</p>
                      <p>Vendor Management</p>
                      <p>CISO Report</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-4 md:pb-8 xl:pb-10">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Yes</p>
                      <p>No</p>
                      <p>No</p>
                      <p>Up to 200 Vendors</p>
                      <p>No</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-8  md:pb-8 xl:pb-10">
                  <div className="w-[60%] space-y-3 pt-4 growth_right_border_dashed">
                    <h5 className="font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Scan functionality
                    </h5>
                    <div className="space-y-2 text-CharcoalGrey text-sm md:text-[15px] font-test-sohne-light">
                      <p>Automated Scan</p>
                      <p>PCI Frequency</p>
                      <p>PCI Scan</p>
                      <p>Frequency Of Penetration Test</p>
                      <p>Penetration Test</p>
                      <p>On-Premises Server Monitoring</p>
                      <p>Background Check</p>
                    </div>
                  </div>
                  <div className="w-[40%] space-y-3 pt-4">
                    <h5 className="text-transparent font-test-sohne-medium text-CharcoalGrey text-base md:text-xl">
                      Auditing
                    </h5>
                    <div className="space-y-2 text-MountainMist text-sm md:text-[15px] font-test-sohne-light">
                      <p>Up to 200 Infrastructure</p>
                      <p>200 IP(s)</p>
                      <p>200 uploads</p>
                      <p>4 IP(s)</p>
                      <p>200 Upload + Pentest</p>
                      <p>50 Server</p>
                      <p>Up to 200 users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full pr-1.5 bg-CrystalBlue rounded-3xl">
              <div
                className={`h-full relative inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 rounded-tl-full rounded-bl-full focus:outline-none transition-all duration-300 ${
                  isMenuOpen_3
                    ? "bg-white hover:bg-white"
                    : "rounded-tr-full rounded-br-full"
                }`}
                onMouseEnter={() => setIsMenuOpen_3(true)}
                onMouseLeave={() => setIsMenuOpen_3(false)}
              >
                <div className="w-full md:w-64 h-full space-y-8 bg-LilyWhite px-4 pt-8 pb-4 md:pb-24 xl:pb-32 rounded-3xl">
                  <div className="flex flex-col space-y-4">
                    <h4 className="font-test-sohne-medium text-2xl md:text-4xl text-CharcoalGrey">
                      Enterprise
                    </h4>
                    <span className="w-fit text-CharcoalGrey bg-white px-4 py-2 rounded-md text-sm md:text-[15px]">
                      100-above Employees
                    </span>
                    <div>
                      <CustomLink
                        to="/auth/sign-up"
                        title="Get started"
                        className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
                        inital_arrow={initial_white_icon}
                        hover_arrow={hover_white_icon}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="font-test-sohne-medium max-w-[12rem] text-lg md:text-xl text-CharcoalGrey">
                      All the beauty of Growth, unlimited and
                    </p>
                    {enterprise_data.map((start_up_list, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div>
                            <img src={start_up_list.icon} alt="" />
                          </div>
                          <p className="text-sm md:text-base text-CharcoalGrey">
                            {start_up_list.list}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[730px]">
          <div className="">
            <p className="text-white text-2xl py-4 px-3">Popular choice</p>
          </div>
          <div className="relative md:z-10 h-full">
            <div className="h-full pr-1.5 rounded-l-3xl">
              <div className="h-full">
                <div className="h-full space-y-8 bg-OldLace px-4 pt-8 pb-4 md:pb-24 xl:pb-32 rounded-3xl">
                  <div className="flex flex-col space-y-4">
                    <img src={entreprise_img} className="w-24 xl:w-52" alt="" />
                    <h4 className="font-test-sohne-medium text-2xl md:text-4xl text-CharcoalGrey">
                      Enterprise
                    </h4>
                    <span className="w-fit text-CharcoalGrey bg-white px-4 py-2 rounded-md text-sm md:text-[15px]">
                      100-above Employees
                    </span>
                    <div>
                      <CustomLink
                        to="/auth/sign-up"
                        title="Get started"
                        className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
                        inital_arrow={initial_white_icon}
                        hover_arrow={hover_white_icon}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="font-test-sohne-medium max-w-[12rem] text-lg md:text-xl text-CharcoalGrey">
                      Be the boss.
                    </p>
                    <p className="md:max-w-[16rem] text-base md:text-lg">
                      Customize features suitable for your organization from the
                      list of feature we have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertificationAudit;
