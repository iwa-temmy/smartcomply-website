import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Signin from "./Signin";
import Signup from "./Signup";
import BookADemo from "./BookADemo";
import Features from "./Features";
import FrameWorkIso27001 from "./FrameWorkIso27001";
import FrameWorkSoc2 from "./FrameWorkSoc2";
import FrameWorkPcidss from "./FrameWorkPcidss";
import FrameWorkNdpr from "./FrameWorkNdpr";
import Integration from "./Integration";
import Blog from "./Blog";
import Glossary from "./Glossary";
import Pricing from "./Pricing";
import Faq from "./Faq";
import ForgetPassword from "./ForgetPassword";
import Privacy from "./Privacy";
import Terms from "./Terms";
import ErrorPage from "./ErrorPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/frameworks/iso27001" element={<FrameWorkIso27001 />} />
      <Route path="/frameworks/soc2" element={<FrameWorkSoc2 />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/frameworks/pcidss" element={<FrameWorkPcidss />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/frameworks/ndpr" element={<FrameWorkNdpr />} />
      <Route path="/frameworks/integration" element={<Integration />} />
      <Route path="/auth/sign-in" element={<Signin />} />
      <Route path="/auth/sign-up" element={<Signup />} />
      <Route path="/book-a-demo" element={<BookADemo />} />
      <Route path="/auth/reset-password" element={<ForgetPassword />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Pages;
