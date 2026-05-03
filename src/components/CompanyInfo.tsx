// IMPORTIT
import { Card, CardContent, Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import "./CompanyInfo.css";
import kultaisetnoutajat from "../assets/pennut.webp";

// YRITYSTIETOSIVUN KOMPONENTTI - NÄYTTÄÄ YRITYKSEN PERUSTIEDOT
function CompanyInfo() {
  return (
    <div className="company-info-container">

      <Navbar />

      {/* HERO-OSIO - SIVUN PÄÄOTSIKKO */}
      <Box className="company-hero">
        <h1>Yrityksen tiedot</h1>

        {/* KORTTI JOSSA KAIKKI YRITYSTIEDOT */}
        <Card className="info-card">
          <CardContent>

            {/* YRITYKSEN NIMI */}
            <Typography variant="h6" className="section-title">
              Yrityksen nimi
            </Typography>

            <Typography>
              Pikkumussukan koiratarvike
            </Typography>

            {/* OMISTAJAT */}
            <Typography className="section-title">
              Omistajat:
            </Typography>

            <Typography className="owners">
              Peppi Vine <br />
              Nadja Lyyra <br />
              Greetel Marttinen <br />
              Tanja Vatka <br />
              Arttu Inkala
            </Typography>

            {/* PERUSTAMISVUOSI */}
            <Typography className="section-title">
              Perustamisvuosi:
            </Typography>

            <Typography>
              2026
            </Typography>

            {/* Y-TUNNUS */}
            <Typography className="section-title">
              Y-tunnus:
            </Typography>

            <Typography>
              1234567-8
            </Typography>

          </CardContent>
        </Card>
      </Box>

      {/* PENTUJEN KUVA OIKEASSA ALANURKASSA */}
      <div className="decorative-image">
        <img src={kultaisetnoutajat} alt="Pennut" />
      </div>

    </div>
  );
}

export default CompanyInfo;