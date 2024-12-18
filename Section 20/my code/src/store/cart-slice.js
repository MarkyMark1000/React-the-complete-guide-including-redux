import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            state.totalQuantity++;
            const existingItem = state.items.find(item => item.id===newItem.id);
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice + newItem.price;

            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.totalQuantity--;
            const existingItem = state.items.find(item => item.id===id);
            if(existingItem.quantity===1) {
                // replace state items with state items, excluding the input id.
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export default cartSlice;
export const cartActions = cartSlice.actions;