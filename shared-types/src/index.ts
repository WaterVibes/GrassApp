// Common interfaces
export interface User {
  id: string;
  email: string;
  name: string;
  photoUrl?: string;
  grassPoints: number;
  deliveryAddresses: DeliveryAddress[];
  defaultAddressIndex: number;
  role: 'user' | 'admin' | 'driver';
}

export interface DeliveryAddress {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  instructions?: string;
}

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

export interface Order {
  id: string;
  userId: string;
  dispensaryId: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  subtotal: number;
  tax: number;
  delivery_fee: number;
  delivery_address: DeliveryAddress;
  created_at: Date;
  updated_at: Date;
  estimated_delivery_time?: Date;
  driver_id?: string;
  driver_location?: {
    lat: number;
    lng: number;
  };
}

export interface OrderItem {
  id: string;
  product_id: string;
  name: string;
  quantity: number;
  price: number;
  size: string;
  weight: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

// Real-time events
export interface OrderUpdateEvent {
  type: 'ORDER_UPDATE';
  orderId: string;
  status: OrderStatus;
  driverId?: string;
  driverLocation?: {
    lat: number;
    lng: number;
  };
}

export interface DriverLocationEvent {
  type: 'DRIVER_LOCATION';
  driverId: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface DispensaryStatusEvent {
  type: 'DISPENSARY_STATUS';
  dispensaryId: string;
  is_open: boolean;
}

export type WebSocketEvent = 
  | OrderUpdateEvent 
  | DriverLocationEvent 
  | DispensaryStatusEvent;

// Analytics interfaces
export interface PlatformMetrics {
  total_revenue: number;
  active_users: number;
  orders_completed: number;
  average_order_value: number;
  growth_rate: number;
}

export interface DriverMetrics {
  id: string;
  name: string;
  rating: number;
  deliveries_completed: number;
  revenue_generated: number;
  average_delivery_time: number;
}

export interface DispensaryMetrics {
  id: string;
  name: string;
  orders: number;
  revenue: number;
  rating: number;
  average_preparation_time: number;
} 