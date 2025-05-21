import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  filteredProducts: [],
  selectedCategory: 'All',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload; // initially all products
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;

      if (action.payload === 'All') {
        state.filteredProducts = state.allProducts;
      } else {
        state.filteredProducts = state.allProducts.filter(
          product => product.category === action.payload,
        );
      }
    },
  },
});

export const {setProducts, setCategory} = productSlice.actions;

export default productSlice.reducer;
