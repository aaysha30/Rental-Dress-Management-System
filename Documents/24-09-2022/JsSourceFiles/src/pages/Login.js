import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
//import { customerid } from './atoms';
import {useAtom} from 'jotai';
import { save } from '../store/cartSlice';
export default function Login() {
   // const [, setCid] = useAtom(customerid);
   const[flag,setFlag]=useState('')
    const dispatch= useDispatch()
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
   const[fname,setFname]=useState('')
    const navigateto = useNavigate();
   const [role,setRole]=useState('')
   const [roleId,setRoleId]=useState(0)
    
//    const payload ={
//     uname: uname,
//     password: password,
//    role:role,
//    roleId:roleId
//   }
    const handleEmail = (em) => {
        setUname(em.target.value);
    }

    const handlePassword = (pwd) => {
        setPassword(pwd.target.value);
    //   setRole("customer")
    //   setRoleId(9);
     //   console.log("handle password   : -> rolId :"+payload.roleId)
    }
// const handleRole=(role)=>{
//     setRole("customer");
// }
    const handleCustomer = (e) => {
       //AXIOS CODE


        // e.preventDefault();
        // axios.post('http://localhost:8080/customer/verify', {
            
        //     uname : uname,
        //     password : password
        // }) .then(result =>{
        //      if(result.msg==="ok" ) {
        //         console.log("Ok");
        // //   navigateto('/');
        //      }
        //     else{
        //     console.log("not ok")
        //     dispatch({type:"save",payload:{uname:uname,password:password}}) 
        //         navigateto('/'); 
        //     }
        // }
        // )
        // .catch(error => {
        //     console.log(error);
        // })

  
       
        //Using fetch 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                uname:uname,
                password:password,
               
            }
                )
            };
        fetch('http://localhost:8080/customer/verify', requestOptions)
        .then(response => response.json())
        .then(data =>{
            console.log("msg : "+data.msg)
           
             if(data.msg=="ok")
             {
                setFname(data.fname)
                var f=data.fname
                let payload ={
                    uname: uname,
                    password: password,
                   role:"customer",
                   roleId:data.id,
                   fname:f,
                  }
                  console.log("fLogin page, fname : "+data.fname)
               
                console.log("Login Page : fname using payload : "+payload.fname)
                setFlag('true')
                console.log("flag:->"+flag);
               // dispatch({type:"save",payload:{uname:uname,password:password,role:role,roleId:roleId}})
               alert("Logged in successfully !!")
               dispatch(save(payload));
               navigateto("/");
             }
             else{
                alert("Invalid Credentials!!")
                navigateto("/login");
             }
        } )
if(flag='true'){
    setRole("customer");
    setRoleId(4);
  //  console.log("flag true->"+payload.role)
}
    console.log(fname)
    
    }
     const handleVendor = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8080/vendor/verify', {
    //         uname : uname,
    //         password : password
    //     })
    //         .then(result => {
    //             alert("Logged In..")
    //             navigateto('/');
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })}
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
            uname:uname,
            password:password
           
        })
        };
    fetch('http://localhost:8080/vendor/verify',requestOptions)
    .then(response => response.json())
    .then(data =>{
         if(data.msg==="ok")
         {
            
            let payload ={
                uname: uname,
                password: password,
               role:"vendor",
               roleId:data.id
              }
          
            //dispatch({type:"save",payload:{uname:uname,password:password,role:role,roleId:roleId}})
            dispatch(save(payload));
            navigateto("/vendorhome")
         }
         else{
            alert("Invalid Credentials")
            navigateto("/login");
         }
    } );
     }

  return (
    <div>
        <section className="signin-page account homeimage">
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center">

                    <h2 className="text-center">Log In</h2>
                    <form className="text-left clearfix" action="/">
                        <div className="form-group ">
                            <input type="email" className="form-control npm audit fix --force" placeholder="Email" name='uname' value={uname} onChange={handleEmail} required pattern="^[a-z0-9_]{1,15}@[a-z]{1,10}\.[a-z]{1,9}$" />
                        </div>
                        {/* <div className="form-group ">
                            <input type="email" className="form-control npm audit fix --force" placeholder="Role" name='role' value={role} onChange={handleRole} required pattern="^[a-z0-9_]{1,15}@[a-z]{1,10}\.[a-z]{1,9}$" />
                        </div> */}
                        <div className="form-group">
                            <input type="password" className="form-control my-3" placeholder="Password" name='password' value={password} onChange={handlePassword} required pattern="^[A-Z]{1,3}[a-z]{2,4}[@#$%^&*][0-9]{4}$" />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-main text-center my-2" onClick={handleCustomer} >Login As Customer</button>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-main text-center my-3" onClick={handleVendor} >Login As Vendor</button>
                        </div>
                    </form>
                    <p className="mt-20">New in this site, Create Account?
                        <Link to="/signup">&nbsp;&nbsp; For Customer &nbsp;</Link>
                        <Link to="/vendorsignup">&nbsp; For Vendor</Link>
                    </p>
                    <p><Link to="/ForgotPassword">Forgot your password?</Link></p>
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
  }

