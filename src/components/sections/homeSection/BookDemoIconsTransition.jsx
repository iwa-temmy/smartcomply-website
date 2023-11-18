import React from "react";
import book_demo_icon1 from "../../../assets/icons/book_demo_icon1.svg";
import book_demo_icon2 from "../../../assets/icons/book_demo_icon2.svg";
import book_demo_icon3 from "../../../assets/icons/book_demo_icon3.svg";
import book_demo_icon4 from "../../../assets/icons/book_demo_icon4.svg";

const BookDemoIconsTransition = () => {
  return (
    <div className="flex -space-x-4 cursor-pointer transition duration-700 hover:translate-x-10">
      <div>
        <img
          src={book_demo_icon1}
          className="bg-white p-2 w-16 h-16 rounded-full"
          alt=""
        />
      </div>
      <div>
        <img
          src={book_demo_icon2}
          className="bg-white p-2 w-16 h-16 rounded-full"
          alt=""
        />
      </div>
      <div>
        <img
          src={book_demo_icon3}
          className="bg-white p-2 w-16 h-16 rounded-full"
          alt=""
        />
      </div>
      <div>
        <img
          src={book_demo_icon4}
          className="bg-white p-2 w-16 h-16 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default BookDemoIconsTransition;
