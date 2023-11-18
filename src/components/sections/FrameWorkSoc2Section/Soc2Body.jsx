import React from "react";
import doc_prep_tools from "../../../assets/images/doc_prep_tools.svg";
import risk_assessment from "../../../assets/images/risk_assessment.svg";
import effective_risk_management from "../../../assets/images/effective_risk_management.svg";

const Soc2Body = () => {
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
                  <span>Achieve </span> <span>Compliance Faster</span>
                </h3>
                <p className="text-Boulder text-sm md:text-[15px] font-test-sohne-light">
                  Smartcomplyapp accelerates your SOC 2 compliance by providing
                  a platform for easy onboarding and smart questionnaires that
                  get you started in minutes and manage your data collection for
                  you. Designed with an automated documentation and evidence
                  collection process, audit readiness monitoring, and tracking
                  follow-up process for remediation and process improvement.
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
                  <span>Smart Control </span> <span>Mapping</span>
                </h3>
                <p className="text-Boulder text-sm md:text-[15px] font-test-sohne-light">
                  Use Smartcomplyapp preloaded frameworks to provide all of the
                  SOC 2 controls list, eliminating the notion of missing any
                  applicable controls for your organization. Smartcomplyapp
                  applies compliance controls to your systems, endpoints, and
                  processes in an efficient and effective way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Magnolia">
        <div className="container mx-auto flex flex-col space-y-4 items-center lg:flex-row md:justify-start md:items-center py-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium max-w-sm">
              Effective Risk Management
            </h2>
            <p className="text-sm md:text-base font-test-sohne-light max-w-md">
              Smartcomplyapp provides you with an automated risk register to
              help you simplify annual risk assessments for your organization.
              The automated risk register combines efforts to track your assets,
              identify applicable threats & relevant vulnerabilities, and map
              mitigating controls. When it comes time for your annual SOC 2
              audit, Smartcomplyapp ensures a smooth audit process by
              eliminating the stress of using manual spreadsheets.
            </p>
          </div>
          <div className="w-full md:w-1/2 py-2 md:py-4 relative lg:-bottom-16">
            <img src={effective_risk_management} className="bg-white px-10 pt-6 rounded-2xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soc2Body;
