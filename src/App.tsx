// IMPORTIT
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import CompanyInfo from "./components/CompanyInfo";
import ToyList from "./components/toys/ToyList";
import FoodList from "./components/foods/FoodList";
import ClothesList from "./components/clothes/ClothesList";
import AllProducts from "./components/AllProducts";

// PÄÄKOMPONENTTI - MÄÄRITTÄÄ KAIKKI REITIT SOVELLUKSEEN
function App() {
  return (
    <BrowserRouter basename="/k26Tiimi2FrontEnd">
      <Routes>
        {/* ETUSIVU */}
        <Route path="/" element={<Home />} />
        {/* YRITYSTIETOSIVU */}
        <Route path="/company" element={<CompanyInfo />} />
        {/* LELUJEN LISTAUS */}
        <Route path="/toys" element={<ToyList />} />
        {/* RUOKIEN LISTAUS */}
        <Route path="/foods" element={<FoodList />} />
        {/* VAATTEIDEN LISTAUS */}
        <Route path="/clothes" element={<ClothesList />} />
        {/* VALMISTAJAN TUOTTEET */}
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;