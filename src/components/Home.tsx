import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <Navbar />

      <Box className="hero">
        <h1>Pikkumussukan koiratarvike</h1>

        <p>
          Kaikkea ihanaa karvaiselle ystävällesi – leluja, herkkuja ja suloisia asusteita.
        </p>

        <p className="subtext">
          Valitse valikosta mitä haluat tutkia.
        </p>
      </Box>

    </div>
  );
}

export default Home;