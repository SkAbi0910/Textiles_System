import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: {} 
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, size, color, price, name } = action.payload;
      const key = `${size}-${color}`;

      if (!state.cartData[id]) {
        state.cartData[id] = {};
      }

      if (state.cartData[id][key]) {
        state.cartData[id][key].quantity += 1;
      } else {
        state.cartData[id][key] = {
          size,
          color,
          price,
          name,
          quantity: 1
        };
      }
    },

    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;
      const key = `${size}-${color}`;

      if (state.cartData[id]?.[key]) {
        delete state.cartData[id][key];
      }

   
      if (state.cartData[id] && Object.keys(state.cartData[id]).length === 0) {
        delete state.cartData[id];
      }
    },

    clearCart: (state) => {
      state.cartData = {};
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
