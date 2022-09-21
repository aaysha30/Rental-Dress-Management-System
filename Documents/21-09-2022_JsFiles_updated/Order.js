import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { customerid } from './atoms';
import {useAtom} from 'jotai';


export default function Order() {

    // const {customerid} = useParams();

    const [cid] = useAtom(customerid);

    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(()=>{
        console.log(cid);
        axios.get(`http://localhost:8080/getOrder/2`)//${cid}
                .then(
                    (orderSpec)=>{
                        setOrderDetails(orderSpec.data);
                })
                .catch((error)=>{
                        console.log(error);
                })

        // const requestOptions = {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
           
        //     };
        // fetch('http://localhost:8080/getOrder/2', requestOptions)
        // .then(response => response.json())
        // .then( (orderSpec)=>{
        //                     setOrderDetails(orderSpec.data);
        //             }
        //             )
        //
     },[])

    

    return (
        <div>

            { /* Start Top Header Bar */}
            <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="contact-number">
                                <Link to="/home"><img className='media-object' width="80px" height="80px" src='/assets/images/shop/cart/logo2.png' /></Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            {/* Site Logo */}
                            <div className="logo text-center">
                                <Link to="index.html">

                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            {/* Cart */}
                            <ul className="top-menu text-right list-inline">
                                <li className="dropdown cart-nav dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                            className="tf-ion-android-cart"></i>Cart</Link>
                                    <div className="dropdown-menu cart-dropdown">
                                        {/* Cart Item */}
                                        <div className="media">
                                            <Link className="pull-left" to="#!">
                                                <img className="media-object" src="assets/images/shop/cart/cart-1.jpg" alt="image" />
                                            </Link>
                                            <div className="media-body">
                                                <h4 className="media-heading"><Link to="#!">Ladies Bag</Link></h4>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                                <h5><strong>$1200</strong></h5>
                                            </div>
                                            <Link to="#!" className="remove"><i className="tf-ion-close"></i></Link>
                                        </div>{/* / Cart Item */}
                                        {/* Cart Item */}
                                        <div className="media">
                                            <Link className="pull-left" to="#!">
                                                <img className="media-object" src="assets/images/shop/cart/cart-2.jpg" alt="image" />
                                            </Link>
                                            <div className="media-body">
                                                <h4 className="media-heading"><Link to="#!">Ladies Bag</Link></h4>
                                                <div className="cart-price">
                                                    <span>1 x</span>
                                                    <span>1250.00</span>
                                                </div>
                                                <h5><strong>$1200</strong></h5>
                                            </div>
                                            <Link to="#!" className="remove"><i className="tf-ion-close"></i></Link>
                                        </div>{/* / Cart Item */}

                                        <div className="cart-summary">
                                            <span>Total</span>
                                            <span className="total-price">$1799.00</span>
                                        </div>
                                        <ul className="text-center cart-buttons">
                                            <li><Link to="cart.html" className="btn btn-small">View Cart</Link></li>
                                            <li><Link to="checkout.html" className="btn btn-small btn-solid-border">Checkout</Link></li>
                                        </ul>
                                    </div>
                                </li>{/* / Cart */}

                                {/* Search */}
                                <li className="dropdown search dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                            className="tf-ion-ios-search-strong"></i> Search</Link>
                                    <ul className="dropdown-menu search-dropdown">
                                        <li>
                                            <form action="post"><input type="search" className="form-control" placeholder="Search..."/></form>
                                        </li>
                                    </ul>
                                </li>{/* / Search */}

                                {/* Languages */}
                                <li className="commonSelect">
                                    <select className="form-control">
                                        <option>English</option>
                                        <option>Japanese</option>
                                        <option>Russian</option>
                                        <option>French</option>
                                    </select>
                                </li>{/* / Languages  */}

                            </ul>{/* / .nav .navbar-nav .navbar-right */}
                        </div>
                    </div>
                </div>
            </section>{/* End Top Header Bar */}


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

                        <div id="navbar" className="navbar-collapse collapse text-center">
                            <ul className="nav navbar-nav">

                                <li className="dropdown ">
                                    <Link to="index.html">Home</Link>
                                </li>


                                <li className="dropdown dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Shop <span
                                            className="tf-ion-ios-arrow-down"></span></Link>
                                    <div className="dropdown-menu">
                                        <div className="row">

                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="shop.html">Shop</Link></li>
                                                    <li><Link to="checkout.html">Checkout</Link></li>
                                                    <li><Link to="cart.html">Cart</Link></li>
                                                    <li><Link to="pricing.html">Pricing</Link></li>
                                                    <li><Link to="confirmation.html">Confirmation</Link></li>

                                                </ul>
                                            </div>

                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Layout</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="product-single.html">Product Details</Link></li>
                                                    <li><Link to="shop-sidebar.html">Shop With Sidebar</Link></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </li>


                                <li className="dropdown full-width dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Pages <span
                                            className="tf-ion-ios-arrow-down"></span></Link>
                                    <div className="dropdown-menu">
                                        <div className="row">

                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Introduction</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="contact.html">Contact Us</Link></li>
                                                    <li><Link to="about.html">About Us</Link></li>
                                                    <li><Link to="404.html">404 Page</Link></li>
                                                    <li><Link to="coming-soon.html">Coming Soon</Link></li>
                                                    <li><Link to="faq.html">FAQ</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Dashboard</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="dashboard.html">User Interface</Link></li>
                                                    <li><Link to="order.html">Orders</Link></li>
                                                    <li><Link to="address.html">Address</Link></li>
                                                    <li><Link to="profile-details.html">Profile Details</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-3 col-xs-12">
                                                <ul>
                                                    <li className="dropdown-header">Utility</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="login.html">Login Page</Link></li>
                                                    <li><Link to="signin.html">Signin Page</Link></li>
                                                    <li><Link to="forget-password.html">Forget Password</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-sm-3 col-xs-12">
                                                <Link to="shop.html">
                                                    <img className="img-responsive" src="images/shop/header-img.jpg" alt="menu image" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>



                                <li className="dropdown dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Blog <span
                                            className="tf-ion-ios-arrow-down"></span></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="blog-left-sidebar.html">Blog Left Sidebar</Link></li>
                                        <li><Link to="blog-right-sidebar.html">Blog Right Sidebar</Link></li>
                                        <li><Link to="blog-full-width.html">Blog Full Width</Link></li>
                                        <li><Link to="blog-grid.html">Blog 2 Columns</Link></li>
                                        <li><Link to="blog-single.html">Blog Single</Link></li>
                                    </ul>
                                </li>

                                <li className="dropdown dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Elements <span
                                            className="tf-ion-ios-arrow-down"></span></Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="typography.html">Typography</Link></li>
                                        <li><Link to="buttons.html">Buttons</Link></li>
                                        <li><Link to="alerts.html">Alerts</Link></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
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
                                <li><Link className="active" to={`/orders`}>Orders</Link></li>
                                <li><Link to={`/profiledetails`}>Profile Details</Link></li>
                            </ul>
                            <div className="dashboard-wrapper user-dashboard">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Date of Dispatch</th>
                                                <th>Date of Return</th>
                                                <th>Description</th>
                                                <th>Total Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetails.map((givenorder)=>{

                                                return(
                                                    
                                                    <tr>
                                                        <td>{givenorder.order_id}</td>
                                                        <td>{givenorder.date_of_dispatch}</td>
                                                        <td>{givenorder.date_of_return}</td>
                                                       
                                                         <td><span className="label label-primary">{givenorder.total_amount}</span></td> 
                                                         <td>{givenorder.status}</td>
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
