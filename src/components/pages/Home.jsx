import React from "react";
import Navbar from "../connected/Navbar";
import Footer from "../connected/Footer";
import HomeHeroSection from "../sections/homeSection/HomeHeroSection";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";
import SubscribeToNewsLetterSection from "../sections/homeSection/SubscribeToNewsLetterSection";
import ApraisalFromCustomer from "../sections/homeSection/ApraisalFromCustomer";
import EasyQuickAndEfficient from "../sections/homeSection/EasyQuickAndEfficient";

const Home = () => {
  return (
    <div>
      <div className="home_hero_bg_img">
        <Navbar />
        <HomeHeroSection />
      </div>
      <EasyQuickAndEfficient />
      <ApraisalFromCustomer />
      <SubscribeToNewsLetterSection />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default Home;
