import React, { useState } from "react";
import Tab from "../../controls/Tab";
import GlossaryCard from "../../primitive/cards/GlossaryCard";
import {
  allGlossaryInfo,
  soc2Info,
  pcidssInfo,
  ndprInfo,
  iso27001Info,
  generalInfo,
} from "../../../mockdata/grossaryData";

const tabLists = [
  { tabName: "All", id: "all" },
  { tabName: "SOC2", id: "soc2" },
  { tabName: "PCIDSS", id: "pcidss" },
  { tabName: "NDPR", id: "ndpr" },
  { tabName: "ISO27001", id: "iso27001" },
  { tabName: "GENERAL", id: "general" },
];

const GlossaryBody = () => {
  const [activeTab, setActiveTab] = useState(tabLists[0].id);
  return (
    <div className="container mx-auto space-y-10">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-20 pb-10 md:pb-24">
        <div className="w-full md:w-[30%]">
          {tabLists.map((tab) => (
            <Tab
              key={tab.id}
              tabName={tab.tabName}
              active={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
        <div className="w-full md:w-[70%] ">
          <div className="space-y-7 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
            {activeTab === "all" && (
              <>
                {allGlossaryInfo.map((card, index) => (
                  <GlossaryCard
                    key={index}
                    description={card.description}
                    category={card.category}
                    glossary_title={card.glossary_title}
                  />
                ))}
              </>
            )}
            {activeTab === "soc2" && (
              <>
                {soc2Info.map((card, index) => (
                  <GlossaryCard
                    key={index}
                    description={card.description}
                    category={card.category}
                    glossary_title={card.glossary_title}
                  />
                ))}
              </>
            )}
            {activeTab === "pcidss" && (
              <>
                {pcidssInfo.map((card, index) => (
                  <GlossaryCard
                    key={index}
                    description={card.description}
                    category={card.category}
                    glossary_title={card.glossary_title}
                  />
                ))}
              </>
            )}
            {activeTab === "ndpr" && (
              <>
                {ndprInfo.map((card, index) => (
                  <GlossaryCard
                    key={index}
                    description={card.description}
                    category={card.category}
                    glossary_title={card.glossary_title}
                  />
                ))}
              </>
            )}
            {activeTab === "iso27001" && (
              <>
                {iso27001Info.map((card, index) => (
                  <GlossaryCard
                    key={index}
                    description={card.description}
                    category={card.category}
                    glossary_title={card.glossary_title}
                  />
                ))}
              </>
            )}
            {activeTab === "general" && (
              <>
                {generalInfo.map((card, index) => (
                  <GlossaryCard
                    key={index}
                    description={card.description}
                    category={card.category}
                    glossary_title={card.glossary_title}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlossaryBody;
