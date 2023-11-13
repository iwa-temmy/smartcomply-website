import React from "react";
import Navbar from "../connected/Navbar";
import Footer from "../connected/Footer";
import ResetPasswordHeroSection from "../sections/forgetPasswordSection/ResetPasswordHeroSection";

const ForgetPassword = () => {
  return (
    <div>
      <Navbar />
      <ResetPasswordHeroSection />
      <Footer />
    </div>
  );
};

export default ForgetPassword;
