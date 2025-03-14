export interface Dispensary {
  id: string;
  name: string;
  url: string;
  logo_url: string;
  rating: number;
  delivery_time?: string;
  delivery_fee: number;
  minimum_order: number;
  is_open: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  image_url?: string;
  strain_type?: string;
  thc?: string;
  metadata: {
    sizes: Array<{
      name: string;
      weight: string;
      price: number;
    }>;
  };
} 