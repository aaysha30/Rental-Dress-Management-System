import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    const genderF='f';
    const genderM='m';
    const category1="Sherwani";
    const category2="Tuxedo";
    const category3="Kurta";
    const category4="Lehenga";
    const category5="Gown";
    const category6="Western";
  return (
    <React.Fragment>
       <section className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 col-sm-4">
                            <div className="contact-number">
                            <Link className="pull-left" to="/">
                            <img className="media-object" src="assets/images/fas.jpg" alt="image" />
                             </Link>
                                
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
                                        role="button" aria-haspopup="true" aria-expanded="false">Catalogue <span
                                            className="tf-ion-ios-arrow-down"></span></Link>
                                    <div className="dropdown-menu">
                                        <div className="row">
                                            {/* <!--  --> */}
                                            <div className="col-lg-6 col-md-6 mb-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Pages</li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><Link to="/Checkout">CheckOut</Link></li>
                                                    <li><Link to="/cartsession">Cart</Link></li>
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
                                                        <li><Link to="/signUp">SignUp Page</Link></li>
                                                        <li><Link to="/forgetPassword">Forget Password</Link></li>
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



<div className="hero-slider">
  <div className="slider-item th-fullpage hero-area" style={{"backgroundImage": 'url("assets/images/slider/JR2_7859_1512x.jpg")'}}>
    <div className="container">

      <div className="row">
        <div className="col-lg-8 text-center">
          {/* <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p> */}
          <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">!!Go on Fashion by your Choice!!</h1>
          <Link data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" to="shop.html">Shop Now</Link>
        </div>
      </div>
    </div>
  </div>
</div>

<section className="product-category section">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="title text-center">
					<h2>Product Category</h2>
				</div>
			</div>
			<div className="col-md-6">
				{/* image to be change afterwords */}
				<div className="category-box">
                   
					<Link to={`/catalogue/${genderF}`}>
						<img src="assets/images/shop/category/For_Her_720x.jpg" alt="" />
					</Link>	
				</div>

			</div>
			{/* image to be change afterwords */}
			<div className="col-md-6">
				<div className="category-box">
					<Link to={`/catalogue/${genderM}`}>
						<img src="assets/images/shop/category/For_Him_720x.jpg" alt="" />
					</Link>	
				</div>
			</div>
		</div>
	</div>
</section>

   

{/*Start Call To Action */}
{/* <section className="call-to-action bg-gray section">
	<div className="container">
		<div className="row">
			<div className="col-md-12 text-center">
				<div className="title">
					<h2>SUBSCRIBE TO NEWSLETTER</h2>
					<p>Fashion On Rent Welcomes you</p>
				</div>
				<div className="col-lg-6 col-md-offset-3">
				    <div className="input-group subscription-form">
				      <input type="text" className="form-control" placeholder="Enter Your Email Address"/>
				      <span className="input-group-btn">
				        <button className="btn btn-main" type="button">Subscribe Now!</button>
				      </span>
				    </div> //input-group
			  </div> //.col-lg-6

			</div>
		</div> 		End row
	</div>   	End container
</section>   End section */}

{/* <section className="section instagram-feed">
	<div className="container">
		
		<div className="row">
			<div className="col-12">
				<div className="instagram-slider" id="instafeed" data-accessToken="IGQVJYeUk4YWNIY1h4OWZANeS1wRHZARdjJ5QmdueXN2RFR6NF9iYUtfcGp1NmpxZA3RTbnU1MXpDNVBHTzZAMOFlxcGlkVHBKdjhqSnUybERhNWdQSE5hVmtXT013MEhOQVJJRGJBRURn"></div>
			</div>
		</div>
	</div>
</section> */}


{/* <footer className="footer section text-center">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
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
</footer> */}

   
    
    </React.Fragment>
  )
}
