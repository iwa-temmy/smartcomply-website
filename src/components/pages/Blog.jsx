import React from "react";
import Navbar from "../connected/Navbar";
import BlogHeroSection from "../sections/BlogSection/BlogHeroSection";
import Footer from "../connected/Footer";
import BlogBody from "../sections/BlogSection/BlogBody";

const Blog = () => {
  return (
    <div>
      <div className="get_in_touch_hero_section_bg">
        <Navbar />
        <BlogHeroSection />
      </div>
      <BlogBody />
      <Footer />
    </div>
  );
};

export default Blog;
