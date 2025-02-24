import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice";
import productReducer from "./Slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer, // Manage products instead of cart
  },
});

export default store;
