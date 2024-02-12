import { createSlice} from "@reduxjs/toolkit";

const uicartSlice = createSlice({
    name:"UI",
    initialState: {cartVisible: false, notification:null},
    reducers:{
        toggle(state) {
            state.cartVisible = !state.cartVisible;
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message,
            };
        },
    }
})

export default uicartSlice;
export const uiAction=uicartSlice.actions;
