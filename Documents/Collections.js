import axios from "axios";
import base_url from "./bootapi";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';    
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function Collections(){

    const [getdata,setgetdata] = useState([]);

    // get date for collection
    // const getAll = (e) =>{
    //   e.preventDefault();
    //   axios.get(`${base_url}/getApparel`,{})
    //   .then((response) => {
    //     setgetdata(response.data)
    //     console.log(response.data);
    //   }).catch((e) => {
    //     console.log(e);
    //   })
    // }

    const arr = getdata.map((desc) =>{
      return(
        <>
        <tr>
          <td>{desc.apparelID}</td>
          <td>{desc.description}</td>
          <td>{desc.damount}</td>
          <td>{desc.ramount}</td>
          <td>{desc.category}</td>
          <td>{desc.gender}</td>
          <td>{desc.size}</td>
          <td>{<img src={`data:image/png;base64,${desc.image}`} className="pic"
              />}</td>
          <td>{desc.status}</td>
        </tr>
        </>
      )
    })

    let id=4;             //vendor id through session
    //get by vendor Id
    const getbyid =() =>{
      // e.preventDefault();
      axios.get(`http://localhost:9090/apparel/getByVendorId/${id}`,{
      })
      .then((response)=>{
        console.log(response.data);
        setgetdata(response.data)
      }).catch((e)=>{
        console.log(e);
      })
    }



    return(
        <div>
          <div>
              <p align="center" id="button"> <Link to="/" >Go To Home</Link></p>
              </div>
        {/* <button type="submit" value="getAll" onClick={getAll} >View Your Collections</button>  */}
        
            <h1 align="center">List of dresses</h1>
            <table className="table align-middle mb-0 bg-white" >
                <thead className="bg-light">
                    <tr> <th>ApparelID</th> <th>Description </th> <th> Deposit Amount </th> <th> Rent Amount </th> <th> Category </th> <th> Gender </th> <th> Size </th> <th> Image</th> <th> Status</th></tr>
                </thead>
                <tbody>
                {arr}
                </tbody>
            </table>
            <div align="center">
            <button  type="submit" value="getbyid" onClick={getbyid} >Show all</button>
            </div>  

              
        </div>
    )
}