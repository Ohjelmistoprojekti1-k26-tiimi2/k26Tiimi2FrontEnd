// TUOTTEEN TIETOTYYPPI - SISÄLTÄÄ TUOTTEEN PERUSTIEDOT
export type ProductData = {
  productId: number;    // TUOTTEEN YKSILÖLLINEN TUNNISTE
  name: string;         // TUOTTEEN NIMI
  price: number;        // TUOTTEEN HINTA EUROISSA
  productType?: string; // TUOTTEEN TYYPPI (VAPAAEHTOINEN)
};

// VIENNIN ALIAS JOHDONMUKAISUUDEN VUOKSI
export type Product = ProductData;

// VAATTEEN OMAT
export type Clothing = ProductData & {
  manufacturer.mname: string;   // VALMISTAJA
  clothingSize: string;           // KOKO
  color: string;          // VÄRI
};

// LELUN OMAT
export type Toy = ProductData & {
  manufacturer: string;   // VALMISTAJA
  toyType: string;        // LELUN TYYPPI
  toySize: string;        // LELUN KOKO
};

// RUUAN OMAT
export type Food = ProductData & {
  manufacturer: string;   // VALMISTAJA
  foodType: string;       // RUUAN TYYPPI
  dogAge: string;         // KOIRAN IKÄ
};