import React from "react";
import Navbar from "../connected/Navbar";
import GlossaryHeroSection from "../sections/GlossarySection/GlossaryHeroSection";
import Footer from "../connected/Footer";
import GlossaryBody from "../sections/GlossarySection/GlossaryBody";

const Glossary = () => {
  return (
    <div>
      <div className="get_in_touch_hero_section_bg">
        <Navbar />
        <GlossaryHeroSection />
      </div>
      <GlossaryBody />
      <Footer />
    </div>
  );
};

export default Glossary;
