import "./style.css"
import { Route, Routes, useNavigate } from "react-router-dom"
import Collections from "./Collections";
import axios from "axios";
import base_url from "./bootapi";
import { useEffect, useState } from "react";

export default function VendorUpload(){


    // const navigate = useNavigate();

    // const gotoCollection = () =>{
    //     navigate('/collection')
    //  }


    // const handleRegister = (event)=>{
    //     event.preventDefault();
    //     // alert("register")
    //     const apparelId = 6;
    //     const vendorId  = 4;
    //     const description = event.target.description.value;
    //     const category = event.target.category.value;
    //     const damount = event.target.damount.value;
    //     const ramount = event.target.ramount.value;
    //     const size = event.target.size.value;
    //     const gender = event.target.gender.value;
    //     const pic = event.target.photo.value;
    //     const data = {apparelId,vendorId,description,category,damount,ramount,size,gender,pic,};  //to get data in json

    //     axios.post(`${base_url}\add`,data)    //"https://jsonplaceholder.typicode.com/posts",data
    //     .then((response) => {
    //         console.log(response);
    //         event.target.reset();  //reset page after uploading
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    //    }

    const [dressinfo, setdress] = useState({});
    const handleRegister=(e)=>{
        console.log(dressinfo);
        postdatatoserver(dressinfo);
        e.preventDefault();
    }

    // useEffect(()=>{})
    const postdatatoserver = (data) =>{
        axios.post("http://localhost:9090/apparel/insertApparel/",data)    
        .then((response) => {
            console.log(response);
            console.log("success");
        })
        .catch((error) => {
            console.log(error);
            console.log("error");
        })
    }    

    const [getdata,setgetdata] = useState([]);

    // get date for collection
    const getAll = (e) =>{
      e.preventDefault();
      axios.get(`${base_url}/getApparel`,{})
      .then((response) => {
        setgetdata(response.data)
        console.log(response.data);
      }).catch((e) => {
        console.log(e);
      })
    }

    const arr = getdata.map((getdata,index) =>{
      return(
        <tr>
          <td>{getdata.description}</td>
          <td>{getdata.damount}</td>
          <td>{getdata.ramount}</td>
          <td>{getdata.category}</td>
          <td>{getdata.gender}</td>
          <td>{getdata.size}</td>
        </tr>
      )
    })

    let id=2;
    //get by vendor Id
    const getbyid = (e) =>{
      e.preventDefault();
      axios.get(`${base_url}/getByVendorId`,{
        params: {
          vendorId:6,
        },
      })
      .then((response)=>{
        console.log(response.data);
      }).catch((e)=>{
        console.log(e);
      })
    }

    return (
        <div>
        <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3 align="center">Upload Apparel</h3>
            </div>
        </nav>
        <form className="uploaded" id="uploaddress" onSubmit={handleRegister}>
        <div className="form" >
          <div className="form-body">
              <div className="describe">
                  <label className="form__label" for="describe">Description </label>
                  <input className="form__input" type="text" name="description" id="describe" placeholder="color + name of dress"
                  onChange={(e)=>{
                    setdress({...dressinfo,describe:e.target.value})
                  }}/>
              </div>
              <div className="vendor">
                  <label className="form__label" for="vendor">Vendor Id </label>
                  <input  type="number" name="category" id="vendorId"  className="form__input" 
                  onChange={(e)=>{
                    setdress({...dressinfo,vendorId:e.target.value})
                  }}/>
              </div>
              <div className="categories">
                  <label className="form__label" for="categories">Category </label>
                  <input  type="text" name="category" id="categories"  className="form__input" placeholder="eg. kurta/sherwani"
                  onChange={(e)=>{
                    setdress({...dressinfo,categories:e.target.value})
                  }}/>
              </div>
              <div className="amount">
                  <label className="form__label" for="number1">Deposit Amount </label>
                  <input  type="number" name="damount" id="number1" className="form__input" placeholder="amount"
                  onChange={(e)=>{
                    setdress({...dressinfo,number1:e.target.value})
                  }}/>
              </div>
              <div className="amount2">
                  <label className="form__label" for="number2">Rent Amount </label>
                  <input  type="number" name="ramount" id="number2" className="form__input" placeholder="amount"
                  onChange={(e)=>{
                    setdress({...dressinfo,number2:e.target.value})
                  }}/>
              </div>
              <div className="size">
                  <label className="form__label" for="size">Size </label>
                  <select name="size" id="size1" onChange={(e)=>{
                    setdress({...dressinfo,size1:e.target.value})
                  }}>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="xlarge">XL</option>
                  </select>
              </div>
              <div className="Gender">
                  <label className="form__label" for="Gender">Gender </label>
                  Male   <input type="radio" name="gender" id="gen" value="Male"  onChange={(e)=>{
                    setdress({...dressinfo,gen:e.target.value})
                  }}/> 
                  Female  <input type="radio" name="gender" id="gen" value="Female"  onChange={(e)=>{
                    setdress({...dressinfo,gen:e.target.value})
                  }}/> 
              </div>
              <div className="uploadimage">
                    <label className="form__label" for="file">Choose file</label>
                    <input type="file"  name="photo" id="file" onChange={(e)=>{
                    setdress({...dressinfo,file:e.target.value})
                  }}/>
              </div>
          </div>
          <div className="footer">
              {/* <button type="submit" onClick={handleRegister} class="btn">Upload</button> */}
              <input type="submit" value="Upload" />
          </div>
      </div>    
      </form>  


      <button type="submit" value="getAll" onClick={getAll} >View Your Collections</button> 
      <button type="submit" value="getbyid" onClick={getbyid} >View Collections through vendorid</button>

      <h1>List of dresses</h1>
            <table >
                <thead>
                    <tr>  <th>Description </th> <th> Deposit Amount </th> <th> Rent Amount </th> <th> Category </th> <th> Gender </th> <th> Size </th></tr>
                </thead>
                {arr}
            </table>       
            {/* <Routes>
                <Route path="/collection" element={<Collections></Collections>} />
            </Routes> */}
   

        </div>
    )
}