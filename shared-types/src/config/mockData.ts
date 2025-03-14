import { PlatformMetrics, Order, WebSocketEvent } from '../index';

// Mock data configuration
export interface MockDataConfig {
  enabled: boolean;
  syncInterval: number; // milliseconds
  simulateLatency: boolean;
  latencyRange: [number, number]; // min-max milliseconds
}

// Default configuration
export const DEFAULT_MOCK_CONFIG: MockDataConfig = {
  enabled: false,
  syncInterval: 5000, // 5 seconds
  simulateLatency: true,
  latencyRange: [100, 500],
};

// Mock data generator types
export interface MockDataGenerators {
  generateOrder: () => Order;
  generatePlatformMetrics: (platform: 'grassapp' | 'budz') => PlatformMetrics;
  generateWebSocketEvent: () => WebSocketEvent;
}

// Mock data state interface
export interface MockDataState {
  orders: Order[];
  metrics: {
    grassapp: PlatformMetrics;
    budz: PlatformMetrics;
  };
  events: WebSocketEvent[];
  mockUser: {
    grassPoints: number;
  };
}

// Shared mock data state (singleton)
class MockDataService {
  private static instance: MockDataService;
  private config: MockDataConfig = DEFAULT_MOCK_CONFIG;
  private state: MockDataState = {
    orders: [],
    metrics: {
      grassapp: {
        total_revenue: 0,
        active_users: 0,
        orders_completed: 0,
        average_order_value: 0,
        growth_rate: 0
      },
      budz: {
        total_revenue: 0,
        active_users: 0,
        orders_completed: 0,
        average_order_value: 0,
        growth_rate: 0
      }
    },
    events: [],
    mockUser: {
      grassPoints: 100 // Default mock GrassPoints
    }
  };

  private constructor() {}

  public static getInstance(): MockDataService {
    if (!MockDataService.instance) {
      MockDataService.instance = new MockDataService();
    }
    return MockDataService.instance;
  }

  public getConfig(): MockDataConfig {
    return this.config;
  }

  public setConfig(config: Partial<MockDataConfig>): void {
    this.config = { ...this.config, ...config };
  }

  public getState(): MockDataState {
    return this.state;
  }

  public setState(state: Partial<MockDataState>): void {
    this.state = { ...this.state, ...state };
  }

  public isMockEnabled(): boolean {
    return this.config.enabled;
  }

  public toggleMock(enabled: boolean): void {
    this.config.enabled = enabled;
  }
}

export const mockDataService = MockDataService.getInstance(); 