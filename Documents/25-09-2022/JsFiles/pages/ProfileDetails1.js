import React from 'react'
import { Link } from 'react-router-dom'


export default function ProfileDetails1() {
  return (
   <React.Fragment>
     <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="contact-number">
                                <i className="tf-ion-ios-telephone"></i>
                                <span>+91-4534544534</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            {/* <!-- Site Logo --> */}
                            <div className="logo text-center">
                                <Link to="/">
							<h1>Fashion On Rent</h1>

                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            {/* <!-- Cart --> */}
                            <ul className="top-menu text-right list-inline">
                                <li className="dropdown cart-nav dropdown-slide">
                                    <Link to="/Cart" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                            className="tf-ion-android-cart"></i>Cart</Link>
                                    <div className="dropdown-menu cart-dropdown">
                                        {/* <!-- Cart Item --> */}
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
                                        </div> 
                                        {/* <!-- Cart Item --> */}
                                        <div className="media">
                                            <Link className="pull-left" to="#!">
                                                <img className="media-object" src="images/shop/cart/cart-2.jpg" alt="image" />
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
                                        </div>

                                        <div className="cart-summary">
                                            <span>Total</span>
                                            <span className="total-price">$1799.00</span>
                                        </div>
                                        <ul className="text-center cart-buttons">
                                            <li><Link to="/Cart" className="btn btn-small">View Cart</Link></li>
                                            <li><Link to="/Checkout" className="btn btn-small btn-solid-border">Checkout</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                {/* <!-- / Cart --> */}


                                {/* <!-- Search --> */}
                                <li className="dropdown search dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                            className="tf-ion-ios-search-strong"></i> Search</Link>
                                    <ul className="dropdown-menu search-dropdown">
                                        <li>
                                            <form action="post"><input type="search" className="form-control" placeholder="Search..." /></form>
                                        </li>
                                    </ul>
                                </li>
                                {/* <!-- / Search --> */}

                                {/* <!-- Languages --> */}
                                <li className="commonSelect">
                                    <select className="form-control">
                                        <option>English</option>
                                        <option>Japanese</option>
                                        <option>Russian</option>
                                        <option>French</option>
                                    </select>
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

                                {/* <!-- Elements --> */}
                                <li className="dropdown dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                        role="button" aria-haspopup="true" aria-expanded="false">Shop <span
                                            className="tf-ion-ios-arrow-down"></span></Link>
                                    <div className="dropdown-menu">
                                        <div className="row">

                                            {/* <!-- Basic --> */}
                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="/Checkout">Checkout</Link></li>
                                                    <li><Link to="/Cart">Cart</Link></li>
                                                    

                                                </ul>
                                            </div>

                                           
                                        </div>
                                        {/* <!-- / .row --> */}
                                    </div>
                                    {/* <!-- / .dropdown-menu --> */}
                                </li>
                                {/* <!-- / Elements --> */}


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
                                                    <li><Link to="/ProductCatalogue">Sherwani</Link></li>
                                                    <li><Link to="/ProductCatalogue">Tuxedo</Link></li>
                                                    <li><Link to="/ProductCatalogue">Kurta Pyjama</Link></li>
                                                </ul>
                                            </div>
                                            
                                            {/* <!--For Her--> */}
                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">For Her</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="/ProductCatalogue">Lehenga</Link></li>
                                                    <li><Link to="/ProductCatalogue">Gowns</Link></li>
                                                    <li><Link to="/ProductCatalogue">Indo-Western</Link></li>
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
                                                        <li><Link to="/Address">Address</Link></li>
                                                        <li><Link to="/profileDetails">Profile Details</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- / .row --> */}
                                        </div>
                                        {/* <!-- / .dropdown-menu --> */}
                                </li>

                                <li className="dropdown dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle w-25 p-3" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                    role="button" aria-haspopup="true" aria-expanded="false">Login Details<span
                                        className="tf-ion-ios-arrow-down"></span></Link>
                                        <div className="dropdown-menu">
                                            <div className="row ">
                                                {/* <!-- Utility --> */}
                                                <div className="col-lg-12 col-md-6 mb-sm-3">
                                                    <ul>
                                                        <li><Link to="/Login">Login Page</Link></li>
                                                        <li><Link to="/signUp">Signin Page</Link></li>
                                                        <li><Link to="/ForgotPassword">Forgot Password</Link></li>
                                                        <li><Link to="/VendorSignUp">VendorSignUp</Link></li>
                                                        <li><Link to="/AdminLogin">AdminLogin</Link></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- / .row --> */}
                                        </div>
                                        {/* <!-- / .dropdown-menu --> */}
                                </li>
                            </ul>
                            {/* <!-- / .nav .navbar-nav --> */}
                        </div>
                        {/* <!--/.navbar-collapse --> */}
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

        <section className="user-dashboard page-wrapper">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <ul className="list-inline dashboard-menu text-center">
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li><Link to="/Order">Orders</Link></li>
                <li><Link to="/Address">Address</Link></li>
                <li><Link className="active"  to="profile-details.html">Profile Details</Link></li>
                </ul>
                <div className="dashboard-wrapper dashboard-user-profile">
                <div className="media">
                    <div className="pull-left text-center" to="#!">
                    <img className="media-object user-img" src="images/avater.jpg" alt="Image" />
                    <Link to="#x" className="btn btn-transparent mt-20">Change Image</Link>
                    </div>
                    <div className="media-body">
                    <ul className="user-profile-list">
                        <li><span>Full Name:</span>Johanna Doe</li>
                        <li><span>Country:</span>USA</li>
                        <li><span>Email:</span>mail@gmail.com</li>
                        <li><span>Phone:</span>+880123123</li>
                        <li><span>Date of Birth:</span>Dec , 22 ,1991</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      

   </React.Fragment>
  )
}
