import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* Yläpalkki */}
      <AppBar position="static" className="appbar">
        <Toolbar className="toolbar">

          <Typography className="logo">
            Pikku Mussukan koiratarvike
          </Typography>

          <div className="nav-links">
            <Link to="/categories">Tuotteet</Link>
            <Link to="/company">Meistä</Link>
          </div>

        </Toolbar>
      </AppBar>

      {/* Sisältö */}
      <Box className="hero">
        <h1>Pikku Mussukan koiratarvike</h1>

        <p>
          Kaikkea ihanaa karvaiselle ystävällesi: leluja, herkkuja ja suloisia asusteita.
        </p>

        <p className="subtext">
          Valitse ylhäältä mitä haluat tutkia.
        </p>
      </Box>

    </div>
  );
}

export default Home;