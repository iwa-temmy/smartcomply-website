import React from "react";
import smart_comply_logo from "../../assets/icons/smart-comply-logo.svg";
import { Link } from "react-router-dom";
import CustomLink from "../primitive/CustomLink";
import FrameworkDropdown from "../primitive/dropdown/FrameworkDropdown";
import initial_white_icon from "../../assets/icons/inital_white_arrow.svg";
import hover_white_icon from "../../assets/icons/hover_white_arrow.svg";
import ResourcesDropdown from "../primitive/dropdown/ResourcesDropdown";
// import LanguageSwitcher from "../primitive/LanguageSwitcher";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {

  return (
    <div className="">
      <div className="container mx-auto">
        <nav className="flex flex-row items-center justify-between py-4">
          <Link to="/">
            <img src={smart_comply_logo} alt="" />
          </Link>
          <div className="hidden xl:flex flex-row items-center space-x-6 text-base">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <FrameworkDropdown />
            <Link to="/pricing">Pricing</Link>
            <ResourcesDropdown />
            <Link to="/about-us">About us</Link>
            <CustomLink
              to="/auth/sign-up"
              title="Get started"
              className="bg-Ebony text-sm md:text-base text-white hover:bg-ShipGrey"
              inital_arrow={initial_white_icon}
              hover_arrow={hover_white_icon}
            />
            {/* <LanguageSwitcher /> */}
          </div>
          <div className="block xl:hidden">
            <MobileSidebar />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
