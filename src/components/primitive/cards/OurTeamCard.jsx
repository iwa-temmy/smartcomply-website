import React from "react";
import linkdin_icon from "../../../assets/icons/linkdin_icon.svg";
import { Link } from "react-router-dom";

const OurTeamCard = ({
  image,
  name,
  title,
  social_medial_name,
  social_media_link,
  bio,
}) => {
  return (
    <div>
      <div className="w-56 bg-BlueChalk  rounded-3xl hover:shadow-2xl shadow-red-500 transition-all duration-500 hover:cursor-pointer">
        <div className="w-full h-52 border border-white rounded-3xl">
          {image === "" ? (
            <span className="w-full h-full bg-red-200"></span>
          ) : (
            <img src={image} className="w-full h-full object-cover" alt="" />
          )}
        </div>
        <div className="w-full bg-BlueChalk rounded-b-3xl px-6 py-4 space-y-3">
          <div>
            <p
              className={`text-base md:text-lg font-test-sohne-medium ${
                name.length < 20 && " max-w-[5rem]"
              }`}
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
    </div>
  );
};

export default OurTeamCard;
