import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchToys } from "../../api/productapi";
import Navbar from "../Navbar";
import "../Home.css";

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
    <div className="home-container">
      <Navbar />
      <div className="product-grid">
        <h2>Lelut</h2>
      <DataGrid
        rows={toys}
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

export default ToyList;