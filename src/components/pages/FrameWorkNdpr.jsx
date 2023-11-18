import React from "react";
import Navbar from "../connected/Navbar";
import FrameWorkNdprHeroSection from "../sections/FrameWorkNdprSection/FrameWorkNdprHeroSection";
import Footer from "../connected/Footer";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";

const FrameWorkNdpr = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 right-0 framework_ndpr_hero_bg w-[65%] h-[100vh] rounded-bl-[226px] -z-20"></div>
        <Navbar />
        <FrameWorkNdprHeroSection />
      </div>
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default FrameWorkNdpr;
