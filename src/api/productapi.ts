export const fetchToys = () => {
  return fetch(import.meta.env.VITE_API_URL + "/toys")
    .then(res => {
      if (!res.ok) throw new Error("Virhe lelujen haussa");
      return res.json();
    });
};

export const fetchFoods = () => {
  return fetch(import.meta.env.VITE_API_URL + "/foods")
    .then(res => {
      if (!res.ok) throw new Error("Virhe ruokien haussa");
      return res.json();
    });
};

export const fetchClothes = () => {
  return fetch(import.meta.env.VITE_API_URL + "/clothes")
    .then(res => {
      if (!res.ok) throw new Error("Virhe vaatteiden haussa");
      return res.json();
    });
};

export const fetchProducts = () => {
  return fetch(import.meta.env.VITE_API_URL + "/products")
    .then(res => {
      if (!res.ok) throw new Error("Virhe tuotteiden haussa");
      return res.json();
    });
};