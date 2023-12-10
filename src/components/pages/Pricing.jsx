import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../connected/Navbar";
import PricingHeroSection from "../sections/pricingSection/PricingHeroSection";
import Footer from "../connected/Footer";
import CertificationAudit from "../sections/pricingSection/CertificationAudit";
import StillTryingToGetTheHang from "../sections/commonSection/StillTryingToGetTheHang";
import axios from "axios";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [features, setFeatures] = useState([]);
  const [standardPrice, setStandardPrice] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  //async actions
  const fetchAllPlans = async () => {
    const res = await axios.get(
      `https://api.smartcomplyapp.com/api/user_mgt/plan/`
    );
    setPlans(res?.data?.data);
  };

  //features
  const fetchAllFeatures = async () => {
    const res = await axios.get(
      `https://api.smartcomplyapp.com/api/user_mgt/features/`
    );
    setFeatures(res?.data?.data);
  };

  //Compliance standard Prices
  const fetchAllStandardPrices = async () => {
    const res = await axios.get(
      `https://api.smartcomplyapp.com/api/user_mgt/standard_prices/`
    );
    setStandardPrice(res?.data?.data);
  };

  //Payment Methods
  const fetchAllPaymentMethods = async () => {
    const res = await axios.get(
      `https://api.smartcomplyapp.com/api/user_mgt/payments/`
    );
    setPaymentMethods(res?.data?.data);
  };

  const availablePlans = useMemo(() => {
    const filteredPlans = (plans || [])?.filter((plan) => plan?.tag === "main");
    const sortedPlans = filteredPlans?.sort(
      (a, b) => new Date(a?.date_created) - new Date(b?.date_created)
    );
    return sortedPlans;
  }, [plans]);
  console.log({ availablePlans, features, standardPrice, paymentMethods });
  useEffect(() => {
    fetchAllPlans();
    fetchAllFeatures();
    fetchAllStandardPrices();
    fetchAllPaymentMethods();
  }, []);
  return (
    <div>
      <div className="relative pricing_hero_bg_line">
        <div className="absolute top-24 right-0 framework_pricing_hero_bg rounded-l-[254.5px] w-[65%] h-[40vh] md:h-[50vh] -z-20"></div>
        <Navbar />
        <PricingHeroSection />
      </div>
      <CertificationAudit plans={availablePlans} />
      <StillTryingToGetTheHang />
      <Footer />
    </div>
  );
};

export default Pricing;
