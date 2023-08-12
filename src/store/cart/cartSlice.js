import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalQuantity: 0,
        totalSum: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const product  = action.payload;
            const cartItem = state.cart.find(cartItem => cartItem.product && (cartItem.product.id === product.id));
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                const updatedProduct = {
                    product: action.payload,
                    quantity: 1
                }
                state.cart.push(updatedProduct);
            }

            state.totalQuantity += 1;
            state.totalSum += action.payload.price
        },
        updateCart: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.cart.find(item => item.product.id === id)
            product.quantity = quantity;
            state.totalSum = state.cart.reduce((acc, curr) => {
                return acc += Number(curr.quantity) * curr.product.price;
            }, 0);
            state.totalQuantity = state.cart.reduce((acc, curr) => {
                return acc += Number(curr.quantity);
            }, 0);
        },
        deleteFromCart: (state, action) => {
            const { id, quantity } = action.payload;
            state.cart = state.cart.filter(cartItem => cartItem.product.id !== id);
            state.totalQuantity -= Number(quantity);
            state.totalSum = state.cart.reduce((acc, curr) => {
                return acc += Number(curr.quantity) * curr.product.price;
            }, 0);
        }
    }
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
