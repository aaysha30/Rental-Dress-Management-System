import { createSlice } from '@reduxjs/toolkit';
console.log("In cart Slice..")
const initialState={
    cartItems:[],
    cartTotalQuantity:0,
    uname:'',
    password:''
} ;
const cartSlice=createSlice({
    
        name:"cart",
        initialState,
        reducers:{
            addToCart(state,action){
                console.log("Cart slice _>AddedtoCart Item "+action.payload)
                state.cartItems.push(action.payload)
                console.log("Cart Items : "+state.cartItems.forEach((e)=>{console.log("Array of Data : "+e)}))
            },
            save(state,action){
                state.uname=action.payload.uname
                state.password=action.payload.password
                console.log("In Slice :-> User name : "+state.uname)
                console.log("In Slice :-> Password name : "+state.password)
            }
        }
    }
   
);





//const store1=cartSlice.reducer
//export default store;
export const { addToCart }=cartSlice.actions
export const { save }=cartSlice.actions
// export default cartSlice.reducer
export default cartSlice.reducer;