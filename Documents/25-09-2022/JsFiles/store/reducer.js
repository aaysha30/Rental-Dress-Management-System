// import {createStore} from 'redux';
// //import { configureStore } from '@reduxjs/toolkit'
// const counterReducer = (state={uname:"",password:""},action)=>{

//     if(action.type==="save")
//     {     console.log("here")
//         return {
//             uname:action.payload.uname,
//             password:action.payload.password,
            
//         };
//     }
    
//     return state;

// } 

// const store = createStore(counterReducer);
// /*
// const store = configureStore({
//     counterReducer,
//   })
// */
// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';
const counterReducer = (state={uname:"",password:"",role:"",cart:[],roleId:''},action)=>{

    if(action.type==="save")
    {     console.log("reducer store")
        return {
            uname:action.payload.uname,
            password:action.payload.password,
            role:action.payload.role,
            roleId:action.payload.roleId
        };
    }
    // if(action.type==="addToCart")
    // {
    //      console.log("Add to cart Reducer..")
    //     // return{
           
    //     // cart:action.payload.cart
    //     // return { // returning a copy of orignal state 
    //     //     ...state, //copying the original state
    //     //     todos: [...state.todos, action.payload] //new todos array 
    //     //    }

    //  const arr=   state.cart.push(action.payload)
    //     return{
    //         cart:action.payload.cart
    //         // cart:action.payload.cart[0]
    //     }
       
    // };
        // console.log(state.cart);
        // return state;
    }//end of counterReducer
    




//  const store = configureStore({
//     reducer:counterReducer,
//     cart:createSlice
// })
// const store1=cartSlice.reducer
// //export default store;
// export const { addToCart }=cartSlice.actions
// // export default cartSlice.reducer
// export default store1;