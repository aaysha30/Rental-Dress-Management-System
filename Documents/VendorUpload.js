import "./style.css"
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

export default function VendorUpload(){



    const [dressinfo, setdress] = useState({});
    
    const handleRegister=(e)=>{
        // console.log(dressinfo);
        const form = document.getElementById('form')
        const formdata = new FormData(form);
        postdatatoserver(formdata);
        e.preventDefault();
    }

    // useEffect(()=>{})
    const postdatatoserver = (data) =>{
        axios.post(`http://localhost:9090/apparel/insertApparel`,data)    
        .then((response) => {
            console.log(response);
            console.log("success");
        })
        .catch((error) => {
            console.log(error);
            console.log("error");
        })
    }    

    return (
        <div>
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3 align="center">Upload Apparel</h3>
            </div>
        </nav>
        <form className="uploaded" id="form" onSubmit={handleRegister}>
        <div className="form" >
          <div className="form-body">
              <div className="description">
                  <label className="form__label" for="description">Description </label>
                  <input className="form__input" type="text" name="description" id="description" placeholder="color + name of dress"
                  // onChange={(e)=>{
                  //   setdress({...dressinfo,description:e.target.value})}}
                  />
              </div>
              <div className="category">
                  <label className="form__label" for="category">Category </label>
                  <input  type="text" name="category" id="category"  className="form__input" placeholder="eg. kurta/sherwani"
                  // onChange={(e)=>{
                  //   setdress({...dressinfo,category:e.target.value})}}
                  />
              </div>
              <div className="vendor">
                  <label className="form__label" for="vendor">Vendor Id </label>
                  <input  type="number" name="vendorId" id="vendorId"  className="form__input" 
                  // onChange={(e)=>{
                  //   setdress({...dressinfo,vendorId:e.target.value})}}
                  />
              </div>
              <div className="amount">
                  <label className="form__label" for="damount">Deposit Amount </label>
                  <input  type="number" name="damount" id="damount" className="form__input" placeholder="amount"
                  // onChange={(e)=>{
                  //   setdress({...dressinfo,damount:e.target.value})}}
                  />
              </div>
              <div className="amount2">
                  <label className="form__label" for="ramount">Rent Amount </label>
                  <input  type="number" name="ramount" id="ramount" className="form__input" placeholder="amount"
                  // onChange={(e)=>{
                  //   setdress({...dressinfo,ramount:e.target.value})}}
                  />
              </div>
              <div className="size">
                  <label className="form__label" for="size">Size </label>
                  <select name="size" id="size"
                  //  onChange={(e)=>{
                  //   setdress({...dressinfo,size:e.target.value})}}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
              </div>
              <div className="Gender">
                  <label className="form__label" for="Gender">Gender </label>
                  Male   <input type="radio" name="gender" id="gender" value="M" 
                  //  onChange={(e)=>{
                  //   setdress({...dressinfo,gender:e.target.value})}}
                  /> 
                  Female  <input type="radio" name="gender" id="gender" value="F" 
                  //  onChange={(e)=>{
                  //   setdress({...dressinfo,gender:e.target.value})}}
                  /> 
              </div>
              <div className="uploadimage">
                    <label className="form__label" for="image">Choose file</label>
                    <input type="file" accept="image/*" name="image" id="image" 
                    // onChange={(e)=>{ setdress({...dressinfo,image:e.target.value})}}  
                     />
              </div>
          </div>
          <div className="footer">
              <input type="submit" name="myfile" value="Upload" />
          </div>
      </div>    
      </form>  

              <div>
              <p align="center"> <Link to="/" >Go To Home</Link></p>
              </div>
   

        </div>
    )
}