import React from "react";
import "./index.css";
import Pages from "./components/pages/Pages";
import ScrollToTop from "./components/sections/commonSection/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Pages />
      </ScrollToTop>
    </Router>
  );
}

export default App;
