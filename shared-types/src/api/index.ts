import { io, Socket } from 'socket.io-client';
import type {
  User,
  Order,
  Dispensary,
  Product,
  WebSocketEvent,
  PlatformMetrics,
  DriverMetrics,
  DispensaryMetrics
} from '../index';

export class GrassAppAPI {
  private static instance: GrassAppAPI;
  private socket: Socket | null = null;
  private baseUrl: string;
  private wsUrl: string;

  private constructor() {
    this.baseUrl = process.env.API_URL || 'http://localhost:8001';
    this.wsUrl = process.env.WS_URL || 'ws://localhost:8001';
  }

  public static getInstance(): GrassAppAPI {
    if (!GrassAppAPI.instance) {
      GrassAppAPI.instance = new GrassAppAPI();
    }
    return GrassAppAPI.instance;
  }

  // WebSocket Connection
  public connectWebSocket(token: string): Socket {
    if (!this.socket) {
      this.socket = io(this.wsUrl, {
        auth: { token },
        transports: ['websocket'],
      });

      this.socket.on('connect', () => {
        console.log('WebSocket connected');
      });

      this.socket.on('disconnect', () => {
        console.log('WebSocket disconnected');
      });
    }
    return this.socket;
  }

  public disconnectWebSocket(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Authentication
  public async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  }

  // Orders
  public async getOrders(token: string): Promise<Order[]> {
    const response = await fetch(`${this.baseUrl}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }

  public async updateOrderStatus(orderId: string, status: Order['status'], token: string): Promise<Order> {
    const response = await fetch(`${this.baseUrl}/orders/${orderId}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    return response.json();
  }

  // Metrics
  public async getPlatformMetrics(platform: 'grassapp' | 'budz', token: string): Promise<PlatformMetrics> {
    const response = await fetch(`${this.baseUrl}/metrics/${platform}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }

  public async getDriverMetrics(token: string): Promise<DriverMetrics[]> {
    const response = await fetch(`${this.baseUrl}/metrics/drivers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }

  public async getDispensaryMetrics(token: string): Promise<DispensaryMetrics[]> {
    const response = await fetch(`${this.baseUrl}/metrics/dispensaries`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }

  // Real-time event subscription
  public subscribeToEvents(eventType: WebSocketEvent['type'], callback: (data: any) => void): void {
    if (!this.socket) {
      throw new Error('WebSocket not connected');
    }
    this.socket.on(eventType, callback);
  }

  public unsubscribeFromEvents(eventType: WebSocketEvent['type'], callback: (data: any) => void): void {
    if (!this.socket) {
      throw new Error('WebSocket not connected');
    }
    this.socket.off(eventType, callback);
  }
} 