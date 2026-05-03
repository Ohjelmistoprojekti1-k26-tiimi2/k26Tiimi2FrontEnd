// IMPORTIT
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchProducts } from "../api/productapi";
import type { ProductData } from "../types";

// TUOTTEIDEN LISTAN KOMPONENTTI
function ProductList() {
  // TUOTTEIDEN TILA
  const [products, setProducts] = useState<ProductData[]>([]);

  // DATAGRIDIN SARAKKEIDEN MÄÄRITYS
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price (€)", width: 150 },
    { field: "productType", headerName: "Type", width: 150 }
  ];

  // HAKU PALVELIMELTA - NOUTAA KAIKKI TUOTTEET API:STA
  const getProducts = () => {
    fetchProducts()
      .then(data => {
        // ASETETAAN HAETTU TIETO TILAAN
        setProducts(data);
      })
      .catch(err => console.error(err));
  };

  // KOMPONENTIN LATAUTUESSA HAETAAN TUOTTEET
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ width: "95%", height: 500, margin: "auto" }}>
      {/* DATAGRID - TAULUKKO TUOTTEILLE */}
      <DataGrid
        columns={columns}
        rows={products}
        getRowId={(row) => row.productId}
        autoPageSize
      />
    </div>
  );
}

export default ProductList;