import React from "react";
import linkdin_icon from "../../../assets/icons/linkdin_icon.svg";
import { Link } from "react-router-dom";

const OurTeamCard = ({ image, name, title }) => {
  return (
    <div className="w-full md:w-60 bg-BlueChalk  rounded-3xl hover:shadow-2xl h-[374px] shadow-red-500 transition-all duration-500 hover:cursor-pointer">
      <div className="w-full h-64 md:h-52 border border-white rounded-3xl">
        {image === "" ? (
          <span className="w-full h-full bg-red-200"></span>
        ) : (
          <img
            src={image}
            className="w-full h-full object-cover rounded-3xl"
            alt=""
          />
        )}
      </div>
      <div className="w-full bg-BlueChalk rounded-b-3xl px-6 py-4 space-y-3">
        <div>
          <p
            className={`text-base md:text-lg font-test-sohne-medium`}
          >
            {name}
          </p>
          <p className="text-CharcoalGrey text-[10px] md:text-[13px] h-10">
            {title}
          </p>
        </div>
        <div className="w-fit py-1 bg-white rounded-xl flex items-center space-x-2 pl-1 pr-3">
          <img src={linkdin_icon} className="" alt="" />
          <Link to="" className="text-[10px] text-CharcoalGrey">
            <span>Follow on</span>{" "}
            <span className="font-test-sohne-medium ">Linkedin</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
