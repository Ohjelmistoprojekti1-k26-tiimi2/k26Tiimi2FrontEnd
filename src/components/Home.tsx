import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Pikku Mussukan koiratarvike</h1>
      <p>Siirry selaamaan tuotteita:</p>

      <Link to="/categories">
        <button>Selaa tuotteita</button>
      </Link>
    </div>
  );
}

export default Home;