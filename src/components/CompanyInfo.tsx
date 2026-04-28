import { Card, CardContent, Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import "./CompanyInfo.css";

function CompanyInfo() {
  return (
    <div className="company-info-container">

      <Navbar />

      <Box className="company-hero">
        <h1>Yrityksen tiedot</h1>

        <Card className="info-card">
          <CardContent>

            <Typography variant="h6" className="section-title">
              Yrityksen nimi
            </Typography>

            <Typography>
              Pikkumussukan koiratarvike
            </Typography>

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

            <Typography className="section-title">
              Perustamisvuosi:
            </Typography>

            <Typography>
              2026
            </Typography>

            <Typography className="section-title">
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