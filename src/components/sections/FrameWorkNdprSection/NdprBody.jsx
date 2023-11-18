import React from "react";
import connect_your_tools from "../../../assets/images/connect_your_tools.svg";

const NdprBody = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-end">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-20 xl:space-x-24">
          <div className="w-full md:w-1/2">
            <img src={connect_your_tools} alt="" />
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="space-y-4 md:space-y-8 relative -top-10">
              <h2 className="text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium max-w-xs">
                Flexible Integration
              </h2>
              <p className="text-Boulder text-sm md:text-[15px] md:leading-6 font-test-sohne-light md:max-w-xs">
                With easy options for producing audit logs, the Smartcomplyapp
                automation tool allows you to integrate with any other system or
                application that touches your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NdprBody;
