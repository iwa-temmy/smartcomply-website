import React from "react";

const GlossaryCard = ({ glossary_title, category, description }) => {
  return (
    <div className="space-y-4 md:space-y-0 md:flex-row md:items-start space-x-8 border-b-[0.1px] border-Chardonnay pb-4 pt-6">
      <div className="space-y-3">
        <div className="flex items-start space-x-4">
          <span className="w-fit text-xs rounded-[4px] bg-FloralWhite border border-Chardonnay py-0.5 px-2 font-test-sohne-semibold text-CharcoalGrey mt-1">
            {category}
          </span>
          <h3 className="max-w-[16rem] text-base md:text-xl font-test-sohne-medium">
            {glossary_title}
          </h3>
        </div>
        <p className="text-sm md:text-base text-CharcoalGrey max-w-xs font-test-sohne-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GlossaryCard;
