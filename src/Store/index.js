import { configureStore } from "@reduxjs/toolkit";
import uicartSlice from "./uiSlice";

const store= configureStore({
    reducer: {ui: uicartSlice.reducer}
})

export default store;