// IMPORTIT
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

// LAYOUT-KOMPONENTTI: SISÄLTÄÄ NAVBARIN JA NÄYTTÄÄ MUITA SIVUJA OUTLETIN KAUTTA
function Layout() {
  return (
    <div className="home-container">
      <Navbar />
      {/* OUTLET: TÄHÄN RENDERÖIDÄÄN ERI SIVUT REITITYKSESTÄ RIIPPUEN */}
      <Outlet />
    </div>
  );
}

export default Layout;