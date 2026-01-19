import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartData: {}, 
  totalCount: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, size, color, quantity, price, name } = action.payload;
      const key = `${size}|${color}`; // unique per variant

      if (!state.cartData[id]) state.cartData[id] = {};

      // Only add if this variant doesn't exist yet
      if (!state.cartData[id][key]) {
        state.cartData[id][key] = { size, color, quantity, price, name };
      }

      // Recalculate totalCount
      state.totalCount = Object.values(state.cartData).reduce((acc, variants) => {
        return acc + Object.values(variants).reduce((a, v) => a + v.quantity, 0);
      }, 0);
    },

    updateCart: (state, action) => {
      const { id, size, color, quantity } = action.payload;
      const key = `${size}|${color}`;

      if (state.cartData[id] && state.cartData[id][key]) {
        state.cartData[id][key].quantity = quantity;
      }

      state.totalCount = Object.values(state.cartData).reduce((acc, variants) => {
        return acc + Object.values(variants).reduce((a, v) => a + v.quantity, 0);
      }, 0);
    },

    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;
      const key = `${size}|${color}`;

      if (state.cartData[id] && state.cartData[id][key]) {
        delete state.cartData[id][key];
        if (Object.keys(state.cartData[id]).length === 0) delete state.cartData[id];
      }

      state.totalCount = Object.values(state.cartData).reduce((acc, variants) => {
        return acc + Object.values(variants).reduce((a, v) => a + v.quantity, 0);
      }, 0);
    },

    clearCart: (state) => {
      state.cartData = {};
      state.totalCount = 0;
    }
  }
});

export const { addToCart, updateCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
