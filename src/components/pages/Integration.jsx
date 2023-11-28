import React from "react";
import Navbar from "../connected/Navbar";
import IntegrationHeroSection from "../sections/IntegrationSection/IntegrationHeroSection";
import Footer from "../connected/Footer";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";
import IntegrationBody from "../sections/IntegrationSection/IntegrationBody";

const Integration = () => {
  return (
    <div>
      <div className="relative integration_hero_bg_section_line">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 framework_integration_hero_bg w-[90%] h-[70vh] rounded-b-[226px] -z-20"></div>
        <Navbar />
        <IntegrationHeroSection />
      </div>
      <IntegrationBody />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default Integration;
