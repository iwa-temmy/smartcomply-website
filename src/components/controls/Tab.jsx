import React from "react";
import integration_arrow_icon from "../../assets/icons/integration_arrow_icon.svg";

const Tab = ({ active, tabName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between border-b text-CharcoalGrey text-sm md:text-[15px] pt-8 pb-4  ${
        active
          ? "border-b-AztecPurple hover:bg-BleachWhite"
          : "border-b-Chardonnay hover:bg-BleachWhite"
      }`}
    >
      <p>{tabName}</p>
      <img src={integration_arrow_icon} alt="" />
    </button>
  );
};

export default Tab;
