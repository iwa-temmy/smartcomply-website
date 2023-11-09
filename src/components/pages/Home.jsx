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
      <Navbar />
      <HomeHeroSection />
      <EasyQuickAndEfficient />
      <ApraisalFromCustomer />
      <SubscribeToNewsLetterSection />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default Home;
