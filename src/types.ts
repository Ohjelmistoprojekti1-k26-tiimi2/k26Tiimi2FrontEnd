export type ProductData = {
  name: string;
  price: number;
  description: string;
  _links: {
    self: { href: string };
    product: { href: string };
  };
};

export type Product = Omit<ProductData, "_links">;