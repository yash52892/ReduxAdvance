import { createSlice} from "@reduxjs/toolkit";

const uicartSlice = createSlice({
    name:"UI",
    initialState: {cartVisible: false},
    reducers:{
        toggle(state) {
            state.cartVisible = !state.cartVisible;
        }
    }
})

export default uicartSlice;
export const uiAction=uicartSlice.actions;