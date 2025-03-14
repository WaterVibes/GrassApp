import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeliveryAddress {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  instructions?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  photoUrl?: string;
  grassPoints: number;
  deliveryAddresses: DeliveryAddress[];
  defaultAddressIndex: number;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    addDeliveryAddress: (state, action: PayloadAction<DeliveryAddress>) => {
      if (state.user) {
        state.user.deliveryAddresses.push(action.payload);
      }
    },
    removeDeliveryAddress: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.deliveryAddresses = state.user.deliveryAddresses.filter(
          addr => addr.id !== action.payload
        );
      }
    },
    setDefaultAddress: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.defaultAddressIndex = action.payload;
      }
    },
  },
});

export const {
  login,
  logout,
  updateUser,
  addDeliveryAddress,
  removeDeliveryAddress,
  setDefaultAddress,
} = authSlice.actions;

export default authSlice.reducer; 