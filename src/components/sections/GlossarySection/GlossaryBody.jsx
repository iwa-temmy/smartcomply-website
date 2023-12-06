import React, { Suspense, useEffect, useState } from "react";
import Tab from "../../controls/Tab";
import GlossaryCard from "../../primitive/cards/GlossaryCard";
import axios from "axios";
import Loading from "../../primitive/Loading";

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
  const [data, setData] = useState([]);
  const [glossaryContent, setGlossaryContent] = useState([]);

  //functions
  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };

  //async action
  const getAllGlossaryContents = async () => {
    const res = await axios.get(
      `https://api.smartcomplyapp.com/api/user_mgt/glossary/`
    );
    setGlossaryContent(res?.data?.data);
  };

  //useEffects
  useEffect(() => {
    // const glossaryContent = t('glossaryContent', { returnObjects: true });
    if (glossaryContent) {
      if (activeTab?.toLowerCase() !== "all") {
        const filteredContentByActiveTab = glossaryContent?.filter((item) =>
          item?.standard?.toLowerCase()?.includes(activeTab?.toLowerCase())
        );
        setData(filteredContentByActiveTab);
      } else {
        setData(glossaryContent);
      }
    }
  }, [activeTab, glossaryContent]);
  useEffect(() => {
    getAllGlossaryContents();
  }, []);
  return (
    <div className="container mx-auto space-y-10">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-20 pb-10 md:pb-24">
        <div className="w-full md:w-[30%]">
          {tabLists.map((tab) => (
            <Tab
              key={tab.id}
              tabName={tab.tabName}
              active={tab.id === activeTab}
              onClick={() => handleChangeTab(tab?.id)}
            />
          ))}
        </div>
        <div className="w-full md:w-[70%] ">
          {data && data.length > 0 ? (
            <>
              <div className="space-y-7 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
                <Suspense fallback={<Loading />}>
                  {data.map((card, index) => (
                    <GlossaryCard
                      key={index}
                      description={card?.meaning}
                      category={card?.standard}
                      glossary_title={card?.word}
                    />
                  ))}
                </Suspense>
              </div>
            </>
          ) : (
            <div className="flex h-full justify-center items-center">
              No content available in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default GlossaryBody;
