import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


export default function CartSession(){
    // function CheckoutCart(){
    //     const uname = useSelector((state)=>{return state.uname});
    //     const navigate=useNavigate();
    //     if(uname!=""){
    //         navigate("/cart");
    //     }
    //     else{
    //         navigate("/login")
    //     }
    // }
    const uname = useSelector((state)=>{return state.uname});
    const navigate=useNavigate();
    useEffect(()=>{
       if(uname!=""){
            navigate("/cart");
        }
        else{
            navigate("/login")
        }
    },[]);
return(
    <div><h1>Welcome at Cart</h1></div>
)
}