import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Pikku Mussukan koiratarvike</h1>
      <p>Siirry selaamaan tuotteita:</p>

      <Link to="/categories">
        <button>Selaa tuotteita</button>
      </Link>
    </div>
  );
}

export default Home;