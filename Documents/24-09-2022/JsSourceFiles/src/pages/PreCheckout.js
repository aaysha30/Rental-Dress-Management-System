import { useState } from "react";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";

export default function PreCheckout(){
    
    const [totalDeposit,setTotalDeposit]=useState(0)
    const cartList1=useSelector((state1)=>{return state1.cartItems.map((e)=>{
       
        setTotalDeposit(totalDeposit+e.deposit_amount)
      }
        )});
        console.log("Total deposit : "+totalDeposit)
    return (
        <div>
<Checkout totalDepositAmount={totalDeposit}></Checkout>
        </div>
    )
}