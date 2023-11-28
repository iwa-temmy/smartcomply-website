import React from "react";
import cobal_logo from "../../../assets/logos/cobal_logo.svg";
import consult_logo from "../../../assets/logos/360_consult_logo.svg";
import platview_logo from "../../../assets/logos/platview_logo.svg";
import techhive_logo from "../../../assets/logos/techhive_logo.svg";
import clone_systems_logo from "../../../assets/logos/clone_systems_logo.svg";

const Partners = () => {
  return (
    <div className="container mx-auto border-y border-AshGrey py-10 mt-10">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <div className="w-full md:w-[40%]">
          <h4 className="font-test-sohne-semibold  text-3xl md:text-4xl">
            Partners
          </h4>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="flex flex-row items-center w-full sm:w-full overflow-auto scrollbar-hide space-x-2 md:space-x-4 relative">
            <div className="slides">
              <div>
                <img src={cobal_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={consult_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={platview_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={techhive_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={clone_systems_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={cobal_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={consult_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={platview_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={techhive_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={clone_systems_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={cobal_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={consult_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={platview_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={techhive_logo} alt="" />
              </div>
            </div>
            <div className="slides">
              <div>
                <img src={clone_systems_logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
