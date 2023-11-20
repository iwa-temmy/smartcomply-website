import React from "react";

const IntegrationCard = ({ logo, category, name }) => {
  return (
    <div className="w-full bg-BleachWhite rounded-3xl hover:shadow-2xl shadow-red-500 transition-all duration-500 hover:cursor-pointer">
      <div className="relative flex items-center justify-center border border-Chardonnay bg-white h-44 rounded-3xl p-2">
        <span className="absolute top-2 left-2 w-fit bg-BleachWhite py-0.5 px-2 rounded-2xl font-test-sohne-light">
          {name}
        </span>
        <div className="">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="w-full bg-BleachWhite rounded-b-3xl">
        <p
          className={`text-CharcoalGrey text-sm md:text-[15px] ${
            category.length < 20 && "max-w-[5rem]"
          } font-test-sohne-light p-4`}
        >
          {category}
        </p>
      </div>
    </div>
  );
};

export default IntegrationCard;
