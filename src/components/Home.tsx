import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Pikku Mussukan koiratarvike</h1>
      <p>Valitse toiminto:</p>

      <Link to="/categories">
        <button>Selaa tuotteita</button>
      </Link>

      <br /><br />

      <Link to="/company">
        <button>Yrityksen tiedot</button>
      </Link>
    </div>
  );
}

export default Home;