import React from "react";
import date_icon from "../../../assets/icons/date_icon.svg";
import CustomLink from "../CustomLink";
import initial_black_icon from "../../../assets/icons/inital_black_arrow.svg";
import hover_black_icon from "../../../assets/icons/hover_black_arrow.svg";

const BlogCard = ({
  blog_post_image,
  blog_title,
  category,
  date_posted,
  heading,
}) => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-start space-x-8">
      <div className="w-64 border border-VanillaIce rounded-2xl">
        <img src={blog_post_image} className="w-full" alt="" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="w-fit text-[10px] rounded-[4px] bg-FloralWhite border border-Chardonnay py-0.5 px-1 font-test-sohne-semibold text-CharcoalGrey">
            {category}
          </span>
          <img src={date_icon} alt="" />
          <span className="text-xs font-test-sohne-light">{date_posted}</span>
        </div>
        <h3 className="max-w-sm text-base md:text-xl font-test-sohne-medium">
          {blog_title}
        </h3>
        <p className="text-sm md:text-base text-CharcoalGrey max-w-xs font-test-sohne-light">
          {heading}
        </p>
        <CustomLink
          to=""
          title="Read More"
          className="bg-PaleViolet text-sm md:text-base text-Ebony"
          inital_arrow={initial_black_icon}
          hover_arrow={hover_black_icon}
        />
      </div>
    </div>
  );
};

export default BlogCard;
