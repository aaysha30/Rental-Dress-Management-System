import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductDetails() {
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

<section class="single-product">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<ol class="breadcrumb">
					<li><a href="index.html">Home</a></li>
					<li><a href="shop.html">Shop</a></li>
					<li class="active">Single Product</li>
				</ol>
			</div>
			<div class="col-md-6">
				<ol class="product-pagination text-right">
					<li><a href="blog-left-sidebar.html"><i class="tf-ion-ios-arrow-left"></i> Next </a></li>
					<li><a href="blog-left-sidebar.html">Preview <i class="tf-ion-ios-arrow-right"></i></a></li>
				</ol>
			</div>
		</div>
		<div class="row mt-20">
			<div class="col-md-5">
				<div class="single-product-slider">
					<div id='carousel-custom' class='carousel slide' data-ride='carousel'>
						<div class='carousel-outer'>
							
							<div class='carousel-inner '>
								<div class='item active'>
									<img src='images/shop/single-products/product-1.jpg' alt='' data-zoom-image="images/shop/single-products/product-1.jpg" />
								</div>
								<div class='item'>
									<img src='images/shop/single-products/product-2.jpg' alt='' data-zoom-image="images/shop/single-products/product-2.jpg" />
								</div>
								
								<div class='item'>
									<img src='images/shop/single-products/product-3.jpg' alt='' data-zoom-image="images/shop/single-products/product-3.jpg" />
								</div>
								<div class='item'>
									<img src='images/shop/single-products/product-4.jpg' alt='' data-zoom-image="images/shop/single-products/product-4.jpg" />
								</div>
								<div class='item'>
									<img src='images/shop/single-products/product-5.jpg' alt='' data-zoom-image="images/shop/single-products/product-5.jpg" />
								</div>
								<div class='item'>
									<img src='images/shop/single-products/product-6.jpg' alt='' data-zoom-image="images/shop/single-products/product-6.jpg" />
								</div>
								
							</div>
							
							
							<a class='left carousel-control' href='#carousel-custom' data-slide='prev'>
								<i class="tf-ion-ios-arrow-left"></i>
							</a>
							<a class='right carousel-control' href='#carousel-custom' data-slide='next'>
								<i class="tf-ion-ios-arrow-right"></i>
							</a>
						</div>
						
					
						<ol class='carousel-indicators mCustomScrollbar meartlab'>
							<li data-target='#carousel-custom' data-slide-to='0' class='active'>
								<img src='images/shop/single-products/product-1.jpg' alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='1'>
								<img src='images/shop/single-products/product-2.jpg' alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='2'>
								<img src='images/shop/single-products/product-3.jpg' alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='3'>
								<img src='images/shop/single-products/product-4.jpg' alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='4'>
								<img src='images/shop/single-products/product-5.jpg' alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='5'>
								<img src='images/shop/single-products/product-6.jpg' alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='6'>
								<img src='images/shop/single-products/product-7.jpg' alt='' />
							</li>
						</ol>
					</div>
				</div>
			</div>
			<div class="col-md-7">
				<div class="single-product-details">
					<h2>Eclipse Crossbody</h2>
					<p class="product-price">$300</p>
					
					<p class="product-description mt-20">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.
					</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, velit, sunt temporibus, nulla accusamus similique sapiente tempora, at atque cumque assumenda minus asperiores est esse sequi dolore magnam. Debitis, explicabo.</p>
					<div class="color-swatches">
						<span>color:</span>
						<ul>
							<li>
								<a href="#!" class="swatch-violet"></a>
							</li>
							<li>
								<a href="#!" class="swatch-black"></a>
							</li>
							<li>
								<a href="#!" class="swatch-cream"></a>
							</li>
						</ul>
					</div>
					<div class="product-size">
						<span>Size:</span>
						<select class="form-control">
							<option>S</option>
							<option>M</option>
							<option>L</option>
							<option>XL</option>
						</select>
					</div>
					<div class="product-quantity">
						<span>Quantity:</span>
						<div class="product-quantity-slider">
							<input id="product-quantity" type="text" value="0" name="product-quantity"/>
						</div>
					</div>
					<div class="product-category">
						<span>Categories:</span>
						<ul>
							<li><a href="product-single.html">Products</a></li>
							<li><a href="product-single.html">Soap</a></li>
						</ul>
					</div>
					<a href="cart.html" class="btn btn-main mt-20">Add To Cart</a>
				</div>
			</div>
		</div>
		
	</div>
</section>





<div class="modal product-modal fade" id="product-modal">
	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		<i class="tf-ion-close"></i>
	</button>
  	<div class="modal-dialog " role="document">
    	<div class="modal-content">
	      	<div class="modal-body">
	        	<div class="row">
	        		<div class="col-md-8">
	        			<div class="modal-image">
		        			<img class="img-responsive" src="images/shop/products/modal-product.jpg" />
	        			</div>
	        		</div>
	        		<div class="col-md-3">
	        			<div class="product-short-details">
	        				<h2 class="product-title">GM Pendant, Basalt Grey</h2>
	        				<p class="product-price">$200</p>
	        				<p class="product-short-description">
	        					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
	        				</p>
	        				<a href="#!" class="btn btn-main">Add To Cart</a>
	        				<a href="#!" class="btn btn-transparent">View Product Details</a>
	        			</div>
	        		</div>
	        	</div>
	        </div>
    	</div>
  	</div>
</div>

{/* <footer class="footer section text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<ul class="social-media">
					<li>
						<a href="https://www.facebook.com/themefisher">
							<i class="tf-ion-social-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/themefisher">
							<i class="tf-ion-social-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.twitter.com/themefisher">
							<i class="tf-ion-social-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://www.pinterest.com/themefisher/">
							<i class="tf-ion-social-pinterest"></i>
						</a>
					</li>
				</ul>
				<ul class="footer-menu text-uppercase">
					<li>
						<a href="contact.html">CONTACT</a>
					</li>
					<li>
						<a href="shop.html">SHOP</a>
					</li>
					<li>
						<a href="pricing.html">Pricing</a>
					</li>
					<li>
						<a href="contact.html">PRIVACY POLICY</a>
					</li>
				</ul>
				<p class="copyright-text">Copyright &copy;2021, Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></p>
			</div>
		</div>
	</div>
</footer> */}
 
    
    
    <script src="plugins/jquery/dist/jquery.min.js"></script>
   
    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
   
    <script src="plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
   
    <script src="plugins/instafeed/instafeed.min.js"></script>
   
    <script src="plugins/ekko-lightbox/dist/ekko-lightbox.min.js"></script>
 
    <script src="plugins/syo-timer/build/jquery.syotimer.min.js"></script>

  
    <script src="plugins/slick/slick.min.js"></script>
    <script src="plugins/slick/slick-animation.min.js"></script>


    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script>
    <script type="text/javascript" src="plugins/google-map/gmap.js"></script>

  
    <script src="js/script.js"></script>
    </React.Fragment>
  )
}
