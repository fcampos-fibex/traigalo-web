import type { Store, Product, Order } from '../domain/models';

const API_BASE_URL = import.meta.env.TRAIGALO_API_URL || 'http://localhost:8080/v2';

export class TraigaloClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  async getHealth(): Promise<{ status: string; services: Record<string, string> }> {
    const res = await fetch(`${this.baseUrl}/health`);
    if (!res.ok) throw new Error(`Health check failed: ${res.statusText}`);
    return res.json();
  }

  async getStores(status?: string, page = 1, size = 20): Promise<Store[]> {
    const url = new URL(`${this.baseUrl}/stores`);
    if (status) url.searchParams.set('status', status);
    url.searchParams.set('page', String(page));
    url.searchParams.set('size', String(size));

    const res = await fetch(url.toString());
    if (!res.ok) return [];
    return res.json();
  }

  async getStoreById(storeId: string): Promise<Store | null> {
    const res = await fetch(`${this.baseUrl}/stores/${storeId}`);
    if (!res.ok) return null;
    return res.json();
  }

  async getStoreProducts(storeId: string): Promise<Product[]> {
    const res = await fetch(`${this.baseUrl}/stores/${storeId}/products`);
    if (!res.ok) return [];
    return res.json();
  }

  async getOrders(status?: string, page = 1, size = 20): Promise<Order[]> {
    const url = new URL(`${this.baseUrl}/orders`);
    if (status) url.searchParams.set('status', status);
    url.searchParams.set('page', String(page));
    url.searchParams.set('size', String(size));

    const res = await fetch(url.toString());
    if (!res.ok) return [];
    return res.json();
  }

  async getOrderById(orderId: string): Promise<Order | null> {
    const res = await fetch(`${this.baseUrl}/orders/${orderId}`);
    if (!res.ok) return null;
    return res.json();
  }
}

export const traigaloClient = new TraigaloClient();
