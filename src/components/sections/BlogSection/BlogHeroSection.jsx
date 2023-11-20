import React from "react";
import search_icon from "../../../assets/icons/search_icon.svg";

const BlogHeroSection = () => {
  return (
    <div>
      <div className="container mx-auto py-5 md:py-10 mb-6 space-y-12">
        <div className="w-full space-y-4">
          <p className="font-test-sohne-light max-w-xs">
            smartComply Newsletter
          </p>
          <h2 className="flex flex-col text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
            <span> Get latest news about</span>{" "}
            <span>security and compliance</span>
          </h2>
        </div>
        <div className="space-y-4">
          <div class="bg-FloralWhite w-[60%] flex flex-row items-center justify-between border-[0.1px] border-Chardonnay rounded-md px-3">
            <div class=" w-full flex items-center justify-between space-x-2 py-3">
              <input
                type="text"
                name=""
                id=""
                class="w-full bg-transparent focus:outline-0 px-3 text-lg placeholder:text-Nobel"
                placeholder="Email enter"
              />
              <img src={search_icon} className="cursor-pointer" alt="" />
            </div>
          </div>
          <p>
            <span className="font-test-sohne-semibold">Be in the loop. </span>{" "}
            <span className="font-test-sohne-light text-CharcoalGrey">
              Get updates and announcements from us.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
