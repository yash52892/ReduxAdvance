import { createSlice } from "@reduxjs/toolkit";

const initCartState={cartItems:[], total:0, numOfItem:0, changed:false}

const cartSlice = createSlice({
    name: "cart",
    initialState:initCartState,
    reducers:{
        replaceCart(state, action){
            state.cartItems=action.payload.cartItems;
            state.numOfItem=action.payload.numOfItem;
            state.total=action.payload.total;
        },
        increment(state,action){
            const index = state.cartItems.findIndex(x => x.id ===action.payload.id);
            
            if(index!==-1){
                state.cartItems[index].quantity++;
                state.numOfItem++;
                state.total=state.total+action.payload.price;
                state.changed=true;
            }
        },
        decrement(state, action){
            const index = state.cartItems.findIndex(x => x.id ===action.payload.id);
            if(index!==-1){
                if(state.cartItems[index].quantity>1)
                {
                state.cartItems[index].quantity--;
                state.changed=true;
                state.total=state.total-action.payload.price
                state.numOfItem--;
                }
                else
                {
                    state.cartItems.splice(index, 1);
                    state.total=state.total-action.payload.price
                    state.numOfItem--;
                    state.changed=true;
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
                state.changed=true;
            }
            else{
                state.cartItems.push(action.payload);
                state.numOfItem++;
                state.total=state.total+action.payload.price;
                state.changed=true;
            }
        },
    },
});

export default cartSlice;
export const cartActions= cartSlice.actions;
