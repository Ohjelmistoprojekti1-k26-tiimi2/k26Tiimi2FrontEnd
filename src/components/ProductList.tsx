import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { fetchProducts } from "../api/productapi";
import type { ProductData } from "../types";

function ProductList() {
  const [products, setProducts] = useState<ProductData[]>([]);

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price (€)", width: 150 },
    { field: "description", headerName: "Description", width: 300 }
  ];

  const getProducts = () => {
    fetchProducts()
      .then(data => {
        // Hyödynnetty saman logiikan rakennetta, kuin Frontend-kurssilla
        setProducts(data._embedded.products);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ width: "95%", height: 500, margin: "auto" }}>
      <DataGrid
        columns={columns}
        rows={products}
        getRowId={(row) => row._links.self.href}
        autoPageSize
      />
    </div>
  );
}

export default ProductList;