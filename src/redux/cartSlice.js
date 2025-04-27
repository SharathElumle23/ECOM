import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  loginFromCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // remove if quantity is 1
        state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
      }
    },
    loginFromCart: (state, action) => {
      state.logingFromCart = action.payload;
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart, loginFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
