import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tab from "../../controls/Tab";
import IntegrationCard from "../../primitive/cards/IntegrationCard";
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
  { tabName: "Privacy and Risk management", id: "privacy_and_risk_management" },
  { tabName: "Task Management", id: "task_management" },
];

const IntegrationBody = () => {
  const [activeTab, setActiveTab] = useState(tabLists[0].id);
  return (
    <div className="container mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-20">
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
      <div className="w-full md:w-[70%] bg-red-100">
        <div className="grid grid-cols-3 gap-24">
          {activeTab === "all" && (
            <>
              {allIntegrationInfo.map((card, index) => (
                <Link to={`:projectId`} key={index}>
                  <IntegrationCard
                    projectImg={card.logo}
                    projectType={card.category}
                    projectName={card.name}
                  />
                </Link>
              ))}
            </>
          )}
          {activeTab === "employee_management" && (
            <>
              {employeeManagementIntegrationInfo.map((card, index) => (
                <Link to={`:projectId`} key={index}>
                  <IntegrationCard
                    projectImg={card.logo}
                    projectType={card.category}
                    projectName={card.name}
                  />
                </Link>
              ))}
            </>
          )}
          {activeTab === "cloud_services" && (
            <>
              {cloudServicesIntegrationInfo.map((card, index) => (
                <IntegrationCard
                  key={index}
                  projectImg={card.logo}
                  projectType={card.category}
                  projectName={card.name}
                />
              ))}
            </>
          )}
          {activeTab === "code_repository" && (
            <>
              {codeRepositoryIntegrationInfo.map((card, index) => (
                <IntegrationCard
                  key={index}
                  projectImg={card.logo}
                  projectType={card.category}
                  projectName={card.name}
                />
              ))}
            </>
          )}
          {activeTab === "privacy_and_risk_management" && (
            <>
              {privacyAndRiskmanagementIntegrationInfo.map((card, index) => (
                <IntegrationCard
                  key={index}
                  projectImg={card.logo}
                  projectType={card.category}
                  projectName={card.name}
                />
              ))}
            </>
          )}
          {activeTab === "task_management" && (
            <>
              {taskManagementIntegrationInfo.map((card, index) => (
                <IntegrationCard
                  key={index}
                  projectImg={card.logo}
                  projectType={card.category}
                  projectName={card.name}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default IntegrationBody;
