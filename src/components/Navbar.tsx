import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="topbar">
      <Toolbar className="topbar-toolbar">

        {/* Vasen: logo / nimi */}
        <Typography className="logo">
          Pikkumussukan koiratarvike
        </Typography>

        {/* Oikea: menu */}
        <Box
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="menu-text"
        >
          Menu

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleClose
            }}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>
              Etusivu
            </MenuItem>

            <MenuItem component={Link} to="/categories" onClick={handleClose}>
              Tuotteet
            </MenuItem>

            <MenuItem component={Link} to="/company" onClick={handleClose}>
              Meistä
            </MenuItem>
          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;