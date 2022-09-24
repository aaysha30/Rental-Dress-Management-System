import { useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Shop()
{
    let [items,setItem]=useState([])
    const uname = useSelector((state)=>{return state.uname});
    const password = useSelector((state)=>{return state.password});
     let navigate = useNavigate()
    function finalPurchase()
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                userInfo :{uname:uname ,password:password },
                items:items,
                })
            };
        fetch('http://localhost:8080/savedata', requestOptions)
        .then(response => response.json())
        .then(data =>{
             if(data.result === "OK")
             {
                navigate("/home")
             }
        } );
   

    }
    let [purchases,setPurchases]=useState([])
    return(
        
        <>
        <div>
            <input type="text" onKeyUp={(e)=>{
                if(e.code==="Enter"){
                  let temp = [...items]
                  temp.push(e.target.value)
                  setPurchases(temp.map((e,index)=>{return <li key={index}>{e}</li>}))
                  setItem(temp)
                }
                }} />
            <ul>
            {purchases}
            </ul>          
            <button onClick={finalPurchase}>add item</button>
        </div>
        </>
    )
}