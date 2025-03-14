import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Order {
  id: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  total: number;
  deliveryAddress: string;
  estimatedDeliveryTime?: string;
  driverId?: string;
}

interface OrdersState {
  activeOrder: Order | null;
  hasActiveOrder: boolean;
  orderHistory: Order[];
}

const initialState: OrdersState = {
  activeOrder: null,
  hasActiveOrder: false,
  orderHistory: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setActiveOrder: (state, action: PayloadAction<Order>) => {
      state.activeOrder = action.payload;
      state.hasActiveOrder = true;
    },
    clearActiveOrder: (state) => {
      state.activeOrder = null;
      state.hasActiveOrder = false;
    },
    updateOrderStatus: (state, action: PayloadAction<{ orderId: string; status: Order['status'] }>) => {
      if (state.activeOrder?.id === action.payload.orderId) {
        state.activeOrder.status = action.payload.status;
      }
    },
    addToHistory: (state, action: PayloadAction<Order>) => {
      state.orderHistory.unshift(action.payload);
    },
  },
});

export const { setActiveOrder, clearActiveOrder, updateOrderStatus, addToHistory } = ordersSlice.actions;

export default ordersSlice.reducer; 