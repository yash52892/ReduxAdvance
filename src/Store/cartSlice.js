import { createSlice } from "@reduxjs/toolkit";

const initCartState={cartItems:[], total:0, numOfItem:0}

const cartSlice = createSlice({
    name: "cart",
    initialState:initCartState,
    reducers:{
        increment(state,action){
            const index = state.cartItems.findIndex(x => x.id ===action.payload.id);
            
            if(index!==-1){
                state.cartItems[index].quantity++;
                state.numOfItem++;
                state.total=state.total+action.payload.price;
            }
        },
        decrement(state, action){
            const index = state.cartItems.findIndex(x => x.id ===action.payload.id);
            if(index!==-1){
                if(state.cartItems[index].quantity>1)
                {
                state.cartItems[index].quantity--;
                state.total=state.total-action.payload.price
                state.numOfItem--;
                }
                else
                {
                    state.cartItems.splice(index, 1);
                    state.total=state.total-action.payload.price
                    state.numOfItem--;
                }
            }
        },
        addItem(state,action){
            const index = state.cartItems.findIndex(x => x.id ===action.payload.id);
            if(index!==-1)
            {
                state.cartItems[index].quantity++;
                state.numOfItem++; 
                state.total=state.total+action.payload.price
            }
            else{
                state.cartItems.push(action.payload);
                state.numOfItem++;
                state.total=state.total+action.payload.price;
            }
        },
    }
})

export default cartSlice;
export const cartActions= cartSlice.actions;