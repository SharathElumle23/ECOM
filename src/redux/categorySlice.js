import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  products: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addCategories, setProducts } = categorySlice.actions;

export default categorySlice.reducer;
