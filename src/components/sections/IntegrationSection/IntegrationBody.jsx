import React, { useEffect, useState } from "react";
import Tab from "../../controls/Tab";
import IntegrationCard from "../../primitive/cards/IntegrationCard";
import search_icon from "../../../assets/icons/search_icon.svg";
import axios from "axios";

const tabLists = [{ tabName: "All", id: "all" }];

const IntegrationBody = () => {
  const [activeTab, setActiveTab] = useState(tabLists[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [integrationsGroup, setIntegrationsGroup] = useState([]);
  const [integrations, setIntegrations] = useState([]);
  const [data, setData] = useState([]);

  //async
  const getAllIntegrationsGroup = async () => {
    const res = await axios.get(
      `https://api.smartcomplyapp.com/api/integrations/groups/`
    );
    setIntegrationsGroup(
      res?.data?.data?.map((item) => ({
        tabName: item?.name,
        id: item?.id,
      }))
    );
  };
  const getAllIntegrations = async () => {
    const res = await axios.get(
      `https://api.smartcomplyapp.com/api/integrations/integration/`
    );
    setIntegrations(res?.data?.data);
  };
  //useEffect
  useEffect(() => {
    getAllIntegrationsGroup();
    getAllIntegrations();
  }, []);
  useEffect(() => {
    if (integrations) {
      if (searchTerm?.length) {
        const filteredContentByInput = integrations?.filter((item) =>
          item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        );
        setData(filteredContentByInput);
      } else if (activeTab !== "all") {
        const filteredContentByActiveTab = integrations?.filter(
          (item) => item?.group === activeTab
        );
        setData(filteredContentByActiveTab);
      } else {
        setData(integrations);
      }
    }
  }, [activeTab, integrations, searchTerm]);
  return (
    <div className="container mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-20 py-6 md:py-16">
      <div className="w-full md:w-[30%]">
        <div>
          <div className="w-full flex flex-row items-center justify-between border-[0.1px] border-Chardonnay rounded-md px-3">
            <div className=" w-full flex items-center justify-between space-x-2 py-2">
              <input
                type="text"
                name=""
                id=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent focus:outline-0 px-3 text-sm md:text-[15px] placeholder:text-Nobel"
                placeholder="Search integration"
              />
              <img src={search_icon} className="cursor-pointer" alt="" />
            </div>
          </div>
        </div>
        <div>
          {[...tabLists, ...integrationsGroup]?.map((tab) => (
            <Tab
              key={tab.id}
              tabName={tab.tabName}
              active={tab.id === activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-[70%]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {data?.map((card, index) => {
            const groupName = integrationsGroup?.find(
              (integration) => integration?.id === card?.group
            )?.tabName;

            return (
              <div key={index}>
                <IntegrationCard
                  logo={card.logo}
                  category={groupName}
                  name={card.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IntegrationBody;
