import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  Divider
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import PetsIcon from "@mui/icons-material/Pets"; // 🐾 tassu-ikoni
import InfoIcon from "@mui/icons-material/Info";

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

  const menuItemStyles = {
    minWidth: 220,
    px: 2.5,
    py: 1.5,
    "&:hover": {
      backgroundColor: "rgba(59, 32, 104, 0.08)",
    },
  };

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
    <AppBar position="static" className="topbar">
      <Toolbar className="topbar-toolbar">

        {/* Logo */}
        <Typography className="logo">
          Pikkumussukan koiratarvike
        </Typography>

        {/* Menu */}
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
            {/* Päälinkit */}
            <MenuItem component={Link} to="/" onClick={handleClose} sx={menuItemStyles}>
              <ListItemIcon sx={{ minWidth: 40, color: "#3b2068" }}>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                Etusivu
              </Typography>
            </MenuItem>

            <MenuItem component={Link} to="/categories" onClick={handleClose} sx={menuItemStyles}>
              <ListItemIcon sx={{ minWidth: 40, color: "#3b2068" }}>
                <PetsIcon fontSize="small" />
              </ListItemIcon>
              <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                Valikoima
              </Typography>
            </MenuItem>

            <Divider sx={{ my: 1, mx: 2 }} />

            {/* Tuotekategoriat */}
            <Box sx={sectionHeaderStyles}>Tuotteet</Box>

            <MenuItem component={Link} to="/toys" onClick={handleClose} sx={menuItemStyles}>
              <Typography sx={{ fontSize: "0.9rem" }}>Lelut</Typography>
            </MenuItem>

            <MenuItem component={Link} to="/foods" onClick={handleClose} sx={menuItemStyles}>
              <Typography sx={{ fontSize: "0.9rem" }}>Koiranruoat</Typography>
            </MenuItem>

            <MenuItem component={Link} to="/clothes" onClick={handleClose} sx={menuItemStyles}>
              <Typography sx={{ fontSize: "0.9rem" }}>Vaatteet</Typography>
            </MenuItem>

            <Divider sx={{ my: 1, mx: 2 }} />

            {/* Meistä */}
            <MenuItem component={Link} to="/company" onClick={handleClose} sx={menuItemStyles}>
              <ListItemIcon sx={{ minWidth: 40, color: "#3b2068" }}>
                <InfoIcon fontSize="small" />
              </ListItemIcon>
              <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                Meistä
              </Typography>
            </MenuItem>

          </Menu>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;