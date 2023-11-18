import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Signin from "./Signin";
import Signup from "./Signup";
import Features from "./Features";
import FrameWorkIso27001 from "./FrameWorkIso27001";
import FrameWorkSoc2 from "./FrameWorkSoc2";
import FrameWorkPcidss from "./FrameWorkPcidss";
import FrameWorkNdpr from "./FrameWorkNdpr";
import Integration from "./Integration";
import ForgetPassword from "./ForgetPassword";
import ErrorPage from "./ErrorPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/features" element={<Features />} />
      <Route path="/frameworks/iso27001" element={<FrameWorkIso27001 />} />
      <Route path="/frameworks/soc2" element={<FrameWorkSoc2 />} />
      <Route path="/frameworks/pcidss" element={<FrameWorkPcidss />} />
      <Route path="/frameworks/ndpr" element={<FrameWorkNdpr />} />
      <Route path="/frameworks/integration" element={<Integration />} />
      <Route path="/auth/sign-in" element={<Signin />} />
      <Route path="/auth/sign-up" element={<Signup />} />
      <Route path="/auth/reset-password" element={<ForgetPassword />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Pages;
