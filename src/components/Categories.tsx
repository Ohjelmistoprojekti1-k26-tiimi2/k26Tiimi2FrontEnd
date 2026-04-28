import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

function Categories() {
  return (
    <div className="home-container">

      <Navbar />

      <div className="hero">
        <h1>Tuotteet</h1>

        <ul>
          <li><Link to="/toys">Lelut</Link></li>
          <li><Link to="/foods">Koiranruoat</Link></li>
          <li><Link to="/clothes">Vaatteet</Link></li>
        </ul>
      </div>

    </div>
  );
}

export default Categories;