import React, { useState, useEffect } from "react";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content:
        "Make smart and cost-effective decisions on compliance by simplifying and automating your compliance process with SmartComplyApp",
    },
    {
      id: 2,
      content:
        "Make it smart and cost-effective decisions on compliance by simplifying and automating your compliance process with SmartComplyApp",
    },
    {
      id: 3,
      content:
        "Make that smart and cost-effective decisions on compliance by simplifying and automating your compliance process with SmartComplyApp",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId); // eslint-disable-next-line
  }, [activeIndex]);

  return (
    <div className="bg-Alabaster border-[0.1px] border-PaleViolet relative w-full md:w-[80%] h-[150px] lg:h-[280px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <div className="flex items-center justify-center w-full h-full bg-Alabaster slide_bg">
            <p className=" max-w-[16rem] text-base md:max-w-xs md:text-lg">
              {slide.content}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 md:h-3.5 w-2 md:w-3.5 rounded-full border border-PaleViolet bg-LavenderMist cursor-pointer ${
              activeIndex === index ? "bg-PaleViolet" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slide;
