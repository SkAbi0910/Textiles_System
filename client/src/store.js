import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

import { productsApi } from "./services/productsApi";
import cartReducer from "./redux/cartSlice"; // ✅ import cart slice

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // ✅ persist only cart
};

const rootReducer = combineReducers({
  cart: cartReducer, // ✅ add cart reducer
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
