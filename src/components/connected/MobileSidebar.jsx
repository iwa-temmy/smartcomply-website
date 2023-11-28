import React, { useState } from "react";
import smart_comply_logo from "../../assets/icons/smart-comply-logo.svg";
import { Link } from "react-router-dom";
import { frameworkdata, resourcesdata } from "../../mockdata/navdropdowndata";
import CustomLink from "../primitive/CustomLink";
import initial_white_icon from "../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../assets/icons/hover_white_arrow.svg";

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showFrameWork, setShowFrameWork] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFramework = () => {
    setShowFrameWork(!showFrameWork);
  };

  const toggleResources = () => {
    setShowResources(!showResources);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed z-50 top-1 right-4  p-2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-4 px-4">
          <Link to="/">
            <img src={smart_comply_logo} alt="" />
          </Link>
          <div className="pr-3 pt-10">
            <div className="flex flex-col space-y-5 text-sm font-test-sohne-light text-center">
              <div className=" border-b-[0.1px] border-b-black w-full pb-1">
                <Link to="/">Home</Link>
              </div>
              <div className="border-b-[0.1px] border-b-black w-full pb-3.5">
                <Link to="/features">Features</Link>
              </div>
              <div className="border-b-[0.1px] border-b-black w-full pb-3.5">
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    showFrameWork ? "h-[190px]" : "h-[30px]"
                  }`}
                >
                  <div
                    className="flex items-center justify-center gap-1 cursor-pointer"
                    onClick={toggleFramework}
                  >
                    <span
                      className={`pt-[0.5px] transition-all duration-500 ${
                        showFrameWork && "rotate-180"
                      }`}
                    >
                      <svg
                        className="fill-current h-3 w-3 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <h2 className="text-sm font-test-sohne-light flex items-center justify-center">
                      Frameworks
                    </h2>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={`max-w-[295px] px-2 flex flex-col items-center justify-center gap-3 ${
                        showFrameWork ? "pt-3" : "pt-5"
                      }`}
                    >
                      {frameworkdata?.map((item, index) => (
                        <Link key={index} to={item?.link}>
                          <h2 className="text-[11px] font-medium">
                            {item?.title}
                          </h2>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[0.1px] border-b-black w-full pb-3.5">
                <Link to="/pricing">Pricing</Link>
              </div>
              <div className="border-b-[0.1px] border-b-black w-full pb-3.5">
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    showResources ? "h-[125px]" : "h-[30px]"
                  }`}
                >
                  <div
                    className="flex items-center justify-center gap-1 cursor-pointer"
                    onClick={toggleResources}
                  >
                    <span
                      className={`pt-[0.5px] transition-all duration-500 ${
                        showResources && "rotate-180"
                      }`}
                    >
                      <svg
                        className="fill-current h-3 w-3 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <h2 className="text-sm font-test-sohne-light flex items-center">
                      Resources
                    </h2>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={`max-w-[295px] px-2 flex flex-col gap-3 ${
                        showResources ? "pt-3" : "pt-5"
                      }`}
                    >
                      {resourcesdata?.map((item, index) => (
                        <Link key={index} to={item?.link}>
                          <h2 className="text-[11px] font-medium">
                            {item?.title}
                          </h2>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b-[0.1px] border-b-black w-full pb-3.5">
                <Link to="/about-us">About us</Link>
              </div>
              <div className="flex justify-center">
                <CustomLink
                  to="/auth/sign-up"
                  title="Get started"
                  className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
                  inital_arrow={initial_white_icon}
                  hover_arrow={hover_white_icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
