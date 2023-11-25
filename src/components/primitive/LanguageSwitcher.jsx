// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageToggleButton = () => {
//   const [isChartActive, setChartActive] = useState(true);
//   const [isTableActive, setTableActive] = useState(false);
//   const { i18n } = useTranslation();

//   const toggleSwitch = (view) => {
//     if (view === 'chart') {
//       setChartActive(true);
//       setTableActive(false);
//       i18n.changeLanguage('fr'); // Switch to French when chart is active
//     } else if (view === 'table') {
//       setChartActive(false);
//       setTableActive(true);
//       i18n.changeLanguage('en'); // Switch to English when table is active
//     }
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       <span className="font-test-sohne-semibold">Fren</span>
//       <div className="toggle-switch">
//         <div
//           className={`switch-state ${isChartActive ? 'chart' : ''}`}
//           onClick={() => toggleSwitch('chart')}
//         >
//           <span className="text-transparent">F</span>
//         </div>
//         <div
//           className={`switch-state ${isTableActive ? 'table' : ''}`}
//           onClick={() => toggleSwitch('table')}
//         >
//           <span className="text-transparent">E</span>
//         </div>
//       </div>
//       <span className="text-SeaMist test-sohne-semibold opacity-20">
//         Eng
//       </span>
//     </div>
//   );
// };

// export default LanguageToggleButton;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [isFrenchActive, setFrenchActive] = useState(true);
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    setFrenchActive(!isFrenchActive);
    const newLanguage = isFrenchActive ? "en" : "fr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <span
        className={`font-test-sohne-semibold ${
          isFrenchActive ? "opacity-100" : "opacity-20"
        }`}
      >
        Eng
      </span>
      <div className="toggle-switch" onClick={toggleLanguage}>
        <div className={`switch-state ${isFrenchActive ? "chart" : ""}`}>
          <span className="text-transparent">F</span>
        </div>
        <div className={`switch-state ${!isFrenchActive ? "table" : ""}`}>
          <span className="text-transparent">E</span>
        </div>
      </div>
      <span
        className={`text-SeaMist test-sohne-semibold ${
          !isFrenchActive ? "opacity-100" : "opacity-20"
        }`}
      >
        Fren
      </span>
    </div>
  );
};

export default LanguageSwitcher;
