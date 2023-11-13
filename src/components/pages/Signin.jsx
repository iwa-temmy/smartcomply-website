import React from "react";
import Navbar from "../connected/Navbar";
import Footer from "../connected/Footer";
import SigninHeroSection from "../sections/signinSection/SigninHeroSection";

const Signin = () => {
  return (
    <div>
      <Navbar />
      <SigninHeroSection />
      <Footer />
    </div>
  );
};

export default Signin;
