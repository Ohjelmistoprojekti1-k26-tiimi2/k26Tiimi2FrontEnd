import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
=======
>>>>>>> 05e706f2de4a6ffc626a4704223ca3188d1e6f05
import "./Home.css";

function Home() {
  return (
<<<<<<< HEAD
    <>
      {/* Yläpalkki */}
      <AppBar position="static">
        <Toolbar className="toolbar">
          
          {/* Logo / nimi */}
          <Typography variant="h6">
            🐶 Pikku Mussukan koiratarvike
          </Typography>
=======
    <div className="home-container">
      <h1>Pikku Mussukan koiratarvike</h1>
      <p>Valitse toiminto:</p>
>>>>>>> 05e706f2de4a6ffc626a4704223ca3188d1e6f05

          {/* Navigaatio */}
          <div className="nav-buttons">
            <Button color="inherit" component={Link} to="/categories">
              Tuotteet
            </Button>

            <Button color="inherit" component={Link} to="/company">
              Meistä
            </Button>
          </div>

        </Toolbar>
      </AppBar>

      {/* Sisältö */}
      <Box className="content">
        <Typography variant="h4" gutterBottom>
          Tervetuloa 🐾
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Täältä löydät kaikkea kivaa karvaiselle kaverillesi, leluista herkkuihin ja vaatteisiin!
        </Typography>

        <Typography variant="body1">
          Valitse ylhäältä mitä haluat selailla 👆
        </Typography>
      </Box>
    </>
  );
}

export default Home;