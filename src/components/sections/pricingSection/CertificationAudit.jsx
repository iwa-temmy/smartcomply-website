import React from "react";
// import leveraging_on_ai_img from "../../../assets/images/leveraging_on_ai_img.svg";
// import CustomLink from "../../primitive/CustomLink";
// import initial_white_icon from "../../../assets/icons/inital_white_arrow.svg";
// import hover_white_icon from "../../../assets/icons/hover_white_arrow.svg";

const CertificationAudit = () => {
  return (
    <div className="relative pb-8 md:pb-24">
      <div className="container mx-auto space-y-5 md:space-y-10">
        <h2 className="text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium max-w-5xl text-CharcoalGrey">
          Certification Audit <br className="hidden xl:block" /> available on
          paid request
        </h2>
        {/* <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
          <div className="space-y-3 md:space-y-6">
            <p className="font-test-sohne-light lg:max-w-[34rem]">
              The SmartComplyApp is an AI-qualified security assessor built on
              an automated cyber-security compliance platform that aids rapidly
              expanding businesses in reducing the time and money spent Fon
              compliance.
            </p>
            <p className="font-test-sohne-light lg:max-w-[34rem]">
              SmartComplyApp gives easy access to all supported compliance such
              as PCI, ISO27001, GDPR, and SOC 2 Type I & II. And as well offers:
              Continuous Monitoring of infrastructures and reporting of security
              lapses in infrastructure setup, An easy means of risk assessment
              where users can easily assess their risks and compute their risk
              score and also access the risks posed by their vendors,
              Vulnerability Scans, Penetration Tests, and PCI scan on user
              infrastructure to scan and report vulnerabilities and cyber
              threats on time, Continuous monitoring service scans for a wide
              range of vulnerabilities and also recommends actions to be taken
              to ensure Cybersecurity, Background checks, Security Policy
              Training and Videos.
            </p>
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
        </div> */}
      </div>
    </div>
  );
};

export default CertificationAudit;
