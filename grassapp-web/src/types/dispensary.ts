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
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  hours?: {
    [key: string]: string;
  };
  tags?: string[];
  featured_products?: string[];
} 