import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Categories from "./components/Categories";
import CompanyInfo from "./components/CompanyInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/company" element={<CompanyInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;