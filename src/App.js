import React from "react";
import "./index.css";
import Pages from "./components/pages/Pages";
import ScrollToTop from "./components/sections/commonSection/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import your i18n configuration
// import LanguageSwitcher from "./components/primitive/LanguageSwitcher";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <I18nextProvider i18n={i18n}>
          <Pages />
        </I18nextProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
