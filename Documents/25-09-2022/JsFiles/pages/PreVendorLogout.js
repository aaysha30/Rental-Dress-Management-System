import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logOut, save } from "../store/cartSlice";

export default function PreVendorLogout(){
    const vendorId=useSelector(state=>{ return state.roleId});
    const navigate=useNavigate()
    const dispatch=useDispatch()
    console.log(vendorId)
    useEffect(()=>{
        if(vendorId==0){
            navigate("/login")
        }
        else{
            const payload={
                cartItems:[],
                 uname:'',
                password:'',
                roleId:0,
                role:'',
            }
            dispatch(logOut(payload))
            alert("LoggedOut !!")
            navigate('/')
        } 
     },[]);
  
   
    return(
        <div></div>
    )
}