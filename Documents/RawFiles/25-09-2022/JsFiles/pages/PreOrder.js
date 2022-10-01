import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function PreOrder(){
    const uname = useSelector((state)=>{return state.uname});
    console.log("PreOrder Page: uname->"+uname)
    const navigate=useNavigate();
    useEffect(()=>{
       if(uname!=""){
            navigate("/Order");
        }
        else{
            navigate("/login")
        }
    },[]);
return (
    <div>

    </div>
)
}