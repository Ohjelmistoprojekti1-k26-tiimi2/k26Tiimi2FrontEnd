import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CompanyInfo() {
  return (
    <div style={{ padding: "20px" }}>

      {/* TEHTY TÄSSÄ KOHTAA VASTA FEIKKIDATALLA, PEPPI TÄYTTÄÄ NÄMÄ MYÖHEMMIN */}
      <Link to="/">← Takaisin etusivulle</Link>

      <h2>Yrityksen tiedot</h2>

      <Card sx={{ maxWidth: 400, marginTop: 2 }}>
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

          <Typography>
            Peppi Vine
            Nadja Lyyra
            Greetel Marttinen
            Tanja Vatka
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
    </div>
  );
}

export default CompanyInfo;