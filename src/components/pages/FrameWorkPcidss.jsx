import React from "react";
import Navbar from "../connected/Navbar";
import FrameWorkPcidssHeroSection from "../sections/FrameWorkPcidssSection/FrameWorkPcidssHeroSection";
import Footer from "../connected/Footer";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";
import PcidssBody from "../sections/FrameWorkPcidssSection/PcidssBody";

const FrameWorkPcidss = () => {
  return (
    <div>
      <div className="relative pcidss_hero_bg_section_line">
        <div className="absolute top-0 right-0 framework_pcidss_hero_bg w-[65%] h-[100vh] rounded-bl-[226px] -z-20"></div>
        <Navbar />
        <FrameWorkPcidssHeroSection />
      </div>
      <PcidssBody />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default FrameWorkPcidss;
