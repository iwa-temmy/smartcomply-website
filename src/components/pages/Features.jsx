import React from "react";
import Navbar from "../connected/Navbar";
import Footer from "../connected/Footer";
import FeaturesHeroSection from "../sections/featuresSection/FeaturesHeroSection";
import FeaturesDetails from "../sections/featuresSection/FeaturesDetails";

const Features = () => {
  return (
    <div>
      <div className="feature_hero_bg_img ">
        <Navbar />
        <FeaturesHeroSection />
      </div>
      <FeaturesDetails />
      <Footer />
    </div>
  );
};

export default Features;
