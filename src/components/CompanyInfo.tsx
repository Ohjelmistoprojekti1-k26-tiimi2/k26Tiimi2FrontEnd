import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import "./Home.css";

function CompanyInfo() {
  return (
    <div className="home-container">

      <Navbar />

      <Box className="hero">
        <h1>Yrityksen tiedot</h1>

        <Card className="info-card">
          <CardContent>

            <Typography variant="h6">
              Yrityksen nimi
            </Typography>

            <Typography>
              Pikkumussukan koiratarvike
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              Omistajat:
            </Typography>

            <Typography className="owners">
              Peppi Vine <br />
              Nadja Lyyra <br />
              Greetel Marttinen <br />
              Tanja Vatka <br />
              Arttu Inkala
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              Perustamisvuosi:
            </Typography>

            <Typography>
              2026
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              Y-tunnus:
            </Typography>

            <Typography>
              1234567-8
            </Typography>

          </CardContent>
        </Card>
      </Box>

    </div>
  );
}

export default CompanyInfo;