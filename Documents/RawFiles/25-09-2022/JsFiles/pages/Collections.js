import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';    

export default function Collections(){

    const [getdata,setgetdata] = useState([]);
    const vendor_id=useSelector((state)=>{return state.roleId})
    console.log("Vendor id->"+vendor_id)
    //let id=4;

    useEffect(()=>{
        axios.get(`http://localhost:8080/apparel/getByVendorId/${vendor_id}`,{
        })
        .then((response)=>{
          console.log(response.data);
          setgetdata(response.data)
        }).catch((e)=>{
          console.log(e);
        })
    },[])


    return(

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
                                    <h1 className="page-name">Collections</h1>
                                    <ol className="breadcrumb">
                                        <li className="active">Home</li>
                                        <li className="active">my account</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="user-dashboard page-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                
                                <div className="dashboard-wrapper user-dashboard">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>ApparelID</th>
                                                    <th>Description</th>
                                                    <th>Deposit Amount</th>
                                                    <th>Rent Amount</th>
                                                    <th>Category</th>
                                                    <th>Gender</th>
                                                    <th>Status</th>
                                                    <th>Images</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {getdata.map((givenorder)=>{

                                                    return(
                                                        //1 min
                                                        <tr>
                                                            <td>{givenorder.apparelID}</td>
                                                            <td>{givenorder.description}</td>
                                                            <td>{givenorder.deposit_amount}</td>
                                                            <td>{givenorder.rent_amount}</td>
                                                            <td>{givenorder.cate}</td>
                                                            <td>{givenorder.gender}</td>
                                                            <td>{givenorder.status}</td>
                                                            <td><img className='media-object' width="80px" height="80px" src={`data:image/png;base64,${givenorder.image}`} /></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="social-media">
                                    <li>
                                        <Link to="https://www.facebook.com/themefisher">
                                            <i className="tf-ion-social-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/themefisher">
                                            <i className="tf-ion-social-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.twitter.com/themefisher">
                                            <i className="tf-ion-social-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.pinterest.com/themefisher/">
                                            <i className="tf-ion-social-pinterest"></i>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="footer-menu text-uppercase">
                                    <li>
                                        <Link to="contact.html">CONTACT</Link>
                                    </li>
                                    <li>
                                        <Link to="shop.html">SHOP</Link>
                                    </li>
                                    <li>
                                        <Link to="pricing.html">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="contact.html">PRIVACY POLICY</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
    )
}

// http://localhost:9090/apparel/getByVendorId/${id}