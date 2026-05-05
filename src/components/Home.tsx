// IMPORTIT
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Navbar from "./Navbar";
import etusivuKuva from "../assets/etusivukuva.webp";
import pedigree from "../assets/Pedigree.png";
import hupparikuva from "../assets/Hupparikuva.webp";
import ruokakuva from "../assets/ruoka.webp";
import lelukuvat from "../assets/lelu.webp";
import "./Home.css";

// ETUSIVUKOMPONENTTI: NÄYTTÄÄ HERO-BANNERIN, KAMPANJAT JA TUOTELUOKAT
function Home() {
  // REFERENSSI KATEGORIOIDEN OSIOON (KÄYTETÄÄN SMOOTH SCROLLAUKSEEN)
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  // FUNKTIO JOKA SCROLLAA SIVULLA KATEGORIOIHIN
  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">

      <Navbar />

      {/* HERO-OSIO - ETUSIVUN PÄÄBANNERI TERVETULIASVIESTILLÄ JA KUVA */}
      <Box className="hero-modern">
        <div className="hero-text">
          <h1>Pikkumussukan koiratarvike</h1>
          <p>
            Suloiset asusteet, herkkuruoat ja hullunhauskat lelut. Meiltä löytyy kaikki, mitä pikkumussukkasi voisi tarvita!
          </p>

          {/* NAPPI JOKA SCROLLAA ALAS TUOTEKATEGORIOIHIN */}
          <button onClick={scrollToCategories} className="cta-button">
            Selaa tuotteita
          </button>
        </div>

        <img
          src={etusivuKuva}
          alt="Koiratarvikkeet"
          className="hero-image"
        />
      </Box>

      {/* KAMPANJA-OSIO - NÄYTTÄÄ PROMOTIIVISEN BANNERIN (ESIM. FEIKKI PEDIGREE TARJOUS) */}
      <div className="campaign-section">
        <img src={pedigree} alt="Pedigree" />

        <div className="campaign-text">
          <h2>Pedigree-kampanja</h2>
          <p>
            Senioriruoat tarjouksessa toukokuun loppuun saakka.
          </p>

          {/* LINKKI JOKA VIE RUOKA-KATEGORIAAN */}
          <Link to="/foods" className="campaign-link">
            Siirry selaamaan ruokia →
          </Link>
        </div>
      </div>

      {/* KATEGORIAT-OSIO - NÄYTTÄÄ KOLME TUOTELUOKKAA (LELUT, VAATTEET, RUOKA) */}
      <div ref={categoriesRef} className="categories-page">
        <Link to="/manufacturer" className="categories-title-link">
          <h2 className="categories-title">Tutustu valikoimaan</h2>
        </Link>

        {/* KATEGORIOIDEN RUUDUKKO */}
        <div className="categories-grid">

          {/* LELUT-KATEGORIA */}
          <Link to="/toys" className="category-card">
            <img src={lelukuvat} alt="Lelut" />
            <div className="overlay">
              <span>Lelut</span>
            </div>
          </Link>

          {/* VAATTEET-KATEGORIA */}
          <Link to="/clothes" className="category-card">
            <img src={hupparikuva} alt="Vaatteet" />
            <div className="overlay">
              <span>Vaatteet</span>
            </div>
          </Link>

          {/* RUOKA-KATEGORIA */}
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

export default Home;