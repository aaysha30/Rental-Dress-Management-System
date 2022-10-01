import {createStore} from 'redux';
//import { configureStore } from '@reduxjs/toolkit'
const counterReducer = (state={uname:"",password:""},action)=>{

    if(action.type==="save")
    {     console.log("here")
        return {
            uname:action.payload.uname,
            password:action.payload.password,
            
        };
    }
    
    return state;

} 

const store = createStore(counterReducer);
/*
const store = configureStore({
    counterReducer,
  })
*/
export default store;
