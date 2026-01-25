import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";
import orderReducer from "./redux/orderSlice";
import shopReducer from "./redux/shopSlice";
import navigationReducer from "./redux/navigationSlice";
import cartReducer from "./redux/cartSlice";
import authReducer from "./redux/authSlice";
import settingsReducer from "./redux/settingsSlice";
import searchReducer from "./redux/searchSlice"; 
import { productsApi } from "./services/productsApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], 
};

const rootReducer = combineReducers({
  navigation: navigationReducer,
  cart: cartReducer,
  auth: authReducer,
  order: orderReducer,
  shop: shopReducer,
  settings: settingsReducer,
  search: searchReducer, 
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: 
    persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
