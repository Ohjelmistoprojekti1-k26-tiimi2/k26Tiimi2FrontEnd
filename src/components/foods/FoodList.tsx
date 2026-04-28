import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchFoods } from "../../api/productapi";
import Navbar from "../Navbar";
import "../Home.css";

function FoodList() {
  const [foods, setFoods] = useState([]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nimi", width: 200 },
    { field: "price", headerName: "Hinta (€)", width: 150 },
    { field: "weight", headerName: "Paino (kg)", width: 150 }
  ];

  useEffect(() => {
    fetchFoods()
      .then(data => setFoods(data._embedded.foods))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="product-grid">
        <h2>Koiranruoat</h2>
      <DataGrid
        rows={foods}
        columns={columns}
        getRowId={(row: any) => row._links.self.href}
        autoHeight
        paginationModel={{ pageSize: 10, page: 0 }}
        pageSizeOptions={[10]}
        localeText={{
          noRowsLabel: 'Ei tuotteita',
          footerRowSelected: (count) => `${count} rivi(ä) valittu`
        }}
      />
    </div>
    </div>
  );
}

export default FoodList;