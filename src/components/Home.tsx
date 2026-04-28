import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import etusivuKuva from "../assets/etusivukuva.webp";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <Navbar />

      <Box className="hero">
        <h1>Pikkumussukan koiratarvike</h1>

        <p>
          Kaikkea ihanaa karvaiselle ystävällesi: leluja, herkkuja ja suloisia asusteita.
        </p>

        <p className="subtext">
          Valitse valikosta mitä haluat tutkia.
        </p>
      </Box>

      <Box className="bottom-image-container">
        <img 
          src={etusivuKuva} 
          alt="Pikkumussukan koiratarvike" 
          className="bottom-image"
        />
      </Box>

    </div>
  );
}

export default Home;