import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchFoods } from "../../api/productapi";
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
    <div className="product-grid">
      <h2>Koiranruoat</h2>
      <DataGrid
        rows={foods}
        columns={columns}
        pageSizeOptions={[5, 10, 25]}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        getRowId={(row: any) => row._links.self.href}
        autoHeight
      />
    </div>
  );
}

export default FoodList;