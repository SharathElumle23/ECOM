import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import loginReducer from './loginSlice';
import categoryReducer from './categorySlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
    category: categoryReducer,
  },
});
