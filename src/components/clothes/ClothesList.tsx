import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchClothes } from "../../api/productapi";
import Navbar from "../Navbar";
import "../Home.css";

function ClothesList() {
  const [clothes, setClothes] = useState([]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nimi", width: 200 },
    { field: "price", headerName: "Hinta (€)", width: 150 },
    { field: "size", headerName: "Koko", width: 100 },
    { field: "color", headerName: "Väri", width: 150 }
  ];

  useEffect(() => {
    fetchClothes()
      .then(data => setClothes(data._embedded.clothes))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="product-grid">
        <h2>Vaatteet</h2>
      <DataGrid
        rows={clothes}
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

export default ClothesList;