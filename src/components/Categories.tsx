import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import hupparikuva from "../assets/Hupparikuva.webp";
import ruokakuva from "../assets/ruoka.webp";
import lelukuvat from "../assets/lelu.webp";
import "./Home.css";

function Categories() {
  return (
    <div className="home-container">
      <Navbar />

      <div className="categories-page">
        <h1 className="categories-title">Valikoima</h1>

        <div className="categories-grid">

          {/* Lelut (vasen) */}
          <Link to="/toys" className="category-card">
            <img src={lelukuvat} alt="Lelut" />
            <div className="overlay">
              <span>Lelut</span>
            </div>
          </Link>

          {/* Vaatteet (keskellä) */}
          <Link to="/clothes" className="category-card">
            <img src={hupparikuva} alt="Vaatteet" />
            <div className="overlay">
              <span>Vaatteet</span>
            </div>
          </Link>

          {/* Ruoka (oikea) */}
          <Link to="/foods" className="category-card">
            <img src={ruokakuva} alt="Koiranruoat" />
            <div className="overlay">
              <span>Koiranruoat</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Categories;