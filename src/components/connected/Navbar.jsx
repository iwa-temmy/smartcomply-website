import React, { useState } from "react";
import smart_comply_logo from "../../assets/icons/smart-comply-logo.svg";
import { Link } from "react-router-dom";
import CustomLink from "../primitive/CustomLink";

const Navbar = () => {
  const [isChartActive, setIsChartActive] = useState(false);
  const [isTableActive, setIsTableActive] = useState(true);

  const toggleSwitch = (role) => {
    if (role === "chart") {
      setIsChartActive(true);
      setIsTableActive(false);
    } else if (role === "table") {
      setIsChartActive(false);
      setIsTableActive(true);
    }
  };
  return (
    <div className="container mx-auto ">
      <nav className="flex flex-row items-center justify-between py-4">
        <Link to="/">
          <img src={smart_comply_logo} alt="" />
        </Link>
        <div className="hidden xl:flex flex-row items-center space-x-7 text-base">
          <Link to="">Home</Link>
          <Link to="">Features</Link>
          <Link to="">Frameworks</Link>
          <Link to="">Pricing</Link>
          <Link to="">Resources</Link>
          <Link to="">About us</Link>
          <CustomLink
            to="/auth/sign-up"
            title="Get started"
            className="bg-Ebony px-4 py-1.5 text-sm md:text-base text-white"
          />
          <div className="flex items-center space-x-2">
            <span className="font-test-sohne-semibold">Fren</span>
            <div className="toggle-switch">
              <div
                className={`switch-state ${isChartActive ? "chart" : ""}`}
                onClick={() => toggleSwitch("chart")}
              >
                <span className="text-transparent">F</span>
              </div>
              <div
                className={`switch-state ${isTableActive ? "table" : ""}`}
                onClick={() => toggleSwitch("table")}
              >
                <span className="text-transparent">E</span>
              </div>
            </div>
            <span className="text-SeaMist test-sohne-semibold opacity-20">
              Eng
            </span>
          </div>
        </div>
        <div className="block xl:hidden">
          <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer w-fit transition-all duration-500">
            <span className="w-7 h-[1.5px] bg-black"></span>
            <span className="w-7 h-[1.5px] bg-black"></span>
            <span className="w-7 h-[1.5px] bg-black"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
