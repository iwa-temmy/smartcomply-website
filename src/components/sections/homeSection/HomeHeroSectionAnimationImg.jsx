import React, { useEffect, useState } from "react";
import snyk_logo from "../../../assets/images/snyk-logo.png";
import google_cloud_logo from "../../../assets/images/Google-Cloud-Logo.png";
import jira_logo from "../../../assets/images/jira-logo.png";
import arr_1 from "../../../assets/icons/arr_1.svg";
import arr_2 from "../../../assets/icons/arr_2.svg";
import arr_3 from "../../../assets/icons/arr_3.svg";

const HomeHeroSectionAnimationImg = () => {
  const [isScaled, setIsScaled] = useState(true);
  const [isSecondScaled, setIsSecondScaled] = useState(true);
  const [isRotate, setIsRotate] = useState(true);
  const [isTranslate, setIsTranslate] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsScaled((prev) => !prev);
    }, 3000);

    const secondIntervalId = setInterval(() => {
      setIsSecondScaled((prev) => !prev);
    }, 3000);

    const isRotate = setInterval(() => {
      setIsRotate((prev) => !prev);
    }, 3000);

    const isTranslateId = setInterval(() => {
      setIsTranslate((prev) => !prev);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearInterval(secondIntervalId);
      clearInterval(isRotate);
      clearInterval(isTranslateId);
    };
  }, []);

  const scaleClass = isScaled ? "scale-50" : "scale-100";
  const secondScaleClass = isSecondScaled ? "scale-150" : "scale-125";
  const rotateClass = isRotate ? "rotate-45" : "rotate-0";
  const translateClass = isTranslate ? "-translate-x-4" : "translate-x-4";

  return (
    <div className="relative">
      <div className="absolute -top-2 -right-9">
        <div className="bg-white flex flex-col items-center justify-center rounded-3xl px-5 py-6 space-y-2 w-36 scale-75 z-50">
          <img src={snyk_logo} className="w-16" alt="" />
          <h3 className="text-[8px] text-DeepSapphire font-test-sohne-medium">
            Snyk
          </h3>
          <div className="flex items-center space-x-2">
            <p className="text-[7px]">
              Connect to Snyke to automate document collection.
            </p>
          </div>
          <button className="w-full rounded-sm py-2 bg-Iron text-DeepSapphire text-[10px]">
            Connect
          </button>
        </div>
      </div>
      <div className="absolute top-5 -left-10">
        <div
          className={`bg-white rounded-2xl p-4 space-y-2 w-48 ${scaleClass} transition-all transition_duration`}
        >
          <h3 className="text-xs md:text-sm text-DeepSapphire font-test-sohne-medium">
            NDPR
          </h3>
          <div className="flex items-center space-x-2">
            <p className="text-[10px]">Documents pendind</p>
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
          </div>
          <div className="space-y-1">
            <p className="text-[8px] text-DeepSapphire text-right">
              <span className="font-test-sohne-semibold">80%</span>{" "}
              <span>completion</span>
            </p>
            <div className="relative">
              <span className="absolute top-0 w-full h-1.5 bg-gray-200 rounded-3xl"></span>
              <span className="absolute top-0 w-[80%] bg-DeepSapphire h-1.5 rounded-3xl"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[450px] h-[500px] rounded-xl border-2 border-white bg-white/[.2] backdrop-blur-[4px]">
        <div className="absolute bottom-32 -left-20 z-30 fadeInClass">
          <div className="bg-white flex flex-col items-center justify-center rounded-3xl px-4 pt-3 pb-5 w-32 scale-125 transition-all duration-1000">
            <img src={jira_logo} className="w-16" alt="" />
            <h3 className="text-[8px] text-DeepSapphire font-test-sohne-medium">
              Jira cloud
            </h3>

            <div className="flex flex-col items-center justify-center space-y-2.5">
              <p className="text-[5px]">
                Connect to Snyke to automate document collection.
              </p>
              <button className="w-full rounded-sm py-2 bg-Iron text-DeepSapphire text-[10px]">
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-32 -left-16 z-20">
          <div className="bg-white flex flex-col items-center justify-center rounded-3xl px-4 pt-3 pb-5 w-32 scale-100 transition-all duration-1000">
            <img src={jira_logo} className="w-16" alt="" />
            <h3 className="text-[8px] text-DeepSapphire font-test-sohne-medium">
              Jira cloud
            </h3>

            <div className="flex flex-col items-center justify-center space-y-2.5">
              <p className="text-[5px]">
                Connect to Snyke to automate document collection.
              </p>
              <button className="w-full rounded-sm py-2 bg-Iron text-DeepSapphire text-[10px]">
                Connect
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="absolute bottom-5 right-12">
          <div className="bg-white flex flex-col items-center justify-center rounded-3xl px-4 py-6 space-y-2 w-36 scale-100 transition-all duration-1000 z-50">
            <img src={snyk_logo} className="w-16" alt="" />
            <h3 className="text-[8px] text-DeepSapphire font-test-sohne-medium">
              Snyk
            </h3>
            <div className="flex items-center space-x-2">
              <p className="text-[7px]">
                Connect to Snyke to automate document collection.
              </p>
            </div>
            <button className="w-full rounded-sm py-2 bg-Iron text-DeepSapphire text-[10px]">
              Connect
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-2">
          <img
            src={arr_3}
            className={`${translateClass} transition-all transition_duration`}
            alt=""
          />
        </div>
        <div className="absolute bottom-32 left-16">
          <img src={arr_2} alt="" />
        </div>
        <div className="absolute bottom-32 -right-2">
          <img
            src={arr_1}
            className={`${rotateClass} transition-all transition_duration`}
            alt=""
          />
        </div>
        <div className="absolute bottom-56 right-20">
          <div
            className={`bg-white rounded-2xl p-4 space-y-2 w-48 ${secondScaleClass} transition-all transition_duration`}
          >
            <h3 className="text-xs md:text-sm text-DeepSapphire font-test-sohne-medium">
              IS027001
            </h3>
            <div className="flex items-center space-x-2">
              <p className="text-[10px]">Audit questions completed</p>
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            </div>
            <div className="space-y-1">
              <p className="text-[8px] text-DeepSapphire text-right">
                <span className="font-test-sohne-semibold">70%</span>{" "}
                <span>completion</span>
              </p>
              <div className="relative">
                <span className="absolute top-0 w-full h-1.5 bg-gray-200 rounded-3xl"></span>
                <span className="absolute top-0 w-[70%] bg-DeepSapphire h-1.5 rounded-3xl"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-24 z-20 ">
          <div className="bg-white flex flex-col items-center justify-center rounded-3xl p-4 space-y-1 w-32 scale-100 transition-all duration-1000">
            <img src={google_cloud_logo} className="w-16" alt="" />
            <h3 className="text-[7px] text-DeepSapphire font-test-sohne-medium">
              Google cloud
            </h3>
            <div className="flex items-center space-x-2">
              <p className="text-[6px]">
                Connect to Snyke to automate document collection.
              </p>
            </div>
            <button className="w-full rounded-sm py-1 border border-Iron text-DeepSapphire text-[10px]">
              Connect
            </button>
            <p className="text-[6px]">Disconnect</p>
          </div>
        </div>
        <div className="absolute -bottom-1 left-20 z-30 fadeInClass">
          <div className="bg-white flex flex-col items-center justify-center rounded-3xl p-4 space-y-1 w-32 scale-125 transition-all duration-1000">
            <img src={google_cloud_logo} className="w-16" alt="" />
            <h3 className="text-[7px] text-DeepSapphire font-test-sohne-medium">
              Google cloud
            </h3>
            <div className="flex items-center space-x-2">
              <p className="text-[6px]">
                Connect to Snyke to automate document collection.
              </p>
            </div>
            <button className="w-full rounded-sm py-1 border border-Iron text-DeepSapphire text-[10px]">
              Connect
            </button>
            <p className="text-[6px]">Disconnect</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSectionAnimationImg;
