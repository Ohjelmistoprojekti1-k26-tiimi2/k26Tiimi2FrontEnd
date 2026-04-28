import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchToys } from "../../api/productapi";

function ToyList() {
  const [toys, setToys] = useState([]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nimi", width: 200 },
    { field: "price", headerName: "Hinta (€)", width: 150 },
    { field: "ageRecommendation", headerName: "Ikäsuositus", width: 150 }
  ];

  useEffect(() => {
    fetchToys()
      .then(data => setToys(data._embedded.toys))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ height: 500 }}>
      <h2>Lelut</h2>
      <DataGrid
        rows={toys}
        columns={columns}
        getRowId={(row: any) => row._links.self.href}
      />
    </div>
  );
}

export default ToyList;