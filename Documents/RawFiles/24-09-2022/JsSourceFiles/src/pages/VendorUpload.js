import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

export default function VendorUpload(){


    const [dressinfo, setdress] = useState({});
    
    const handleRegister=(e)=>{
        const form = document.getElementById('form');
        const formdata = new FormData(form);
        postdatatoserver(formdata);
        e.preventDefault();
    }

    const postdatatoserver = (data) =>{
        axios.post(`http://localhost:8080/apparel/insertApparel`,data)    
        .then((response) => {
            console.log(response);
            console.log("success");
            alert("Registered Successfully !!")
        })
        .catch((error) => {
            console.log(error);
            console.log("error occuered");
        })
    }    

    return (

            <div>
                <section className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-12 col-sm-4">
                                <div className="contact-number">
                                    <Link to="/home"><img className='media-object' width="80px" height="80px" src='/assets/images/shop/cart/logo2.png' /></Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12 col-sm-4">
                                
                                <div className="logo text-center">
                                    <Link to="/home">
                                        <h2>FASHION ON RENT</h2>
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="col-md-4 col-xs-12 col-sm-4">
                                <ul className="top-menu text-right list-inline">
                                    <li className="dropdown cart-nav dropdown-slide">
                                        <Link to="/cart" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                                className="tf-ion-android-cart"></i>Cart</Link>
                                    </li>

                                    <li className="dropdown search dropdown-slide">
                                        <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                                className="tf-ion-ios-search-strong"></i> Search</Link>
                                        <ul className="dropdown-menu search-dropdown">
                                            <li>
                                                <form action="post"><input type="search" className="form-control" placeholder="Search..."/></form>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="commonSelect">
                                        <select className="form-control">
                                            <option>English</option>
                                            <option>Japanese</option>
                                            <option>Russian</option>
                                            <option>French</option>
                                        </select>
                                    </li>

                                </ul>
                            </div> */}
                        </div>
                    </div>
                </section>


                <section className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1 className="page-name">Upload Apparel</h1>
                                    <ol className="breadcrumb">
                                        <li className="active">Home</li>
                                        <li className="active">my account</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

{/* 
                <section className="signin-page account"> */}
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="block text-center my-3">
                                    <form className="text-left clearfix my-3" id="form" onSubmit={handleRegister}>
                                    <div className="form-group form__input">
                                            <label htmlFor="">Vendor ID</label>
                                            <input type="number" className="form-control my-3 "  placeholder="vendor id" name="vendorId" id="vendorId" />
                                        </div>
                                        <div className="form-group description">
                                            <label htmlFor="">Description</label>
                                            <input type="text" className="form-control my-3"  placeholder="Color and name of dress" name="description" id="description" />
                                        </div>

                                        <div className="form-group category">
                                            <label htmlFor="">Category</label>
                                            <input type="text" className="form-control my-3"  placeholder="kurta/sherwani/other apparels" name="cate" id="cate" />
                                        </div>
                                        
                                        <div className="form-group form__input">
                                            <label htmlFor="">Deposit Amount</label>
                                            <input type="number" className="form-control my-3"  placeholder="deposit amount" name="deposit_amount" id="deposit_amount" />
                                        </div>
                                        <div className="form-group form__input">
                                            <label htmlFor="">Rent Amount</label>
                                            <input type="number" className="form-control my-3"  placeholder="rent amount" name="rent_amount" id="rent_amount" />
                                        </div><br />

                                        <div className="size">
                                            <label className="form__label" for="size">Size &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <select name="size" id="size">
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                            </select>
                                        </div><br />

                                        <div className="form-check">
                                            
                                            <label className="form-check-label " for="flexRadioDefault1">
                                            <input className="form-check-input" type="radio" name="gender" id="gender"  value="M" />
                                                Male
                                            </label><br />
                                            
                                            <label className="form-check-label " for="flexRadioDefault2">
                                            <input className="form-check-input" type="radio" name="gender" id="gender"  value="F"  />
                                                Female
                                            </label>
                                        </div><br />
                                      

                                        <div className="mb-3">
                                            {/* <label for="formFileSm" className="form-label">Choose File</label> */}
                                            <input className="form-control form-control-sm" id="image" type="file" accept="image/*" name="image" />
                                        </div><br />

                                        
                                        <div className="upload">
                                            <input type="submit" name="myfile" value="Upload" className="btn btn-secondary" />
                                        </div>

                                        <div>
                                            <p align="center"> <Link to="/vendorhome" className="active">Go To Home</Link></p>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                {/* </section> */}


            </div>
    )
}