import React from "react";

const IntegrationCard = ({
  projectImg,
  projectType,
  projectName,
  viewProjectBtn,
  showShadow,
}) => {
  return (
    <div className="w-full ">
      <div className="border border-Chardonnay h-44 rounded-3xl">
        <span className="w-fit bg-BleachWhite py-1 px-1.5 rounded-2xl">
          slack
        </span>
      </div>
      <div className="w-full bg-Chardonnay">
        <p className="text-sm md:text-[15px] max-w-[5rem] font-test-sohne-light p-6">
          Employee Managment
        </p>
      </div>
    </div>
    // <div className={`relative  ${showShadow ? "shadow-sm rounded-2xl" : ""}  `}>
    //   <img src={projectImg} alt="" />
    //   <div className="p-6 flex justify-between items-end ">
    //     <div className="flex flex-col justify-between">
    //       <p className="text-gray-400 lg:text-sm text-sx mb-2 capitalize">
    //         {projectType}
    //       </p>
    //       <p className="font-medium lg:text-xl text-lg capitalize">
    //         {projectName}
    //       </p>
    //     </div>
    //     {viewProjectBtn && (
    //       <div>
    //         <button className="lg:py-2.5 lg:px-4 py-2 px-2 text-sm lg:text-base  border font-medium rounded-md active:scale-90 transition duration-150">
    //           View project
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default IntegrationCard;
