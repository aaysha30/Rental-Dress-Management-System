import { createSlice } from '@reduxjs/toolkit';
console.log("In cart Slice..")
const initialState={
    cartItems:[],
   
    uname:'',
    password:'',
    roleId:0,
    role:'',
    fname:'',
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
                state.role=action.payload.role
                state.roleId=action.payload.roleId
                state.fname=action.payload.fname
                console.log("In Slice :-> User name : "+state.uname)
                console.log("In Slice :-> Password name : "+state.password)
                console.log("In Slice :-> Role->"+state.role+"  Role id "+state.roleId)
                console.log("In Slice :-> First name : "+state.fname)
            },
            removeProduct(state, action)  {
                // console.log("Remove slice : ")
                // console.log(action.payload)
                // let index = state.cartItems.indexOf(action.payload);
                // //state.quantity -= action.payload
                // state.cartItems.splice(index,1)

                const nextCartItems=state.cartItems.filter(
                    (cartItem)=>cartItem.description !== action.payload.description
                );
                 state.cartItems=nextCartItems;
            //     return state.cartItems.filter(({product})=>product.ApparelID !==action.payload.ApparelID)
            // 
        },
            logOut(state,action){
                return initialState
                console.log("Logout slice : _>"+state.uname)
            }
        }
    }
   
);





//const store1=cartSlice.reducer
//export default store;
export const { addToCart }=cartSlice.actions
export const { save }=cartSlice.actions
export const {removeProduct}=cartSlice.actions
export const {logOut}=cartSlice.actions

// export default cartSlice.reducer
export default cartSlice.reducer;