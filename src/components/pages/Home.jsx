import React from "react";
import Navbar from "../connected/Navbar";
import Footer from "../connected/Footer";
import HomeHeroSection from "../sections/homeSection/HomeHeroSection";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";
import SubscribeToNewsLetterSection from "../sections/homeSection/SubscribeToNewsLetterSection";
import ApraisalFromCustomer from "../sections/homeSection/ApraisalFromCustomer";
import EasyQuickAndEfficient from "../sections/homeSection/EasyQuickAndEfficient";
import ConnectYourInfastructure from "../sections/homeSection/ConnectYourInfastructure";
import Partners from "../sections/aboutSection/Partners";
import LearnMoreCard from "../sections/homeSection/LearnMoreCard";
import WantToKnowUs from "../sections/homeSection/WantToKnowUs";

const Home = () => {
  return (
    <div>
      <div className="home_hero_bg_img  mb-32">
        <Navbar />
        <HomeHeroSection />
      </div>
      <WantToKnowUs />
      <EasyQuickAndEfficient />
      <ApraisalFromCustomer />
      <SubscribeToNewsLetterSection />
      <ConnectYourInfastructure />
      <Partners />
      <LearnMoreCard />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default Home;
