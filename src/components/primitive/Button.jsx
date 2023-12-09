import React, { useState } from "react";

const Button = ({
  title,
  className,
  hover_arrow,
  inital_arrow,
  onClick,
  loading,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <button
        className={`${className} px-4 py-1.5 hover:pr-5 w-fit flex items-center justify-center rounded-3xl space-x-3 transition-all duration-500`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {loading ? (
          "....."
        ) : (
          <>
            <span>{title}</span>
            <img
              src={isHovered ? hover_arrow : inital_arrow}
              className={`pt-0.5 transition-all transition_duration ${
                isHovered
                  ? "opacity-100 transition-all transition_duration"
                  : "opacity-100"
              }`}
              alt=""
            />
          </>
        )}
      </button>
    </div>
  );
};

export default Button;
