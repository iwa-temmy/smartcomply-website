import React, { useState } from "react";
import Tab from "../../controls/Tab";
import IntegrationCard from "../../primitive/cards/IntegrationCard";
import search_icon from "../../../assets/icons/search_icon.svg";

import {
  allIntegrationInfo,
  employeeManagementIntegrationInfo,
  cloudServicesIntegrationInfo,
  codeRepositoryIntegrationInfo,
  privacyAndRiskmanagementIntegrationInfo,
  taskManagementIntegrationInfo,
} from "../../../mockdata";

const tabLists = [
  { tabName: "All", id: "all" },
  { tabName: "Employee Management", id: "employee_management" },
  { tabName: "Cloud Services", id: "cloud_services" },
  { tabName: "Code Repository", id: "code_repository" },
  { tabName: "Privacy and Risk Management", id: "privacy_and_risk_management" },
  { tabName: "Task Management", id: "task_management" },
];

const IntegrationBody = () => {
  const [activeTab, setActiveTab] = useState(tabLists[0].id);
  const [searchTerm, setSearchTerm] = useState("");

  const filterIntegrationCards = (integrationInfo) => {
    return integrationInfo.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const renderIntegrationCards = (integrationInfo) => {
    return filterIntegrationCards(integrationInfo).map((card, index) => (
      <div key={index}>
        <IntegrationCard
          logo={card.logo}
          category={card.category}
          name={card.name}
        />
      </div>
    ));
  };

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
          {tabLists.map((tab) => (
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8">
          {activeTab === "all" && renderIntegrationCards(allIntegrationInfo)}
          {activeTab === "employee_management" &&
            renderIntegrationCards(employeeManagementIntegrationInfo)}
          {activeTab === "cloud_services" &&
            renderIntegrationCards(cloudServicesIntegrationInfo)}
          {activeTab === "code_repository" &&
            renderIntegrationCards(codeRepositoryIntegrationInfo)}
          {activeTab === "privacy_and_risk_management" &&
            renderIntegrationCards(privacyAndRiskmanagementIntegrationInfo)}
          {activeTab === "task_management" &&
            renderIntegrationCards(taskManagementIntegrationInfo)}
          {filterIntegrationCards(allIntegrationInfo).length === 0 && (
            <p>No item found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationBody;
