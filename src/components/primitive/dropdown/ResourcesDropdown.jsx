import React from "react";
import { Link } from "react-router-dom";
import img_5 from "../../../assets/icons/integration__.svg";

const ResourcesDropdown = () => {
  return (
    <div>
      <div className="group inline-block z-50">
        <button className="outline-none focus:outline-none flex items-center">
          <span>Resources</span>
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
          <ul className="pt-4 transform scale-0 group-hover:scale-100 absolute transition duration-150 space-y-2 py-3 ease-in-out origin-top xl:w-fit px-4 z-50">
            <div className="rounded-lg px-4 py-6 space-y-3 bg-white relative ">
              <div className="border-b-[0.1px] border-b-Wisteria pb-3">
                <Link
                  to="/blog"
                  className="flex flex-row items-center space-x-3"
                >
                  <img src={img_5} alt="" />
                  <span className="text-sm">Blog</span>
                </Link>
              </div>
              <div className="border-b-[0.1px] border-b-Wisteria pb-3">
                <Link
                  to="/faq"
                  className="flex flex-row items-center space-x-3"
                >
                  <img src={img_5} alt="" />
                  <span className="text-sm">FAQs</span>
                </Link>
              </div>
              <div className="border-b-[0.1px] border-b-Wisteria pb-3">
                <Link
                  to="/glossary"
                  className="flex flex-row items-center space-x-3"
                >
                  <img src={img_5} alt="" />
                  <span className="text-sm">Glossary</span>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
