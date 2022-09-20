import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function Home(){


    return(
        <section className='main-container' >
         
         <p id="button" align="center"> <Link to="/vendorsignup" >Logout</Link></p>
       
            <h1 align="center">Home Page</h1>
            {/* <p className="mt-20" align="center">Already have an account ?<Link to="/">Login</Link></p> 
            <p align="center"> <Link to="/vendorsignup" >For Vendor</Link></p>
            <p align="center"><a href="forget-password.html" >Forgot your password?<Link to="/forgetPassword">ForgetPassword</Link></a></p> */}
            <p align="center"> <Link to="/uploadApparel" >Upload Apparel</Link></p>
            <p align="center"> <Link to="/collection" >View Apparel Collection</Link></p>
             
        </section>
    )
}