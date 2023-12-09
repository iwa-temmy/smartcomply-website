import React from "react";
import smart_comply_logo from "../../assets/icons/smart-comply-logo.svg";
import msecb_img from "../../assets/images/msecb-img.png";
import msecb_img_2 from "../../assets/images/msecb-img-2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-MintGreen py-8 md:py-16">
        <div className="container mx-auto flex flex-col space-y-8 md:space-y-0 md:flex-row">
          <div className="w-full md:w-[30%]">
            <div>
              <div className="mb-3 md:mb-6 space-y-1.5">
                <img src={smart_comply_logo} alt="" />
                <p className="text-CharcoalGrey">
                  Make your ongoing compliance operations more efficient,
                  cost-effective and easier.
                </p>
              </div>
              <div className="bg-PaleTurquoise rounded-2xl p-6 space-y-5">
                <span className="bg-white px-4 py-1 rounded-[3px] text-sm ">
                  Contact
                </span>
                <div className="text-CharcoalGrey">
                  <p>
                    <span className="font-test-sohne-semibold">Phone: </span>
                    <span className="font-test-sohne-light">
                      +234 813 326 2024
                    </span>
                  </p>
                  <p>
                    <span className="font-test-sohne-semibold">Address:</span>
                    <span className="font-test-sohne-light">
                      {" "}
                      47, Karimu Ikotun close, Sabo, Yaba, Lagos, Nigeria
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] "></div>
          <div className="w-full md:w-[40%] ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 text-CharcoalGrey">
              <div className="space-y-7">
                <h4 className="font-test-sohne-semibold ">Products</h4>
                <div className="flex flex-col space-y-4">
                  <Link to="/frameworks/iso27001">ISO27001</Link>
                  <Link to="/frameworks/pcidss">PCI DSS</Link>
                  <Link to="/frameworks/soc2">SOC 2</Link>
                  <Link to="/frameworks/ndpr">NDPR</Link>
                </div>
              </div>
              <div className="space-y-7">
                <h4 className="font-test-sohne-semibold ">Company</h4>
                <div className="flex flex-col space-y-4">
                  <Link to="/about-us">About</Link>
                  {/* <Link to="">Contact Us</Link> */}
                  <Link to="/blog">Blog</Link>
                  <Link to="/faq">FAQs</Link>
                  <Link to="/glossary">Glossary</Link>
                </div>
              </div>
              <div className="flex flex-row space-x-4 md:space-x-0 md:flex-col md:space-y-5">
                <img src={msecb_img} className="w-16 md:w-fit" alt="" />
                <img src={msecb_img_2} className="w-16 md:w-fit" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 flex flex-row items-center space-x-5 font-test-sohne-light">
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="">Copyright &copy; 2023</Link>
      </div>
    </div>
  );
};

export default Footer;
