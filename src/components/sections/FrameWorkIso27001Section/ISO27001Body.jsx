import React from "react";
import doc_prep_tools from "../../../assets/images/doc_prep_tools.svg";
import risk_assessment from "../../../assets/images/risk_assessment.svg";
import status_update_img from "../../../assets/images/status_update_img.svg";

const ISO27001Body = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-end">
        <div className="lg:w-[85%]">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8 xl:space-x-12">
            <div className="w-full md:w-1/2">
              <img
                src={doc_prep_tools}
                className="relative xl:-left-16"
                alt=""
              />
              <div className="space-y-4 md:space-y-8 relative -top-10">
                <h3 className="text-2xl md:text-4xl font-test-sohne-medium flex flex-col">
                  <span>Document</span> <span>Preparation Tools</span>
                </h3>
                <p className="text-Boulder text-sm md:text-[15px] font-test-sohne-light">
                  Smartcomply encompasses document templates required for
                  businesses’ cybersecurity and compliance activity. You can use
                  the Smartcomply automated feature to generate baseline
                  policies and documentation for governance, cybersecurity, risk
                  management, incident report, system management, and change
                  management.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src={risk_assessment}
                className="relative xl:-left-16"
                alt=""
              />
              <div className="space-y-4 md:space-y-8 relative -top-10">
                <h3 className="text-2xl md:text-4xl font-test-sohne-medium flex flex-col">
                  <span>Automated Risk</span> <span>assessment</span>
                </h3>
                <p className="text-Boulder text-sm md:text-[15px] font-test-sohne-light">
                  Risk assessment constitutes a vital element of ISO 27001, as
                  the standard mandates organisations to institute and uphold
                  information security risk assessment processes, encompassing
                  criteria for both risk acceptance and assessment. Smartcomply
                  provides extensive capabilities for risk assessment, enabling
                  organisations to pinpoint gaps, enhance their security
                  posture, and effortlessly convey the significance of the
                  certification audit throughout the entire organisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Magnolia relative mt-16 md:mt-32">
        <div className="container mx-auto flex flex-col items-center lg:flex-row md:justify-start md:items-start py-32">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium max-w-sm">
              Status Updates and Analytics
            </h2>
            <p className="text-sm md:text-base font-test-sohne-light max-w-md">
              Smartcomply dashboard offers valuable insights into your present
              security posture. These findings empower management to make
              informed decisions that align with business objectives. The
              dashboard facilitates tracking of control activities, risk
              management, compliance requirements, and associated documentation
              supporting the audit process and ongoing monitoring efforts.
            </p>
          </div>
          <div className="lg:absolute lg:-top-12 lg:right-0">
            <img src={status_update_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO27001Body;
