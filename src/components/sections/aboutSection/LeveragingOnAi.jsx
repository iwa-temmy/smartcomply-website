import React from "react";
import leveraging_on_ai_img from "../../../assets/images/leveraging_on_ai_img.svg";
import CustomLink from "../../primitive/CustomLink";
import initial_white_icon from "../../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../../assets/icons/hover_white_arrow.svg";

const LeveragingOnAi = () => {
  return (
    <div className="relative py-8 md:pb-24">
      <div className="container mx-auto space-y-5 md:space-y-10">
        <h2 className="text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium max-w-5xl text-CharcoalGrey">
          Leveraging AI & Automation for <br className="hidden xl:block" />{" "}
          faster and affordable Cybersecurity and Compliance Solutions.
        </h2>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
          <div className="space-y-3 md:space-y-6">
            <p className="font-test-sohne-light lg:max-w-[34rem]">
              Smartcomply is an automated and AI-powered cybersecurity and
              compliance platform that aids rapidly expanding businesses in
              reducing the time and money spent on cybersecurity and compliance
              solutions.
            </p>
            <p className="font-test-sohne-light lg:max-w-[34rem]">
              Smartcomply gives easy access to all supported cybersecurity and
              compliance frameworks such as PCI DSS, ISO 27001, GDPR, NDPR and
              SOC 2 Type I & II.
            </p>
            <div>
              <p className="font-test-sohne-medium lg:max-w-[34rem]">
                Smartcomply offers;
              </p>
              <ul className="list-disc font-test-sohne-light md:pl-6 md:max-w-lg">
                <li>Automation,</li>
                <li>Artificial Intelligence,</li>
                <li>Continuous monitoring of infrastructures,</li>
                <li>Reporting of security lapses in infrastructure setup,</li>
                <li>
                  Easy means of risk assessment where users can easily assess
                  their risks and compute risk score,{" "}
                </li>
                <li>Access to the risks posed by vendors,</li>
                <li>Vulnerability scans,</li>
                <li>Penetration tests,</li>
                <li>
                  PCI scan on user infrastructure to scan and report
                  vulnerabilities and cyber threats real time,
                </li>
                <li>
                  Recommended actions to be taken to ensure cybersecurity,
                  background checks, cybersecurity policy training for
                  employees, and more.
                </li>
              </ul>
            </div>
            <div className="py-5 md:py-10">
              <CustomLink
                to="/auth/sign-up"
                title="Get a sneak peak"
                className="bg-Ebony text-sm md:text-base text-white font-test-sohne-light hover:bg-ShipGrey"
                inital_arrow={initial_white_icon}
                hover_arrow={hover_white_icon}
              />
            </div>
          </div>
          <div className="lg:absolute lg:right-0 lg:top-20 -z-20">
            <img src={leveraging_on_ai_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeveragingOnAi;
