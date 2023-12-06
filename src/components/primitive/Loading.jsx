import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justifycenter items-center h-full">
      <Triangle
        height="80"
        width="80"
        color="##AFF7CD"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
