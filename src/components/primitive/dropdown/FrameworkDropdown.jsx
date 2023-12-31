import React from "react";
import { Link } from "react-router-dom";
import img_1 from "../../../assets/icons/ISO27001__.svg";
import img_2 from "../../../assets/icons/PCIDSS__.svg";
import img_3 from "../../../assets/icons/SOC2__.svg";
import img_4 from "../../../assets/icons/NDPR__.svg";
import img_5 from "../../../assets/icons/integration__.svg";

const FrameworkDropdown = () => {
  return (
    <div className="relative z-40">
      <div className="group inline-block">
        <button className="outline-none focus:outline-none flex items-center">
          <span>Frameworks</span>
          <span className="pt-1">
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <div className="">
          <ul className="pt-4 transform scale-0 group-hover:scale-100 absolute transition duration-150 space-y-2 py-3 ease-in-out origin-top xl:w-fit px-4">
            <div className="rounded-lg px-4 py-6 space-y-3 bg-white z-40">
              <div className="flex items-center justify-center space-x-5 border-b-[0.1px] border-b-Wisteria pb-3">
                <Link
                  to="/frameworks/iso27001"
                  className="flex flex-col items-center space-y-1"
                >
                  <img src={img_1} alt="" />
                  <span className="text-sm flex items-center space-x-1">
                    <span>ISO </span>
                    <span> 27001</span>
                  </span>
                </Link>
                <Link
                  to="/frameworks/pcidss"
                  className="flex flex-col items-center space-y-1"
                >
                  <img src={img_2} alt="" />
                  <span className="text-sm flex items-center space-x-1">
                    <span>PCI </span>
                    <span> DSS</span>
                  </span>
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-5 border-b-[0.1px] border-b-Wisteria pb-3">
                <Link
                  to="/frameworks/soc2"
                  className="flex flex-col items-center space-y-2"
                >
                  <img src={img_3} alt="" />
                  <span className="text-sm">SOC2</span>
                </Link>
                <Link
                  to="/frameworks/ndpr"
                  className="flex flex-col items-center space-y-2"
                >
                  <img src={img_4} alt="" />
                  <span className="text-sm">NDPR</span>
                </Link>
              </div>
              <div>
                <Link
                  to="/frameworks/integration"
                  className="flex flex-row items-center space-x-3"
                >
                  <img src={img_5} alt="" />
                  <span className="text-sm">Integrations</span>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrameworkDropdown;
