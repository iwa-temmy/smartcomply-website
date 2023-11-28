import React from "react";
import Navbar from "../connected/Navbar";
import FrameWorkSoc2HeroSection from "../sections/FrameWorkSoc2Section/FrameWorkSoc2HeroSection";
import Footer from "../connected/Footer";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";
import Soc2Body from "../sections/FrameWorkSoc2Section/Soc2Body";

const FrameWorkSoc2 = () => {
  return (
    <div>
      <div className="relative soc2_hero_bg_section_line">
        <div className="absolute top-0 right-0 framework_soc2_hero_bg w-[65%] h-[100vh] rounded-bl-[226px] -z-20"></div>
        <Navbar />
        <FrameWorkSoc2HeroSection />
      </div>
      <Soc2Body />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default FrameWorkSoc2;
