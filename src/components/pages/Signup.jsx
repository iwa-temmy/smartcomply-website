import React from "react";
import Navbar from "../connected/Navbar";
import Footer from "../connected/Footer";
import SignupHeroSection from "../sections/signupSection/SignupHeroSection";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <SignupHeroSection />
      <Footer />
    </div>
  );
};

export default Signup;
