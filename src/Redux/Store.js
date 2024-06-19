import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slice/Wishlist";
import cartSlice from "./slice/CartSlice"
const store = configureStore({
    reducer:{
        wishlistReducer:wishListSlice,
        cartReducer:cartSlice

    }
})

export default store