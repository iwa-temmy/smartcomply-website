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
                  Smartcomplyapp encompasses all of the document templates
                  required for your compliance activity. You can use our
                  automated feature to generate baseline policies and
                  documentation for governance, security, risk, incident,
                  system, and change management.
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
                  <span>Automate your Risk</span> <span>assessment</span>
                </h3>
                <p className="text-Boulder text-sm md:text-[15px] font-test-sohne-light">
                  Risk assessment is an important component of ISO 270001
                  because the standard requires an organization to establish and
                  maintain information security risk assessment processes that
                  include risk acceptance and assessment criteria.
                  Smartcomplyapp offers comprehensive risk assessment
                  capabilities, and the results can be used to identify gaps,
                  improve security posture, and easily communicate the
                  importance of the certification audit across the organization.
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
              Our dashboard can provide valuable insight into your current
              security posture. Management can use these findings to make
              consistent decisions to drive business objectives and track
              control activities, risks, compliance requirements, and related
              documentation to support audits and monitoring.
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
