import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Takaisin etusivulle</Link>

      <h2>Valitse tuoteryhmä</h2>

      <ul>
        <li>
          <Link to="/toys">Selaa leluja</Link>
        </li>
        <li>
          <Link to="/foods">Selaa koiranruokia</Link>
        </li>
        <li>
          <Link to="/clothes">Selaa vaatteita</Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;