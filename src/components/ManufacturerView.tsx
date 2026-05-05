// IMPORTIT
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { fetchByManufacturer, fetchProducts } from "../api/productapi";
import Navbar from "./Navbar";
import "./ProductList.css";

// VALMISTAJAN TUOTTEIDEN NÄKYMÄ
function ManufacturerView() {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    const [manufacturers, setManufacturers] = useState<string[]>([]);
    const [searched, setSearched] = useState(false);
    const [loading, setLoading] = useState(false);

    const columns: GridColDef[] = [
        { field: "name", headerName: "Nimi", width: 200 },
        { field: "price", headerName: "Hinta (€)", width: 120 },
        { field: "productType", headerName: "Tuotetyyppi", width: 160 },
    ];

    // HAETAAN KAIKKI VALMISTAJAT SIVUN LATAUTUESSA
    useEffect(() => {
        fetchProducts().then(data => {
            const names: string[] = data
                .map((p: any) =>
                    typeof p.manufacturer === "object" ? p.manufacturer?.mname : p.manufacturer
                )
                .filter(Boolean);
            setManufacturers([...new Set<string>(names)].sort());
        }).catch(err => console.error(err));
    }, []);

    const handleSearch = (name: string) => {
        setQuery(name);
        if (!name) return;
        setLoading(true);
        fetchByManufacturer(name)
            .then(data => {
                setProducts(data);
                setSearched(true);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="product-page">
            <Navbar />

            <div className="product-grid">
                <h2>Selaa tuotteita valmistajan perusteella</h2>

                {/* DROPDOWN - VALMISTAJAN VALINTA */}
                <Box sx={{ marginBottom: 3 }}>
                    <FormControl size="small" sx={{ minWidth: 250 }}>
                        <InputLabel>Valitse valmistaja</InputLabel>
                        <Select
                            value={query}
                            label="Valitse valmistaja"
                            onChange={e => handleSearch(e.target.value)}
                        >
                            {manufacturers.map(mname => (
                                <MenuItem key={mname} value={mname}>{mname}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* TULOSTAULUKKO */}
                {searched && (
                    <DataGrid
                        rows={products}
                        columns={columns}
                        getRowId={(row: any) => row.productId}
                        autoHeight
                        loading={loading}
                        paginationModel={{ pageSize: 10, page: 0 }}
                        pageSizeOptions={[10]}
                        localeText={{
                            noRowsLabel: "Ei tuotteita tällä valmistajalla",
                            footerRowSelected: (count) => `${count} rivi(ä) valittu`
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default ManufacturerView;
