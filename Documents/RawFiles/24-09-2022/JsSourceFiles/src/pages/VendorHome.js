import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";


export default function VendorHome(){


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
                                    <h1 className="page-name">Vendor Home</h1>
                                    <ol className="breadcrumb">
                                        <li className="active">Home</li>
                                        <li className="active">my account</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="user-dashboard page-wrapper">``
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="list-inline dashboard-menu text-center">
                                    <li><Link  to="/uploadApparel">Upload Apparel</Link></li>
                                    <li><Link  to="/collection">View Apparel Collection</Link></li>
                                    <li><Link  to="/prelogout" >Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

        </div>
    )
}