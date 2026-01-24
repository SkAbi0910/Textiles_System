import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    currency: '$'
  },
  reducers: {}
});

export default shopSlice.reducer;
