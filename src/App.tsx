import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Categories from "./components/Categories";
import CompanyInfo from "./components/CompanyInfo";
import ToyList from "./components/toys/ToyList";
import FoodList from "./components/foods/FoodList";
import ClothesList from "./components/clothes/ClothesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/company" element={<CompanyInfo />} />
        <Route path="/toys" element={<ToyList />} />
        <Route path="/foods" element={<FoodList />} />
        <Route path="/clothes" element={<ClothesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;