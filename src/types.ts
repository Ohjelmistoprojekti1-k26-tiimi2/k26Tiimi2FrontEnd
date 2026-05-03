// TUOTTEEN TIETOTYYPPI - SISÄLTÄÄ TUOTTEEN PERUSTIEDOT
export type ProductData = {
  productId: number;    // TUOTTEEN YKSILÖLLINEN TUNNISTE
  name: string;         // TUOTTEEN NIMI
  price: number;        // TUOTTEEN HINTA EUROISSA
  productType?: string; // TUOTTEEN TYYPPI (VAPAAEHTOINEN)
};

// VIENNIN ALIAS JOHDONMUKAISUUDEN VUOKSI
export type Product = ProductData;