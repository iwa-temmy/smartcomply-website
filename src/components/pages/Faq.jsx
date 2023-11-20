import React from "react";
import Navbar from "../connected/Navbar";
import FaqHeroSection from "../sections/FaqSection/FaqHeroSection";
import Footer from "../connected/Footer";
import FaqBody from "../sections/FaqSection/FaqBody";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";

const Faq = () => {
  return (
    <div className="faq_hero_section_bg_3">
      <div className="faq_hero_section_bg_4">
        <div className="faq_hero_section_bg">
          <div className="faq_hero_section_bg_2">
            <Navbar />
            <FaqHeroSection />
          </div>
        </div>
        <FaqBody />
        <StillTryingToGetTheHang />
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
