// HAETAAN LELUT PALVELIMESTA VITE-YMPÄRISTÖMUUTTUJALLA MÄÄRITETYSTÄ API-OSOITTEESTA
export const fetchToys = () => {
  return fetch(import.meta.env.VITE_API_URL + "/toys")
    .then(res => {
      // TARKISTETAAN ONKO PYYNTÖ ONNISTUNUT
      if (!res.ok) throw new Error("Virhe lelujen haussa");
      return res.json();
    });
};

// HAETAAN RUOAT PALVELIMESTA
export const fetchFoods = () => {
  return fetch(import.meta.env.VITE_API_URL + "/foods")
    .then(res => {
      // TARKISTETAAN ONKO PYYNTÖ ONNISTUNUT
      if (!res.ok) throw new Error("Virhe ruokien haussa");
      return res.json();
    });
};

// HAETAAN VAATTEET PALVELIMESTA
export const fetchClothes = () => {
  return fetch(import.meta.env.VITE_API_URL + "/clothes")
    .then(res => {
      // TARKISTETAAN ONKO PYYNTÖ ONNISTUNUT
      if (!res.ok) throw new Error("Virhe vaatteiden haussa");
      return res.json();
    });
};

// HAETAAN KAIKKI TUOTTEET PALVELIMESTA
export const fetchProducts = () => {
  return fetch(import.meta.env.VITE_API_URL + "/products")
    .then(res => {
      // TARKISTETAAN ONKO PYYNTÖ ONNISTUNUT
      if (!res.ok) throw new Error("Virhe tuotteiden haussa");
      return res.json();
    });
};