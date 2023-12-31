import React from "react";
import CustomLink from "../../primitive/CustomLink";
import learn_more_img_1 from "../../../assets/images/learn_more_img-1.png";
import learn_more_img_2 from "../../../assets/images/learn_more_img-2.png";
import learn_more_img_3 from "../../../assets/images/learn_more_img-3.png";
import initial_white_icon from "../../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../../assets/icons/hover_white_arrow.svg";
import { Link } from "react-router-dom";

const LearnMoreCard = () => {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row py-8 md:py-16">
      <div className="w-full md:w-[40%] space-y-4 md:space-y-8">
        <h3 className="text-2xl md:text-4xl font-test-sohne-medium max-w-xs">
          Read the Latest News About Smartcomply, AI, Automation, Cybersecurity
          and Compliance.
        </h3>
        <div>
          <CustomLink
            to="/auth/sign-up"
            title="Read More"
            className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
            inital_arrow={initial_white_icon}
            hover_arrow={hover_white_icon}
          />
        </div>
      </div>
      <div className="w-full md:w-[60%]">
        <div className="flex flex-row -space-x-32">
          <div className="rounded-xl p-2 w-80 bg-white shadow-2xl shadow--white">
            <div className="h-60">
              <img src={learn_more_img_1} className="w-full h-full" alt="" />
            </div>
            <div className="pt-2 space-y-6">
              <div className="space-y-2">
                <p className="text-SunsetOrange text-[9px] md:text-[11px]">
                  October 18, 2023
                </p>
                <h3 className="font-test-sohne-medium text-base md:text-lg max-w-[16rem]">
                  Safe Online Shopping: Tips for Securing Your Financial
                  Transactions
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-CharcoalGrey text-xs md:text-sm font-test-sohne-light">
                  In the world of business, there are heroes whose stories often
                  go u...
                </p>
                <div>
                  <Link to="" className="text-GreyCloud text-xs md:text-sm">
                    read More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-2 w-80 bg-white shadow-2xl shadow--white">
            <div className="h-60">
              <img src={learn_more_img_2} className="w-full h-full" alt="" />
            </div>
            <div className="pt-2 space-y-6">
              <div className="space-y-2">
                <p className="text-SunsetOrange text-[9px] md:text-[11px]">
                  October 18, 2023
                </p>
                <h3 className="font-test-sohne-medium text-base md:text-lg max-w-[16rem]">
                  Safe Online Shopping: Tips for Securing Your Financial
                  Transactions
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-CharcoalGrey text-xs md:text-sm font-test-sohne-light">
                  In the world of business, there are heroes whose stories often
                  go u...
                </p>
                <div>
                  <Link to="" className="text-GreyCloud text-xs md:text-sm">
                    read More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-2 w-80 bg-white shadow-2xl shadow--white">
            <div className="h-60">
              <img src={learn_more_img_3} className="w-full h-full" alt="" />
            </div>
            <div className="pt-2 space-y-6">
              <div className="space-y-2">
                <p className="text-SunsetOrange text-[9px] md:text-[11px]">
                  October 18, 2023
                </p>
                <h3 className="font-test-sohne-medium text-base md:text-lg max-w-[16rem]">
                  Safe Online Shopping: Tips for Securing Your Financial
                  Transactions
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-CharcoalGrey text-xs md:text-sm font-test-sohne-light">
                  In the world of business, there are heroes whose stories often
                  go u...
                </p>
                <div>
                  <Link to="" className="text-GreyCloud text-xs md:text-sm">
                    read More...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreCard;
