export interface Store {
  id: string;
  owner_id: string;
  name: string;
  slug: string;
  description: string;
  logo_url: string;
  cover_url: string;
  latitude: number;
  longitude: number;
  address_line: string;
  commission_rate: number;
  is_open: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  store_id: string;
  category_id?: string;
  name: string;
  description: string;
  base_price: number;
  is_available: boolean;
  attributes: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
  options: Record<string, any>;
}

export interface Order {
  id: string;
  order_number: number;
  customer_id: string;
  store_id: string;
  driver_id?: string;
  status: 'placed' | 'accepted_by_store' | 'preparing' | 'ready_for_pickup' | 'driver_assigned' | 'in_transit' | 'delivered' | 'cancelled';
  subtotal: number;
  delivery_fee: number;
  service_fee: number;
  total: number;
  delivery_latitude: number;
  delivery_longitude: number;
  delivery_address: string;
  payment_method: string;
  payment_status: string;
  placed_at: string;
  delivered_at?: string;
  items?: OrderItem[];
}
