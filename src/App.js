import React from "react";
import "./index.css";
import Pages from "./components/pages/Pages";
import ScrollToTop from "./components/sections/commonSection/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import your i18n configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import LanguageSwitcher from "./components/primitive/LanguageSwitcher";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ScrollToTop>
        <I18nextProvider i18n={i18n}>
          <Pages />
        </I18nextProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
