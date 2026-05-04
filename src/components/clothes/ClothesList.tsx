// IMPORTIT
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchClothes } from "../../api/productapi";
import type { Clothing } from "../../types";
import Navbar from "../Navbar";
import "../ProductList.css";

// VAATTEIDEN LISTAN KOMPONENTTI - NÄYTTÄÄ KAIKKI VAATTEET TAULUKOSSA
function ClothesList() {
  // VAATTEIDEN TILA
  const [clothes, setClothes] = useState<Clothing[]>([]);

  // DATAGRID:IN SARAKKEIDEN MÄÄRITYS
  const columns: GridColDef[] = [
    { field: "name", headerName: "Nimi", width: 200 },
    { field: "price", headerName: "Hinta (€)", width: 120 },
    { field: "manufacturer", headerName: "Valmistaja", width: 180 },
    { field: "size", headerName: "Koko", width: 120 },
    { field: "color", headerName: "Väri", width: 150 }
  ];

  // KOMPONENTIN LATAUTUESSA HAETAAN VAATTEET PALVELIMELTA
  useEffect(() => {
    fetchClothes()
      .then(data => setClothes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-grid">
        <h2>Vaatteet</h2>

        {/* DATAGRID - TAULUKKO VAATTEILLE */}
        <DataGrid
          rows={clothes}
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

export default ClothesList;