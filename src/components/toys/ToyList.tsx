// IMPORTIT
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchToys } from "../../api/productapi";
import Navbar from "../Navbar";
import "../ProductList.css";

// LELUJEN LISTAN KOMPONENTTI - NÄYTTÄÄ KAIKKI LELUT TAULUKOSSA
function ToyList() {
  // LELUJEN TILA
  const [toys, setToys] = useState([]);

  // DATAGRID:IN SARAKKEIDEN MÄÄRITYS (NIMI, HINTA, IKÄSUOSITUS)
  const columns: GridColDef[] = [
    { field: "name", headerName: "Nimi", width: 200 },
    { field: "price", headerName: "Hinta (€)", width: 150 },
    { field: "ageRecommendation", headerName: "Ikäsuositus", width: 150 }
  ];

  // KOMPONENTIN LATAUTUESSA HAETAAN LELUT PALVELIMELTA
  useEffect(() => {
    fetchToys()
      .then(data => setToys(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-grid">
        <h2>Lelut</h2>

        {/* DATAGRID - TAULUKKO LELUILLE */}
        <DataGrid
          rows={toys}
          columns={columns}
          getRowId={(row: any) => row.productId}
          autoHeight
          paginationModel={{ pageSize: 10, page: 0 }}
          pageSizeOptions={[10]}
          localeText={{
            noRowsLabel: "Ei tuotteita",
            footerRowSelected: (count) => `${count} rivi(ä) valittu`
          }}
        />
      </div>
    </div>
  );
}

export default ToyList;