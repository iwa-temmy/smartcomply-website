import React from "react";
import customer_reviews_icon from "../../../assets/icons/customer-reviews-icon.svg";
import custom_img from "../../../assets/images/custom-img.png";

const ApraisalFromCustomer = () => {
  return (
    <div className="py-20 md:py-32 space-y-6 md:space-y-12">
      <div className="container mx-auto">
        <h3 className="max-w-2xl flex flex-col text-3xl lg:text-[56px] lg:leading-[4rem] font-test-sohne-medium">
          Appraisals From Our Esteemed Customers
        </h3>
      </div>

      <div className="flex flex-row w-full sm:w-full overflow-auto scrollbar-hide space-x-2 md:space-x-4 relative">
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              I recently had the pleasure of working with Smartcomply to achieve
              PCI DSS compliance for my business, and I must say that the
              experience was truly exceptional. From the very beginning, their
              team demonstrated a deep understanding of the complex world of
              payment card data security, and they guided us through the entire
              process with expertise and professionalism.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  John Atomode
                </h4>
                <p className="text-[10px] md:text-xs">
                  Chief Operating officer
                </p>
                <p className="text-[10px] md:text-xs">
                  D'Accubin Technology Limited
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              The Smartcomply platform is very easy to understand and use, it is
              both engaging and instructive for any compliance audit task.
              Finding this compliance management tool was the best thing for our
              company, as the operations team were very helpful in providing all
              necessary guidance regarding the achievement of our first PCI DSS
              certification effortlessly.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Shile Owoka
                </h4>
                <p className="text-[10px] md:text-xs">Country manager</p>
                <p className="text-[10px] md:text-xs">Smile Identity Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              As a business, one thing we always value is efficiency. And we
              believe that is something Smartcomply embodies. All round
              efficiency and a keen commitment to ensuring goals are met. We
              would gladly recommend them to any of our partners and customers
              looking to ensure regulatory compliance and certification.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Omotola
                </h4>
                <p className="text-[10px] md:text-xs">
                  Legal and Compliance Officer
                </p>
                <p className="text-[10px] md:text-xs">VeendHQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              For any company in a regulated space, it is important to ensure
              compliance with required provisions and laws. Smartcomply helped
              us achieve a standard level of compliance with ease. We
              particularly appreciated the efforts of Opeyemi and Valerie in
              ensuring we completed our NDPR certification as a Lending Company.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Tola
                </h4>
                <p className="text-[10px] md:text-xs">Eden Core Beta Limited</p>
                <p className="text-[10px] md:text-xs">Company Secretary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              I recently had the pleasure of working with Smartcomply to achieve
              PCI DSS compliance for my business, and I must say that the
              experience was truly exceptional. From the very beginning, their
              team demonstrated a deep understanding of the complex world of
              payment card data security, and they guided us through the entire
              process with expertise and professionalism.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  John Atomode
                </h4>
                <p className="text-[10px] md:text-xs">
                  Chief Operating officer
                </p>
                <p className="text-[10px] md:text-xs">
                  D'Accubin Technology Limited
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              The Smartcomply platform is very easy to understand and use, it is
              both engaging and instructive for any compliance audit task.
              Finding this compliance management tool was the best thing for our
              company, as the operations team were very helpful in providing all
              necessary guidance regarding the achievement of our first PCI DSS
              certification effortlessly.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Shile Owoka
                </h4>
                <p className="text-[10px] md:text-xs">Country manager</p>
                <p className="text-[10px] md:text-xs">Smile Identity Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              As a business, one thing we always value is efficiency. And we
              believe that is something Smartcomply embodies. All round
              efficiency and a keen commitment to ensuring goals are met. We
              would gladly recommend them to any of our partners and customers
              looking to ensure regulatory compliance and certification.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Omotola
                </h4>
                <p className="text-[10px] md:text-xs">
                  Legal and Compliance Officer
                </p>
                <p className="text-[10px] md:text-xs">VeendHQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              For any company in a regulated space, it is important to ensure
              compliance with required provisions and laws. Smartcomply helped
              us achieve a standard level of compliance with ease. We
              particularly appreciated the efforts of Opeyemi and Valerie in
              ensuring we completed our NDPR certification as a Lending Company.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Tola
                </h4>
                <p className="text-[10px] md:text-xs">Eden Core Beta Limited</p>
                <p className="text-[10px] md:text-xs">Company Secretary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              I recently had the pleasure of working with Smartcomply to achieve
              PCI DSS compliance for my business, and I must say that the
              experience was truly exceptional. From the very beginning, their
              team demonstrated a deep understanding of the complex world of
              payment card data security, and they guided us through the entire
              process with expertise and professionalism.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  John Atomode
                </h4>
                <p className="text-[10px] md:text-xs">
                  Chief Operating officer
                </p>
                <p className="text-[10px] md:text-xs">
                  D'Accubin Technology Limited
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              The Smartcomply platform is very easy to understand and use, it is
              both engaging and instructive for any compliance audit task.
              Finding this compliance management tool was the best thing for our
              company, as the operations team were very helpful in providing all
              necessary guidance regarding the achievement of our first PCI DSS
              certification effortlessly.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Shile Owoka
                </h4>
                <p className="text-[10px] md:text-xs">Country manager</p>
                <p className="text-[10px] md:text-xs">Smile Identity Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              As a business, one thing we always value is efficiency. And we
              believe that is something Smartcomply embodies. All round
              efficiency and a keen commitment to ensuring goals are met. We
              would gladly recommend them to any of our partners and customers
              looking to ensure regulatory compliance and certification.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Omotola
                </h4>
                <p className="text-[10px] md:text-xs">
                  Legal and Compliance Officer
                </p>
                <p className="text-[10px] md:text-xs">VeendHQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              For any company in a regulated space, it is important to ensure
              compliance with required provisions and laws. Smartcomply helped
              us achieve a standard level of compliance with ease. We
              particularly appreciated the efforts of Opeyemi and Valerie in
              ensuring we completed our NDPR certification as a Lending Company.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Tola
                </h4>
                <p className="text-[10px] md:text-xs">Eden Core Beta Limited</p>
                <p className="text-[10px] md:text-xs">Company Secretary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              I recently had the pleasure of working with Smartcomply to achieve
              PCI DSS compliance for my business, and I must say that the
              experience was truly exceptional. From the very beginning, their
              team demonstrated a deep understanding of the complex world of
              payment card data security, and they guided us through the entire
              process with expertise and professionalism.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  John Atomode
                </h4>
                <p className="text-[10px] md:text-xs">
                  Chief Operating officer
                </p>
                <p className="text-[10px] md:text-xs">
                  D'Accubin Technology Limited
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              The Smartcomply platform is very easy to understand and use, it is
              both engaging and instructive for any compliance audit task.
              Finding this compliance management tool was the best thing for our
              company, as the operations team were very helpful in providing all
              necessary guidance regarding the achievement of our first PCI DSS
              certification effortlessly.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Shile Owoka
                </h4>
                <p className="text-[10px] md:text-xs">Country manager</p>
                <p className="text-[10px] md:text-xs">Smile Identity Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              As a business, one thing we always value is efficiency. And we
              believe that is something Smartcomply embodies. All round
              efficiency and a keen commitment to ensuring goals are met. We
              would gladly recommend them to any of our partners and customers
              looking to ensure regulatory compliance and certification.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Omotola
                </h4>
                <p className="text-[10px] md:text-xs">
                  Legal and Compliance Officer
                </p>
                <p className="text-[10px] md:text-xs">VeendHQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              For any company in a regulated space, it is important to ensure
              compliance with required provisions and laws. Smartcomply helped
              us achieve a standard level of compliance with ease. We
              particularly appreciated the efforts of Opeyemi and Valerie in
              ensuring we completed our NDPR certification as a Lending Company.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Tola
                </h4>
                <p className="text-[10px] md:text-xs">Eden Core Beta Limited</p>
                <p className="text-[10px] md:text-xs">Company Secretary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              I recently had the pleasure of working with Smartcomply to achieve
              PCI DSS compliance for my business, and I must say that the
              experience was truly exceptional. From the very beginning, their
              team demonstrated a deep understanding of the complex world of
              payment card data security, and they guided us through the entire
              process with expertise and professionalism.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  John Atomode
                </h4>
                <p className="text-[10px] md:text-xs">
                  Chief Operating officer
                </p>
                <p className="text-[10px] md:text-xs">
                  D'Accubin Technology Limited
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              The Smartcomply platform is very easy to understand and use, it is
              both engaging and instructive for any compliance audit task.
              Finding this compliance management tool was the best thing for our
              company, as the operations team were very helpful in providing all
              necessary guidance regarding the achievement of our first PCI DSS
              certification effortlessly.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Shile Owoka
                </h4>
                <p className="text-[10px] md:text-xs">Country manager</p>
                <p className="text-[10px] md:text-xs">Smile Identity Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              As a business, one thing we always value is efficiency. And we
              believe that is something Smartcomply embodies. All round
              efficiency and a keen commitment to ensuring goals are met. We
              would gladly recommend them to any of our partners and customers
              looking to ensure regulatory compliance and certification.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Omotola
                </h4>
                <p className="text-[10px] md:text-xs">
                  Legal and Compliance Officer
                </p>
                <p className="text-[10px] md:text-xs">VeendHQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              For any company in a regulated space, it is important to ensure
              compliance with required provisions and laws. Smartcomply helped
              us achieve a standard level of compliance with ease. We
              particularly appreciated the efforts of Opeyemi and Valerie in
              ensuring we completed our NDPR certification as a Lending Company.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Tola
                </h4>
                <p className="text-[10px] md:text-xs">Eden Core Beta Limited</p>
                <p className="text-[10px] md:text-xs">Company Secretary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              I recently had the pleasure of working with Smartcomply to achieve
              PCI DSS compliance for my business, and I must say that the
              experience was truly exceptional. From the very beginning, their
              team demonstrated a deep understanding of the complex world of
              payment card data security, and they guided us through the entire
              process with expertise and professionalism.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  John Atomode
                </h4>
                <p className="text-[10px] md:text-xs">
                  Chief Operating officer
                </p>
                <p className="text-[10px] md:text-xs">
                  D'Accubin Technology Limited
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              The Smartcomply platform is very easy to understand and use, it is
              both engaging and instructive for any compliance audit task.
              Finding this compliance management tool was the best thing for our
              company, as the operations team were very helpful in providing all
              necessary guidance regarding the achievement of our first PCI DSS
              certification effortlessly.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Shile Owoka
                </h4>
                <p className="text-[10px] md:text-xs">Country manager</p>
                <p className="text-[10px] md:text-xs">Smile Identity Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              As a business, one thing we always value is efficiency. And we
              believe that is something Smartcomply embodies. All round
              efficiency and a keen commitment to ensuring goals are met. We
              would gladly recommend them to any of our partners and customers
              looking to ensure regulatory compliance and certification.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Omotola
                </h4>
                <p className="text-[10px] md:text-xs">
                  Legal and Compliance Officer
                </p>
                <p className="text-[10px] md:text-xs">VeendHQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              For any company in a regulated space, it is important to ensure
              compliance with required provisions and laws. Smartcomply helped
              us achieve a standard level of compliance with ease. We
              particularly appreciated the efforts of Opeyemi and Valerie in
              ensuring we completed our NDPR certification as a Lending Company.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Tola
                </h4>
                <p className="text-[10px] md:text-xs">Eden Core Beta Limited</p>
                <p className="text-[10px] md:text-xs">Company Secretary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              I recently had the pleasure of working with Smartcomply to achieve
              PCI DSS compliance for my business, and I must say that the
              experience was truly exceptional. From the very beginning, their
              team demonstrated a deep understanding of the complex world of
              payment card data security, and they guided us through the entire
              process with expertise and professionalism.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  John Atomode
                </h4>
                <p className="text-[10px] md:text-xs">
                  Chief Operating officer
                </p>
                <p className="text-[10px] md:text-xs">
                  D'Accubin Technology Limited
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              The Smartcomply platform is very easy to understand and use, it is
              both engaging and instructive for any compliance audit task.
              Finding this compliance management tool was the best thing for our
              company, as the operations team were very helpful in providing all
              necessary guidance regarding the achievement of our first PCI DSS
              certification effortlessly.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Shile Owoka
                </h4>
                <p className="text-[10px] md:text-xs">Country manager</p>
                <p className="text-[10px] md:text-xs">Smile Identity Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              As a business, one thing we always value is efficiency. And we
              believe that is something Smartcomply embodies. All round
              efficiency and a keen commitment to ensuring goals are met. We
              would gladly recommend them to any of our partners and customers
              looking to ensure regulatory compliance and certification.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Omotola
                </h4>
                <p className="text-[10px] md:text-xs">
                  Legal and Compliance Officer
                </p>
                <p className="text-[10px] md:text-xs">VeendHQ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-BlueChalk px-6 py-8 rounded-2xl space-y-8 text-CharcoalGrey">
            <img src={customer_reviews_icon} alt="" />
            <p className="text-sm md:text-[15px] h-52">
              For any company in a regulated space, it is important to ensure
              compliance with required provisions and laws. Smartcomply helped
              us achieve a standard level of compliance with ease. We
              particularly appreciated the efforts of Opeyemi and Valerie in
              ensuring we completed our NDPR certification as a Lending Company.
            </p>

            <div className="flex flex-row items-center space-x-3">
              <img
                src={custom_img}
                className="rounded-full w-12 h-12"
                alt="customer"
              />
              <div className="">
                <h4 className="font-test-sohne-medium text-base md:text-xl">
                  Tola
                </h4>
                <p className="text-[10px] md:text-xs">Eden Core Beta Limited</p>
                <p className="text-[10px] md:text-xs">Company Secretary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApraisalFromCustomer;
