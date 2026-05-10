// IMPORTIT
import { Card, CardContent, Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import "./CompanyInfo.css";
import tietosivunKuva from "../assets/tietosivun_kuva.png";
import omppujaraneKuva from "../assets/omppujarane.png";


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
            <Typography className="section-title">
              Yrityksen nimi
            </Typography>

            <Typography>
              Pikkumussukan koiratarvike
            </Typography>

            {/* OMISTAJAT */}
            <Typography className="section-title">
              Omistajat
            </Typography>

            <Typography>
              Omppu & <br />
              Rane
            </Typography>

            {/* PERUSTAMISVUOSI */}
            <Typography className="section-title">
              Perustamisvuosi
            </Typography>

            <Typography>
              2026
            </Typography>

            {/* Y-TUNNUS */}
            <Typography className="section-title">
              Y-tunnus
            </Typography>

            <Typography>
              1234567-8
            </Typography>

            <br />
            <br />

            <Typography className="section-title">
              Meidän tarina
            </Typography>
            <Typography>
              Olemme vuonna 2026 perustettu koirantarvikkeita myyvä perheyritys. Myymme koiranleluja, -vaatteita sekä koiranruokaa.
              Panostamme kaikissa tuoteissamme korkeaan laatuun. <br /> 
              <br />
              Sillä olemme vasta hiljattain aloittaneet liikentoimintamme, toimimme tällä hetkellä vain Suomessa.
              Toiveenamme olisi kuitenkin jo lähivuosina laajentaa muihin pohjoismaihin.
            </Typography>


          </CardContent>
        </Card>
      </Box>

      {/* KOIRAKUVA OIKEASSA ALANURKASSA */}
      <div className="decorative-image">
        <img src={tietosivunKuva} alt="Tietosivun kuva" />
      </div>

      {/* OMPUN JA RANEN KUVA VASEMMASSA ALANURKASSA */}
      <div className="left-image">
        <img src={omppujaraneKuva} alt="Omppu ja Rane kuva" />
      </div>

    </div>
  );
}

export default CompanyInfo;