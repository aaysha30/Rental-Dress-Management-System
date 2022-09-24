
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
export default function PreProfile(){
    const uname = useSelector((state)=>{return state.uname});
    console.log("PreProfile Page: uname->"+uname)
    const navigate=useNavigate();
    useEffect(()=>{
       if(uname!=""){
            navigate("/ProfileDetails");
        }
        else{
            navigate("/login")
        }
    },[]);
    return(
        <div></div>
    )
}