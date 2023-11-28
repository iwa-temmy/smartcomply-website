import React from "react";
import Navbar from "../connected/Navbar";
import FrameWorkIso27001HeroSection from "../sections/FrameWorkIso27001Section/FrameWorkIso27001HeroSection";
import Footer from "../connected/Footer";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";
import ISO27001Body from "../sections/FrameWorkIso27001Section/ISO27001Body";

const FrameWorkIso27001 = () => {
  return (
    <div>
      <div className="relative iso27001_hero_bg_section_line">
        <div className="absolute top-0 right-0 framework_iso27001_hero_bg w-[65%] h-[100vh] rounded-bl-[226px] -z-20"></div>
        <Navbar />
        <FrameWorkIso27001HeroSection />
      </div>
      <ISO27001Body />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default FrameWorkIso27001;
