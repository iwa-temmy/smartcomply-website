import React, { useState, useEffect } from "react";
import { faqInfo } from "../../../mockdata/faqData";
import faq_arrow from "../../../assets/icons/faq_arrow.svg";

const FaqBody = () => {
  const [show, setShow] = useState(false);
  const [searchItem] = useState("");
  const [searchValue, setSearchValue] = useState([]);

  const toggle = (index) => {
    if (show === index) {
      return setShow(null);
    }
    return setShow(index);
  };

  useEffect(() => {
    searchFaq(searchItem); // eslint-disable-next-line
  }, [searchItem]);

  const searchFaq = (searchItem) => {
    const values = faqInfo.filter((item) => {
      return searchItem?.toLocaleLowerCase().trim() === ""
        ? item
        : item?.question
            .toLocaleLowerCase()
            .trim()
            .includes(searchItem.toLowerCase().trim());
    });
    setSearchValue(values);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center pb-24">
      {searchValue.map((faq, index) => {
        return (
          <div key={index} className="w-full md:w-[60%] py-2">
            <div
              onClick={() => toggle(index)}
              className="bg-RoseWhite pl-10 pr-4 py-4 rounded-xl border border-SunsetOrange cursor-pointer"
            >
              <div className="flex items-center justify-between pt-2 pb-3.5">
                <p className="text-base md:text-xl max-w-md">{faq.question}</p>
                <div>
                  <img
                    src={faq_arrow}
                    className={`${
                      show === index ? "" : "rotate-180"
                    } transition-transform duration-700`}
                    alt=""
                  />
                </div>
              </div>
              <div
                className={`max-h-0 overflow-hidden transition-max-height duration-1000 ${
                  show === index ? "max-h-[500px]" : ""
                }`}
              >
                <p className="font-test-sohne-light text-sm md:text-base max-w-lg pb-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqBody;
