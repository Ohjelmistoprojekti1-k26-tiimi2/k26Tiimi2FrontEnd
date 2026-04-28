import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import "./Home.css";

function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Typography variant="h6">
            🐶 Pikku Mussukan koiratarvike
          </Typography>

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

      <Box className="home-container">
        <Typography variant="h4" gutterBottom>
          Tervetuloa
        </Typography>

        <Typography sx={{ marginBottom: 2 }}>
          Täältä löydät kaikkea kivaa karvaiselle kaverillesi, leluista herkkuihin ja vaatteisiin!
        </Typography>

        <Typography>
          Valitse ylhäältä mitä haluat selailla.
        </Typography>
      </Box>
    </>
  );
}

export default Home;