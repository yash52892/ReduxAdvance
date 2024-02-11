import { configureStore } from "@reduxjs/toolkit";
import uicartSlice from "./uiSlice";
import cartSlice from "./cartSlice";

const store= configureStore({
    reducer: {ui: uicartSlice.reducer, cart: cartSlice.reducer}
})

export default store;
