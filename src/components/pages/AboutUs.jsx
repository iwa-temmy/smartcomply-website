import React from "react";
import Navbar from "../connected/Navbar";
import AboutUsHeroSection from "../sections/aboutSection/AboutUsHeroSection";
import Footer from "../connected/Footer";
import GetInTouch from "../sections/aboutSection/GetInTouch";
import LeveragingOnAi from "../sections/aboutSection/LeveragingOnAi";
import OurTeam from "../sections/aboutSection/OurTeam";
import Partners from "../sections/aboutSection/Partners";

const AboutUs = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 right-[15%] framework_about_us_hero_bg w-[40%] h-[40vh] md:h-[70vh] rounded-b-[254.5px] -z-20"></div>
        <Navbar />
        <AboutUsHeroSection />
      </div>
      <LeveragingOnAi />
      <OurTeam />
      <Partners />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default AboutUs;
