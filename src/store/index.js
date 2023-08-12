import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import  { cartReducer } from './cart/cartSlice';
import { userReducer } from "./user/userSlice";
import { wishlistApi } from "./api/wishlist";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        [wishlistApi.reducerPath]: wishlistApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
                .concat(wishlistApi.middleware)
    }
});

setupListeners(store.dispatch);

export { store };
export * from './cart/cartSlice';