import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)

        },
         removeFromWishlst:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
         }
    }
})

export const {addToWishlist,removeFromWishlst}=wishListSlice.actions
export default wishListSlice.reducer