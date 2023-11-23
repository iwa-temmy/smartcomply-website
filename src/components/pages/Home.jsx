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
import FastGrowingBrands from "../sections/homeSection/FastGrowingBrands";

const Home = () => {
  return (
    <div>
      <div className="home_hero_bg_img">
        <Navbar />
        <HomeHeroSection />
      </div>
      <FastGrowingBrands />
      <WantToKnowUs />
      <EasyQuickAndEfficient />
      <ApraisalFromCustomer />
      <ConnectYourInfastructure />
      <Partners />
      <LearnMoreCard />
      <SubscribeToNewsLetterSection />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default Home;
