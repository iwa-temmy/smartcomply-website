import React from "react";
import Navbar from "../connected/Navbar";
import PricingHeroSection from "../sections/pricingSection/PricingHeroSection";
import Footer from "../connected/Footer";
import CertificationAudit from "../sections/pricingSection/CertificationAudit";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";

const Pricing = () => {
  return (
    <div>
      <div className="relative pricing_hero_bg_line">
        <div className="absolute top-24 right-0 framework_pricing_hero_bg rounded-l-[254.5px] w-[65%] h-[40vh] md:h-[50vh] -z-20"></div>
        <Navbar />
        <PricingHeroSection />
      </div>
      <CertificationAudit />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default Pricing;
