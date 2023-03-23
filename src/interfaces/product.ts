export interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  image: string;
  description: string;
}
