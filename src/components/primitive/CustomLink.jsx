import React from "react";
import { Link } from "react-router-dom";
import get_started_inital_arrow from "../../assets/icons/get-started-inital-arrow.svg";

const CustomLink = ({ to, title, className }) => {
  return (
    <div>
      <Link
        to={to}
        className={`${className} w-fit flex items-center justify-center rounded-3xl space-x-3`}
      >
        <span>{title}</span>
        <img src={get_started_inital_arrow} alt="" />
      </Link>
    </div>
  );
};

export default CustomLink;
