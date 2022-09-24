import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { customerid } from './atoms';
import {useAtom} from 'jotai';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function ProfileDetails() {
    const genderF='f';
    const genderM='m';
    const category1="Sherwani";
    const category2="Tuxedo";
    const category3="Kurta";
    const category4="Lehenga";
    const category5="Gown"; 
    const category6="Western";
    const [cid] = useAtom(customerid);
console.log(cid);
    const [profileSpec, setProfileSpec] = useState({});
    const customer_id=useSelector((state)=>{return state.roleId})
    console.log("customer Id ->"+customer_id)
    useEffect(()=>{
        console.log(cid);
        axios.get(`http://localhost:8080/customer/profile/${customer_id}`)
                .then((profile)=>{
                    setProfileSpec(profile.data);
                })
                .catch((error)=>{
                    console.log(error);
                })
    }, []);
    
    return (
        <div>

<section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-4">
                        <div className=" Fashion Logo">
                            <Link className="pull-left" to="/">
                            <img className="media-object" src="assets/images/logo/fas.jpg" alt="image" />
                             </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            {/* <!-- Site Logo --> */}
                            <div className="logo text-center">
                                <Link to="/">
							<h1>FASHION ON RENT</h1>

                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            {/* <!-- Cart --> */}
                            <ul className="top-menu text-right list-inline">
                                <li className="dropdown cart-nav dropdown-slide">
                                    <Link to="/cartsession" className="dropdown-toggle" ><i
                                            className="tf-ion-android-cart"></i>Cart</Link>
                                </li>
                                {/* <!-- / Cart --> */}


                                {/* <!-- Search --> */}
                                <li className="dropdown search dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                            className="tf-ion-ios-search-strong"></i> HELLO</Link>
                                    <ul className="dropdown-menu search-dropdown">
                                        <li>
                                            <form action="post"><input type="search" className="form-control" placeholder="Search..." /></form>
                                        </li>
                                    </ul>
                                </li>
                                {/* <!-- / Search --> */}

                                {/* <!-- Languages --> */}
                                <li className="">
                                <Link to={"/login"}>Login</Link>
                                </li>
                                {/* <!-- / Languages --> */}

                            </ul>
                            {/* <!-- / .nav .navbar-nav .navbar-right --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Top Header Bar --> */}


            {/* <!-- Main Menu Section --> */}
             <section className="menu">
                <nav className="navbar navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <h2 className="menu-title">Main Menu</h2>
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        {/* <!-- / .navbar-header --> */}

                        {/* <!-- Navbar Links --> */}
                        <div id="navbar" className="navbar-collapse collapse text-center">
                            <ul className="nav navbar-nav">

                                {/* <!-- Home --> */}
                                <li className="dropdown ">
                                    <Link to="/">Home</Link>
                                </li>
                                {/* <!-- / Home --> */}

                                {/* <!-- Pages --> */}
                                <li className="dropdown dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Catalogue <span
                                            className="tf-ion-ios-arrow-down"></span></Link>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            {/* <!-- For Him --> */}
                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                            <ul>
														<li className="dropdown-header">For Him</li>
														<li role="separator" className="divider"></li>
														 
                                                        <li><Link to={`/productByCategory/${category1}`}>Sherwani</Link></li>
                                                    <li><Link to={`/productByCategory/${category2}`}>Tuxedo</Link></li>
                                                    <li><Link to={`/productByCategory/${category3}`}>Kurta Pyjama</Link></li>
                                               
													</ul>
                                            </div>
                                            
                                            {/* <!--For Her--> */}
                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                            <ul>
														<li className="dropdown-header">For Her</li>
														<li role="separator" className="divider"></li>
                                                    <li><Link to={`/productByCategory/${category4}`}>Lehenga</Link></li>
                                                    <li><Link to={`/productByCategory/${category5}`}>Gowns</Link></li>
                                                    <li><Link to={`/productByCategory/${category6}`}>Western</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- / .row --> */}
                                    </div>
                                    {/* <!-- / .dropdown-menu --> */}
                                </li>
                                {/* <!-- / Pages --> */}

                                <li className="dropdown dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                    role="button" aria-haspopup="true" aria-expanded="false">Dashboard<span
                                        className="tf-ion-ios-arrow-down"></span></Link>

                                        <div className="dropdown-menu">
                                            <div className="row">
                                                
                                                {/* <!-- Contact --> */}
                                                <div className="col-lg-12 col-md-6 mb-sm-3">
                                                    <ul>
                                                        <li><Link to="/Order">Orders</Link></li>
                                                        <li><Link to="/profileDetails">Profile Details</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- / .row --> */}
                                        </div>
                                        {/* <!-- / .dropdown-menu --> */}
                                </li>
                            </ul>
                            {/*  / .nav .navbar-nav */}
                        </div>
                        {/* /.navbar-collapse  */}
                    </div>
                    {/* <!-- / .container --> */}
                </nav>
            </section> 

            <section className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content">
                                <h1 className="page-name">Dashboard</h1>
                                <ol className="breadcrumb">
                                    <li><Link to="index.html">Home</Link></li>
                                    <li className="active">my account</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Buttons for sub category */}
            <section className="user-dashboard page-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <ul className="list-inline dashboard-menu text-center">
                    <li><Link to={`/Order`}>Orders</Link></li>
                    <li><Link className="active" to={`/profiledetails`}>Profile Details</Link></li>
                    </ul>
                    <div className="dashboard-wrapper dashboard-user-profile">
                    <div className="media">
                        
                            {/* <div className="pull-left text-center" to="#!"> */}
                                {/* <img className="media-object user-img" src={profileSpec.avatar} alt="Image" /> */}
                                 {/* <Link to="#x" className="btn btn-transparent mt-20">Change Image</Link> */}
                            {/* </div> */}
                            <div className="media-body">
                                <ul className="user-profile-list">
                                    <li><h2>First Name : {profileSpec.first_name}</h2></li>
                                    <li><h2>Last Name : {profileSpec.last_name}</h2></li>
                                    <li><h2>Mobile no : {profileSpec.mobile_no}</h2></li>
                                    <li><h2>EmailId : {profileSpec.emailId}</h2></li>
                                    <li><h2>Password : {profileSpec.password}</h2></li>
                                    <li><h2>Gender : {profileSpec.gender}</h2></li>
                                </ul>
                            </div>
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
