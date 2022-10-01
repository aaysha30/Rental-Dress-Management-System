import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function ProductCatalogue() {

	const [getdata, setGetdata] = useState([]);

	// const getAll = (e) => {
	// 	e.preventDefault();
	// 	axios.get("http://localhost:8080/farmer/farmer-list",{}).//method name
	// 	then((response) => {
	// 		console.log(response.data)
	// 	}).catch((e) => {
	// 		console.log(e);
	// 		alert("Farmer not added")})}

	useEffect(() =>{

		axios.get('http://localhost:8080/category/searchByCategory/Sherwani')
			.then(
				(productSpec) => {
					setGetdata(productSpec.data);
			},)
			
		}, []);

					
    return (

		<div>

			<React.Fragment>

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
									<Link to="/">
										{/* replace logo here */}
										<h2>Fashion On Rent</h2>
					
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
				</section>

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
										<Link to="/">Home</Link>
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
												<div className="col-sm-12 col-xs-9">
													<ul>
														<li className="dropdown-header">Pages</li>
														<li role="separator" className="divider"></li>
														<li><Link to="/ProductCatalogue">Shop</Link></li>
														<li><Link to="/Checkout">Checkout</Link></li>
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
														<li><Link to="/login">Login Page</Link></li>
														<li><Link to="/Signup">Signup Page</Link></li>
														<li><Link to="/forgetPassword">Forget Password</Link></li>
														<li><Link to="/VendorSignUp">VendorSignUp</Link></li>

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

				<section className="page-header">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="content">
									<h1 className="page-name">Shop</h1>
									<ol className="breadcrumb">
										<li><Link to="index.html">Home</Link></li>
										<li className="active">shop</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="products section">
					<div className="container">
						<div className="row">
						
						{getdata.map((product)=>{
					
							return(
								<>
									<div className="col-md-4">
										<div className="product-item">
											<div className="product-thumb">
												{/* <span className="bage">Sale</span> */}
												<img className="img-responsive" src={product.image} alt="product-img" />
												<div className="preview-meta">
													{/* <ul>
														<li>
															<span  data-toggle="modal" data-target="#product-modal">
																<i className="tf-ion-ios-search-strong"></i>
															</span>
														</li>
														<li>
															<Link to="#!" ><i className="tf-ion-ios-heart"></i></Link>
														</li>
														<li>
															<Link to="#!"><i className="tf-ion-android-cart"></i></Link>
														</li>
													</ul> */}
												</div>
											</div>
											<div className="product-content">
												<h4><Link to={`/productdetails/${id}`} name="pname">{product.description}</Link></h4>
												<p className="price" name="pcost">{product.rent_amount}</p>
											</div>
										</div>
									</div>
								</>
							)
						})}	


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

			</React.Fragment>

		</div>

    )
}
