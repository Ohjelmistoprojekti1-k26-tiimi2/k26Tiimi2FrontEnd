// IMPORTIT
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  Divider
} from "@mui/material";

// MUI-IMPORTIT
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../assets/pikkumussukkalogo-removebg-preview.png";

// NAVBAR-KOMPONENTTI ELI YLÄPALKKI
function Navbar() {
  // TILA VALIKKOJEN AVAAMIS/SULKEMISTA VARTEN
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // AVAA VALIKON HIIREN LIIKKUESSA
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // SULKEE VALIKON
  const handleClose = () => {
    setAnchorEl(null);
  };

  // VALIKON KIRJOITUSTEN TYYLITYS
  const menuItemStyles = {
    minWidth: 220,
    px: 2.5,
    py: 1.5,
    "&:hover": {
      backgroundColor: "rgba(59, 32, 104, 0.08)",
    },
  };

  // OSIOIDEN OTSIKOIDEN TYYLITYS (ESIM. "TUOTTEET")
  const sectionHeaderStyles = {
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "rgba(59, 32, 104, 0.6)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    px: 2.5,
    py: 1,
  };

  return (
    <AppBar
      position="fixed"
      className="topbar"
      elevation={0}
      sx={{
        left: 0,
        right: 0,
      }}
    >
      <Toolbar className="topbar-toolbar">

        {/* LOGO - LINKKI ETUSIVULLE */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={logo}
            alt="Pikkumussukan koiratarvike"
            style={{ height: "130px", marginRight: "12px", cursor: "pointer" }}
          />
        </Link>

        {/* MENU-NAPPI JA AVAUTUVA VALIKKO */}
        <Box
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          className="menu-text"
          sx={{
            marginRight: "8px"
          }}
        >
          Menu

          {/* AVAUTUVA VALIKKO */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            disableScrollLock
            slotProps={{
              list: {
                onMouseLeave: handleClose,
                sx: { padding: "8px 0" },
              },
              paper: {
                sx: {
                  minWidth: 240,
                  borderRadius: 2,
                  boxShadow: "0 8px 32px rgba(59, 32, 104, 0.15)",
                  mt: 1,
                },
              },
            }}
          >

            {/* ETUSIVU-LINKKI */}
            <MenuItem component={Link} to="/" onClick={handleClose} sx={menuItemStyles}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              Etusivu
            </MenuItem>

            <Divider sx={{ my: 1 }} />

            {/* TUOTTEET-OSION OTSIKKO */}
            <Box sx={sectionHeaderStyles}>Tuotteet</Box>

            {/* LELUT-LINKKI */}
            <MenuItem component={Link} to="/toys" onClick={handleClose} sx={menuItemStyles}>
              Lelut
            </MenuItem>

            {/* KOIRANRUOAT-LINKKI */}
            <MenuItem component={Link} to="/foods" onClick={handleClose} sx={menuItemStyles}>
              Koiranruoat
            </MenuItem>

            {/* VAATTEET-LINKKI */}
            <MenuItem component={Link} to="/clothes" onClick={handleClose} sx={menuItemStyles}>
              Vaatteet
            </MenuItem>

            {/* VALMISTAJA HAKU -LINKKI */}
            <MenuItem component={Link} to="/manufacturer" onClick={handleClose} sx={menuItemStyles}>
              Kaikki tuotteet
            </MenuItem>

            <Divider sx={{ my: 1 }} />

            {/* YRITYSTIETOSIVU-LINKKI */}
            <MenuItem component={Link} to="/company" onClick={handleClose} sx={menuItemStyles}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <InfoIcon fontSize="small" />
              </ListItemIcon>
              Meistä
            </MenuItem>

          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;