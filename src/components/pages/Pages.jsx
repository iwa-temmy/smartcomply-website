import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import ErrorPage from "./ErrorPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/auth/sign-in" element={<Signin />} />
      <Route path="/auth/sign-up" element={<Signup />} />
      <Route path="/auth/reset-password" element={<ForgetPassword />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Pages;
