import React from "react";
import Navbar from "../connected/Navbar";
import Footer from "../connected/Footer";
import BookADemoHeroSection from "../sections/bookADemoSection/BookADemoHeroSection";

const BookADemo = () => {
  return (
    <div>
      <Navbar />
      <BookADemoHeroSection />
      <Footer />
    </div>
  );
};

export default BookADemo;
