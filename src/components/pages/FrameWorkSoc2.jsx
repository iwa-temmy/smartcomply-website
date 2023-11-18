import React from "react";
import Navbar from "../connected/Navbar";
import FrameWorkSoc2HeroSection from "../sections/FrameWorkSoc2Section/FrameWorkSoc2HeroSection";
import Footer from "../connected/Footer";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";

const FrameWorkSoc2 = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 right-0 framework_soc2_hero_bg w-[65%] h-[100vh] rounded-bl-[226px] -z-20"></div>
        <Navbar />
        <FrameWorkSoc2HeroSection />
      </div>
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default FrameWorkSoc2;
