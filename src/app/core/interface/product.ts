export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating?: IRating;
}

interface IRating {
  rate: number;
  count?: number;
}
