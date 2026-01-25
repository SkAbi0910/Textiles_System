import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";


export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const res = await api.post("/order/place", orderData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to place order");
    }
  }
);


export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await api.get(`/order/user/${userId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch orders");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
   
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
