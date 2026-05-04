// IMPORTIT
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchFoods } from "../../api/productapi";
import type { Food } from "../../types";
import Navbar from "../Navbar";
import "../ProductList.css";

// RUOAN LISTAN KOMPONENTTI - NÄYTTÄÄ KAIKKI KOIRANRUOAT TAULUKOSSA
function FoodList() {
  // RUOAN TILA
  const [foods, setFoods] = useState<Food[]>([]);

  // DATAGRID:IN SARAKKEIDEN MÄÄRITYS
  const columns: GridColDef[] = [
    { field: "name", headerName: "Nimi", width: 200 },
    { field: "price", headerName: "Hinta (€)", width: 120 },
    { field: "manufacturer", headerName: "Valmistaja", width: 180 },
    { field: "foodType", headerName: "Ruuan tyyppi", width: 160 },
    { field: "dogAge", headerName: "Koiran ikä", width: 150 }
  ];

  // KOMPONENTIN LATAUTUESSA HAETAAN RUOAT PALVELIMELTA
  useEffect(() => {
    fetchFoods()
      .then(data => setFoods(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-grid">
        <h2>Koiranruoat</h2>

        {/* DATAGRID - TAULUKKO RUOILLE */}
        <DataGrid
          rows={foods}
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

export default FoodList;