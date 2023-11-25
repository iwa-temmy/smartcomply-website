import React from "react";
import dedicated_img from "../../../assets/images/dedicated-img.svg";
import vulnerability_scanner from "../../../assets/images/vulnerability_scanner.svg";
import penetration_test from "../../../assets/images/penetration_test.svg";
import automated_scans from "../../../assets/images/automated_scans.svg";
import pci_scan from "../../../assets/images/pci_scan.svg";
import cisco_dashboard from "../../../assets/images/cisco_dashboard.svg";
import checked_icon from "../../../assets/icons/checked_icon.svg";

const FeaturesDetails = () => {
  return (
    <div className="relative xl:-top-24 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={dedicated_img} className="relative xl:-left-16" alt="" />
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="space-y-4 md:space-y-8 relative -top-10">
              <h3 className="text-2xl md:text-4xl font-test-sohne-semibold">
                Dedicated Support
              </h3>
              <p className="text-Boulder text-base md:text-xl">
                Businesses don't need to be expert users to use SmartComply.
              </p>
              <div className="space-y-3">
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    While gathering audit questions and evidence can be
                    laborious, with Smartcomply help, it becomes simpler and
                    quicker.
                  </p>
                </div>
                <hr className="border-t border-AshGrey" />
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    If your business is new to the Smartcomply platform, our
                    dedicated support team is here to expedite your onboarding
                    process and ensure a smooth beginning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-20 xl:space-x-24">
          <div className="w-full md:w-1/2">
            <img
              src={vulnerability_scanner}
              className="relative xl:-left-16"
              alt=""
            />
            <div className="space-y-4 md:space-y-8 relative -top-10">
              <h3 className="text-2xl md:text-4xl font-test-sohne-medium flex flex-col">
                <span>Vulnerability</span> <span>Scanner</span>
              </h3>
              <p className="text-Boulder text-base md:text-xl xl:max-w-sm">
                Get assisted with server data that will be essential to your
                compliance process.
              </p>
              <div className="space-y-3">
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    If your business needs help verifying that only the correct
                    ports are open and ensuring business security, Smartcomply
                    solution empowers you to achieve this in just a matter of
                    minutes.
                  </p>
                </div>
                <hr className="border-t border-AshGrey" />
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    If you require assistance in verifying that only the proper
                    ports are open and that you are secure, this enables you to
                    do so in a matter of minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              src={penetration_test}
              className="relative xl:-left-16"
              alt=""
            />
            <div className="space-y-4 md:space-y-8 relative -top-10">
              <h3 className="text-2xl md:text-4xl font-test-sohne-medium flex flex-col">
                <span>Penetration</span> <span>test</span>
              </h3>
              <p className="text-Boulder text-base md:text-xl">
                Know how susceptible your system is.
              </p>
              <div className="space-y-3">
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    Run the necessary penetration tests on your application
                    quickly and easily with qualified testers.
                  </p>
                </div>
                <hr className="border-t border-AshGrey" />
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    Automate the scheduling of and execution of penetration
                    testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-20 xl:space-x-24">
          <div className="w-full md:w-1/2">
            <img src={pci_scan} className="relative xl:-left-16" alt="" />
            <div className="space-y-4 md:space-y-8 relative -top-10">
              <h3 className="text-2xl md:text-4xl font-test-sohne-medium">
                PCI Scans
              </h3>
              <p className="text-Boulder text-base md:text-xl">
                Schedule PCI Scans to execute automatically on servers
              </p>
              <div className="space-y-3">
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    Run the necessary ASV/PCI scans on your server(s) quickly
                    and easily with the help of experienced testers.
                  </p>
                </div>
                <hr className="border-t border-AshGrey" />
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    ASV/PCI scans can be scheduled automatically and performed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <img
              src={automated_scans}
              className="relative xl:-left-16"
              alt=""
            />
            <div className="space-y-4 md:space-y-8 relative -top-10">
              <h3 className="text-2xl md:text-4xl font-test-sohne-medium">
                Automated Scans
              </h3>
              <p className="text-Boulder text-base md:text-xl">
                Hasten evidence gathering and error reporting
              </p>
              <div className="space-y-3">
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    Your cloud environments can be regularly checked for
                    potential weaknesses.
                  </p>
                </div>
                <hr className="border-t border-AshGrey" />
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    Evidence submissions from cloud-based platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-20 xl:space-x-24">
          <div className="w-full md:w-1/2">
            <img
              src={cisco_dashboard}
              className="relative xl:-left-16"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <div className="space-y-4 md:space-y-8 relative -top-10">
              <h3 className="text-2xl md:text-4xl font-test-sohne-medium">
                Ciso Dashboard
              </h3>
              <p className="text-Boulder text-base md:text-xl">
                You have a thorough explanation of your compliance procedure at
                your disposal.
              </p>
              <div className="space-y-3">
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    A straightforward and detailed dashboard that provides a
                    summary of your compliance process.
                  </p>
                </div>
                <hr className="border-t border-AshGrey" />
                <div className="flex flex-row items-start space-x-3">
                  <img src={checked_icon} className="" alt="" />
                  <p className="text-CharcoalGrey font-test-sohne-light xl:max-w-4xl">
                    Learn about the issues in your environment and role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDetails;
