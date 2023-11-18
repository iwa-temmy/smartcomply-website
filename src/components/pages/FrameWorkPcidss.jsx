import React from "react";
import Navbar from "../connected/Navbar";
import FrameWorkPcidssHeroSection from "../sections/FrameWorkPcidssSection/FrameWorkPcidssHeroSection";
import Footer from "../connected/Footer";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";

const FrameWorkPcidss = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 right-0 framework_pcidss_hero_bg w-[65%] h-[100vh] rounded-bl-[226px] -z-20"></div>
        <Navbar />
        <FrameWorkPcidssHeroSection />
      </div>
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default FrameWorkPcidss;
