// IMPORTIT
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { fetchByManufacturer, fetchProducts } from "../api/productapi";
import Navbar from "./Navbar";
import "./ProductList.css";

// KAIKKI TUOTTEET -NÄKYMÄ
function AllProducts() {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [manufacturers, setManufacturers] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const columns: GridColDef[] = [
        { field: "name", headerName: "Nimi", width: 200 },
        { field: "price", headerName: "Hinta (€)", width: 110 },
        { field: "productType", headerName: "Tuotetyyppi", width: 130 },
        {
            field: "manufacturer",
            headerName: "Valmistaja",
            width: 150,
            valueGetter: (value: any) =>
                value && typeof value === "object" ? value.mname : (value ?? ""),
        },
        {
            field: "lisatiedot",
            headerName: "Lisätiedot",
            width: 250,
            valueGetter: (_value: any, row: any) => {
                const type = row.productType?.toLowerCase() ?? "";
                if (type === "clothing" || type === "vaate") {
                    return [row.clothingSize, row.color].filter(Boolean).join(" · ");
                }
                if (type === "toy" || type === "lelu") {
                    return [row.toyType, row.toySize].filter(Boolean).join(" · ");
                }
                if (type === "food" || type === "ruoka") {
                    return [row.foodType, row.dogAge].filter(Boolean).join(" · ");
                }
                return "";
            },
        },
    ];

    // HAETAAN KAIKKI TUOTTEET JA VALMISTAJAT SIVUN LATAUTUESSA
    useEffect(() => {
        setLoading(true);
        fetchProducts().then(data => {
            setAllProducts(data);
            setProducts(data);
            const names: string[] = data
                .map((p: any) =>
                    typeof p.manufacturer === "object" ? p.manufacturer?.mname : p.manufacturer
                )
                .filter(Boolean);
            setManufacturers([...new Set<string>(names)].sort());
        }).catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleSearch = (name: string) => {
        setQuery(name);
        if (!name) {
            setProducts(allProducts);
            return;
        }
        setLoading(true);
        fetchByManufacturer(name)
            .then(data => setProducts(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="product-page">
            <Navbar />

            <div className="product-grid">
                <h2>Kaikki tuotteet</h2>
                <h3>Suodata valmistajan perusteella</h3>

                {/* DROPDOWN - VALMISTAJAN VALINTA */}
                <Box sx={{ marginBottom: 3 }}>
                    <FormControl size="small" sx={{ minWidth: 250 }}>
                        <InputLabel>Valitse valmistaja</InputLabel>
                        <Select
                            value={query}
                            label="Valitse valmistaja"
                            onChange={e => handleSearch(e.target.value)}
                        >
                            <MenuItem value="">Kaikki valmistajat</MenuItem>
                            {manufacturers.map(mname => (
                                <MenuItem key={mname} value={mname}>{mname}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* TULOSTAULUKKO */}
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
            </div>
        </div>
    );
}

export default AllProducts;
