import React from "react";
import pcidss_monitoring from "../../../assets/images/pcidss_monitoring.svg";
import metrics_and_measurement from "../../../assets/images/metrics_and_measurement.svg";
import automated_risk_assessment_img from "../../../assets/images/automated_risk_assessment_img.svg";

const PcidssBody = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-end">
        <div className="lg:w-[85%]">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-8 xl:space-x-12">
            <div className="w-full md:w-1/2">
              <img
                src={pcidss_monitoring}
                className="relative xl:-left-16"
                alt=""
              />
              <div className="space-y-4 md:space-y-8 relative -top-10">
                <h3 className="text-2xl md:text-4xl font-test-sohne-medium flex flex-col">
                  <span>Continuous </span> <span>PCI DSS Monitoring</span>
                </h3>
                <p className="text-Boulder text-sm md:text-[15px] font-test-sohne-light">
                With the Smartcomplyapp, you have an automated feature that allows you generate baseline policies and documentation for identifying security controls across multiple systems. Smartcomplyapp automatically gathers audit evidence for your assessment.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <img
                src={metrics_and_measurement}
                className="relative xl:-left-16"
                alt=""
              />
              <div className="space-y-4 md:space-y-8 relative -top-10">
                <h3 className="text-2xl md:text-4xl font-test-sohne-medium flex flex-col">
                  <span>Security Metrics </span> <span>and Measurement</span>
                </h3>
                <p className="text-Boulder text-sm md:text-[15px] font-test-sohne-light">
                Smartcomplyapp monitors your security posture continuously by integrating with your technologies and processes to provide valuable insight into your current security posture. Metrics for your security status for control objectives are automated, eliminating darkholes and identifying out-of-sight threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Magnolia">
        <div className="container mx-auto flex flex-col space-y-4 items-center lg:flex-row md:justify-start md:items-center py-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium max-w-md">
            Automated Risk assessment
            </h2>
            <p className="text-sm md:text-base font-test-sohne-light max-w-md">
            Smartcomplyapp monitors your security posture continuously by integrating with your technologies and processes to provide valuable insight into your current security posture. Metrics for your security status for control objectives are automated, eliminating darkholes and identifying out-of-sight threats.

            </p>
          </div>
          <div className="w-full md:w-1/2 py-2 md:py-4 relative lg:-bottom-16">
            <img src={automated_risk_assessment_img} className="bg-white px-10 pt-6 rounded-2xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcidssBody;
