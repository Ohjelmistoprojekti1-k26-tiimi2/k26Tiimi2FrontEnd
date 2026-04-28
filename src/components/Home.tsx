import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Yläpalkki */}
      <AppBar position="static">
        <Toolbar className="toolbar">
          
          {/* Logo / nimi */}
          <Typography variant="h6">
            🐶 Pikku Mussukan koiratarvike
          </Typography>

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