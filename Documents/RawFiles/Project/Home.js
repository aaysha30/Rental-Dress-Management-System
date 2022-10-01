import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <React.Fragment>
       { /* Start Top Header Bar */}
<section className="top-header">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-xs-12 col-sm-4">
				<div className="contact-number">
					<i className="tf-ion-ios-telephone"></i>
					<span>0129-12323-123123</span>
				</div>
			</div>
			<div className="col-md-4 col-xs-12 col-sm-4">
				{/* Site Logo */}
				<div className="logo text-center">
					<Link to="index.html">
						{/* replace logo here */}
						{/* <svg width="135px" height="29px" viewBox="0 0 155 29" version="1.1" xmlns="http://www.w3.org/2000/svg"

                                xlinkto="http://www.w3.org/1999/xlink">
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-size="40"
								font-family="AustinBold, Austin" font-weight="bold">
								<g id="Group" transform="translate(-108.000000, -297.000000)" fill="#000000">
									<h2>
										<label for="">Fashion On Rent</label>
									</h2>
								</g>
							</g>
						</svg> */}
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


{/* Main Menu Section */}
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

			</div>{/* / .navbar-header */}

			{/* Navbar Links */}
			<div id="navbar" className="navbar-collapse collapse text-center">
				<ul className="nav navbar-nav">

					{/* Home */}
					<li className="dropdown ">
						<Link to="index.html">Home</Link>
					</li>
                    {/* / Home */}

					{/* Elements */}
					<li className="dropdown dropdown-slide">
						<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Shop <span
								className="tf-ion-ios-arrow-down"></span></Link>
						<div className="dropdown-menu">
							<div className="row">

								{/* Basic */}
								<div className="col-lg-6 col-md-6 mb-sm-3">
									<ul>
										<li className="dropdown-header">Pages</li>
										<li role="separator" className="divider"></li>
										<li><Link to="ProductCatalogue.js">Shop</Link></li>
										<li><Link to="checkout.html">Checkout</Link></li>
										<li><Link to="cart.html">Cart</Link></li>
										<li><Link to="pricing.html">Pricing</Link></li>
										<li><Link to="confirmation.html">Confirmation</Link></li>

									</ul>
								</div>

								

							</div>{/* / .row */}
						</div>{/* / .dropdown-menu */}
					</li>{/* / Elements */}


					{/* Pages */}
					<li className="dropdown full-width dropdown-slide">
						<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Catalogue <span
								className="tf-ion-ios-arrow-down"></span></Link>
						<div className="dropdown-menu">
							<div className="row">

								{/* For Him */}
								<div className="col-sm-3 col-xs-12">
									<ul>
										<li className="dropdown-header">For Him</li>
										<li role="separator" className="divider"></li>
										<li><Link to="contact.html">Sherwani</Link></li>
										<li><Link to="about.html">Tuxedo</Link></li>
										<li><Link to="404.html">Kurta Pyjama</Link></li>
									</ul>
								</div>
								
								{/*For Her*/}
								<div className="col-sm-3 col-xs-12">
									<ul>
										<li className="dropdown-header">For Her</li>
										<li role="separator" className="divider"></li>
										<li><Link to="contact.html">Lehenga</Link></li>
										<li><Link to="about.html">Gowns</Link></li>
										<li><Link to="404.html">Indo-Western</Link></li>
									</ul>
								</div>

							</div>{/* / .row */}
						</div>{/* / .dropdown-menu */}
					</li>{/* / Pages */}
                    
                    <li className="dropdown full-width dropdown-slide">
						<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Dashboard <span
								className="tf-ion-ios-arrow-down"></span></Link>
						<div className="dropdown-menu">
							<div className="row">

								
								{/* Contact */}
								<div className="col-sm-3 col-xs-12">
									<ul>
										<li role="separator" className="divider"></li>
										<li><Link to="order.html">Orders</Link></li>
										<li><Link to="address.html">Address</Link></li>
										<li><Link to="profile-details.html">Profile Details</Link></li>
									</ul>
								</div>

							</div>{/* / .row */}
						</div>{/* / .dropdown-menu */}
					</li>{/* / Pages */}
                    <li className="dropdown full-width dropdown-slide">
						<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
							role="button" aria-haspopup="true" aria-expanded="false">Login Details <span
								className="tf-ion-ios-arrow-down"></span></Link>
						<div className="dropdown-menu">
							<div className="row">

							

								{/* Utility */}
								<div className="col-sm-3 col-xs-12">
									<ul>
										<li role="separator" className="divider"></li>
										<li><Link to="login.html">Login Page</Link></li>
										<li><Link to="signin.html">Signin Page</Link></li>
										<li><Link to="forget-password.html">Forget Password</Link></li>
									</ul>
								</div>

								
							</div>{/* / .row */}
						</div>{/* / .dropdown-menu */}
					</li>{/* / Pages */}

				</ul>{/* / .nav .navbar-nav */}

			</div>
			{/*/.navbar-collapse */}
		</div>{/* / .container */}
        
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
					<Link to="#!">
						<img src="assets/images/shop/category/For_Her_720x.jpg" alt="" />
					</Link>	
				</div>

			</div>
			{/* image to be change afterwords */}
			<div className="col-md-6">
				<div className="category-box">
					<Link to="#!">
						<img src="assets/images/shop/category/For_Him_720x.jpg" alt="" />
					</Link>	
				</div>
			</div>
		</div>
	</div>
</section>

   

{/*Start Call To Action */}
<section className="call-to-action bg-gray section">
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
				    </div>{/* /input-group */}
			  </div>{/* /.col-lg-6 */}

			</div>
		</div> 		{/* End row */}
	</div>   	{/* End container */}
</section>   {/* End section */}

<section className="section instagram-feed">
	<div className="container">
		{/* <div className="row">
		</div> */}
		<div className="row">
			<div className="col-12">
				<div className="instagram-slider" id="instafeed" data-accessToken="IGQVJYeUk4YWNIY1h4OWZANeS1wRHZARdjJ5QmdueXN2RFR6NF9iYUtfcGp1NmpxZA3RTbnU1MXpDNVBHTzZAMOFlxcGlkVHBKdjhqSnUybERhNWdQSE5hVmtXT013MEhOQVJJRGJBRURn"></div>
			</div>
		</div>
	</div>
</section>


<footer className="footer section text-center">
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
</footer>

    {/* 
    Essential Scripts*/
    
    /* Main jQuery */
    /* <script src="plugins/jquery/dist/jquery.min.js"></script> */
    /* Bootstrap 3.1 */
    /* <script src="plugins/bootstrap/js/bootstrap.min.js"></script> */
    /* Bootstrap Touchpin */
    /* <script src="plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script> */
    /* Instagram Feed Js */
    /* <script src="plugins/instafeed/instafeed.min.js"></script> */
    /* Video Lightbox Plugin */
    /* <script src="plugins/ekko-lightbox/dist/ekko-lightbox.min.js"></script> */
    /* Count Down Js */
    /* <script src="plugins/syo-timer/build/jquery.syotimer.min.js"></script> */

    /* slick Carousel */
    /* <script src="plugins/slick/slick.min.js"></script> */
    /* <script src="plugins/slick/slick-animation.min.js"></script> */

    /* Google Mapl */
    /* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script> */
    /* <script type="text/javascript" src="plugins/google-map/gmap.js"></script> */

    /* Main Js File */
    /* <script src="js/script.js"></script> */}
    
    </React.Fragment>
  )
}
