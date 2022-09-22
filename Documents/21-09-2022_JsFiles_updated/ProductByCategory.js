import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'


export default function ProductByCategory() {
	const genderF='f';
    const genderM='m';
    const category1="Sherwani";
    const category2="Tuxedo";
    const category3="Kurta";
    const category4="Lehenga";
    const category5="Gown"; 
    const category6="Western";
	//const {category} = useParams();
	let obj=useParams();
	let category=obj.category;
	console.log("hello"+""+category)
	const [getdata, setGetdata] = useState([]);

	useEffect(() =>{

		axios.get(`http://localhost:8080/category/searchByCategory/${category}`)
			.then(
				(productSpec) => {
					setGetdata(productSpec.data);
					console.log(productSpec.data)
			})
			.catch((error)=>{
				console.log(error)
			
			})
			
		}, []);

					
    return (

		<div>

			<React.Fragment>

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
                                    <Link to="/Cart" className="dropdown-toggle" ><i
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
					const id=product.apparelID
					console.log(id)
							return(
								<>
									<div className="col-md-4">
										<div className="product-item">
											<div className="product-thumb">
												{/* <img className="img-responsive" src={product.image} alt="product-img" /> */}
												<img className="img-responsive" src={`data:image/jpg;base64,${product.image}`} alt="product-img" />
												<div className="preview-meta">
												
												</div>
											</div>
											<div className="product-content">
												<h2>
														{product.description}
												</h2>
												<h3>
													<Link to={`/productdetails/${id}`} className="btn btn-main">
														SELECT
													</Link>
												</h3>
												{/* <p className="price" name="pcost">{product.id}</p> */}
											</div>
										</div>
									</div>
								</>
							)//product.apparelid
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

//BY PRATYUSH ...
	//const {category} = useParams();




	// let obj=useParams();
	// let category=obj.category;
	// console.log("hello"+""+category)
	// const [getdata, setGetdata] = useState([]);

	// useEffect(() =>{

	// 	axios.get(`http://localhost:8080/category/searchByCategory/${category}`)
	// 		.then(
	// 			(productSpec) => {
	// 				setGetdata(productSpec.data);
	// 				console.log(productSpec.data)
	// 		})
	// 		.catch((error)=>{
	// 			console.log(error)
			
	// 		})
			
	// 	}, []);

					
    // return (

	// 	<div>

	// 		<React.Fragment>

	// 			<section className="top-header">
	// 				<div className="container">
	// 					<div className="row">
	// 						<div className="col-md-4 col-xs-12 col-sm-4">
	// 							<div className="contact-number">
	// 								<Link to="/home"><img className='media-object' width="80px" height="80px" src='/assets/images/shop/cart/logo2.png' /></Link>
	// 							</div>
	// 						</div>
	// 						<div className="col-md-4 col-xs-12 col-sm-4">
	// 							{/* Site Logo */}
	// 							<div className="logo text-center">
	// 								<Link to="index.html">

	// 								</Link>
	// 							</div>
	// 						</div>
	// 						<div className="col-md-4 col-xs-12 col-sm-4">
	// 							{/* Cart */}
	// 							<ul className="top-menu text-right list-inline">
	// 								<li className="dropdown cart-nav dropdown-slide">
	// 									<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
	// 											className="tf-ion-android-cart"></i>Cart</Link>
	// 									<div className="dropdown-menu cart-dropdown">
	// 										{/* Cart Item */}
	// 										<div className="media">
	// 											<Link className="pull-left" to="#!">
	// 												<img className="media-object" src="assets/images/shop/cart/cart-1.jpg" alt="image" />
	// 											</Link>
	// 											<div className="media-body">
	// 												<h4 className="media-heading"><Link to="#!">Ladies Bag</Link></h4>
	// 												<div className="cart-price">
	// 													<span>1 x</span>
	// 													<span>1250.00</span>
	// 												</div>
	// 												<h5><strong>$1200</strong></h5>
	// 											</div>
	// 											<Link to="#!" className="remove"><i className="tf-ion-close"></i></Link>
	// 										</div>{/* / Cart Item */}
	// 										{/* Cart Item */}
	// 										<div className="media">
	// 											<Link className="pull-left" to="#!">
	// 												<img className="media-object" src="assets/images/shop/cart/cart-2.jpg" alt="image" />
	// 											</Link>
	// 											<div className="media-body">
	// 												<h4 className="media-heading"><Link to="#!">Ladies Bag</Link></h4>
	// 												<div className="cart-price">
	// 													<span>1 x</span>
	// 													<span>1250.00</span>
	// 												</div>
	// 												<h5><strong>$1200</strong></h5>
	// 											</div>
	// 											<Link to="#!" className="remove"><i className="tf-ion-close"></i></Link>
	// 										</div>{/* / Cart Item */}

	// 										<div className="cart-summary">
	// 											<span>Total</span>
	// 											<span className="total-price">$1799.00</span>
	// 										</div>
	// 										<ul className="text-center cart-buttons">
	// 											<li><Link to="cart.html" className="btn btn-small">View Cart</Link></li>
	// 											<li><Link to="checkout.html" className="btn btn-small btn-solid-border">Checkout</Link></li>
	// 										</ul>
	// 									</div>
	// 								</li>{/* / Cart */}

	// 								{/* Search */}
	// 								<li className="dropdown search dropdown-slide">
	// 									<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
	// 											className="tf-ion-ios-search-strong"></i> Search</Link>
	// 									<ul className="dropdown-menu search-dropdown">
	// 										<li>
	// 											<form action="post"><input type="search" className="form-control" placeholder="Search..."/></form>
	// 										</li>
	// 									</ul>
	// 								</li>{/* / Search */}

	// 								{/* Languages */}
	// 								<li className="commonSelect">
	// 									<select className="form-control">
	// 										<option>English</option>
	// 										<option>Japanese</option>
	// 										<option>Russian</option>
	// 										<option>French</option>
	// 									</select>
	// 								</li>{/* / Languages  */}

	// 							</ul>{/* / .nav .navbar-nav .navbar-right */}
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</section>{/* End Top Header Bar */}

	// 			<section className="menu">
	// 				<nav className="navbar navigation">
	// 					<div className="container">
	// 						<div className="navbar-header">
	// 							<h2 className="menu-title">Main Menu</h2>
	// 							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
	// 								aria-expanded="false" aria-controls="navbar">
	// 								<span className="sr-only">Toggle navigation</span>
	// 								<span className="icon-bar"></span>
	// 								<span className="icon-bar"></span>
	// 								<span className="icon-bar"></span>
	// 							</button>

	// 						</div>{/* / .navbar-header */}

	// 						{/* Navbar Links */}
	// 						<div id="navbar" className="navbar-collapse collapse text-center">
	// 							<ul className="nav navbar-nav">

	// 								{/* Home */}
	// 								<li className="dropdown ">
	// 									<Link to="/">Home</Link>
	// 								</li>
	// 								{/* / Home */}

	// 								{/* Elements */}
	// 								<li className="dropdown dropdown-slide">
	// 									<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
	// 										role="button" aria-haspopup="true" aria-expanded="false">Shop <span
	// 											className="tf-ion-ios-arrow-down"></span></Link>
	// 									<div className="dropdown-menu">
	// 										<div className="row">

	// 											{/* Basic */}
	// 											<div className="col-sm-12 col-xs-9">
	// 												<ul>
	// 													<li className="dropdown-header">Pages</li>
	// 													<li role="separator" className="divider"></li>
	// 													<li><Link to="/ProductCatalogue">Shop</Link></li>
	// 													<li><Link to="/Checkout">Checkout</Link></li>
	// 													<li><Link to="cart.html">Cart</Link></li>
	// 													<li><Link to="pricing.html">Pricing</Link></li>
	// 													<li><Link to="confirmation.html">Confirmation</Link></li>

	// 												</ul>
	// 											</div>

												

	// 										</div>{/* / .row */}
	// 									</div>{/* / .dropdown-menu */}
	// 								</li>{/* / Elements */}


	// 								{/* Pages */}
	// 								<li className="dropdown full-width dropdown-slide">
	// 									<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
	// 										role="button" aria-haspopup="true" aria-expanded="false">Catalogue <span
	// 											className="tf-ion-ios-arrow-down"></span></Link>
	// 									<div className="dropdown-menu">
	// 										<div className="row">

	// 											{/* For Him */}
	// 											<div className="col-sm-3 col-xs-12">
	// 												<ul>
	// 													<li className="dropdown-header">For Him</li>
	// 													<li role="separator" className="divider"></li>
	// 													<li><Link to="/products/sherwani">Sherwani</Link></li>
	// 													<li><Link to="/products/tuxedo">Tuxedo</Link></li>
	// 													<li><Link to="/products/kurta">Kurta Pyjama</Link></li>
	// 												</ul>
	// 											</div>
												
	// 											{/*For Her*/}
	// 											<div className="col-sm-3 col-xs-12">
	// 												<ul>
	// 													<li className="dropdown-header">For Her</li>
	// 													<li role="separator" className="divider"></li>
	// 													<li><Link to="/products/lehenga">Lehenga</Link></li>
	// 													<li><Link to="/products/gowns">Gowns</Link></li>
	// 													<li><Link to="/products/western">Western</Link></li>
	// 												</ul>
	// 											</div>

	// 										</div>{/* / .row */}
	// 									</div>{/* / .dropdown-menu */}
	// 								</li>{/* / Pages */}
									
	// 								<li className="dropdown full-width dropdown-slide">
	// 									<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
	// 										role="button" aria-haspopup="true" aria-expanded="false">Dashboard <span
	// 											className="tf-ion-ios-arrow-down"></span></Link>
	// 									<div className="dropdown-menu">
	// 										<div className="row">

												
	// 											{/* Contact */}
	// 											<div className="col-sm-3 col-xs-12">
	// 												<ul>
	// 													<li role="separator" className="divider"></li>
	// 													<li><Link to="order.html">Orders</Link></li>
	// 													<li><Link to="address.html">Address</Link></li>
	// 													<li><Link to="profile-details.html">Profile Details</Link></li>
	// 												</ul>
	// 											</div>

	// 										</div>{/* / .row */}
	// 									</div>{/* / .dropdown-menu */}
	// 								</li>{/* / Pages */}

	// 								<li className="dropdown full-width dropdown-slide">
	// 									<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
	// 										role="button" aria-haspopup="true" aria-expanded="false">Login Details <span
	// 											className="tf-ion-ios-arrow-down"></span></Link>
	// 									<div className="dropdown-menu">
	// 										<div className="row">

											

	// 											{/* Utility */}
	// 											<div className="col-sm-3 col-xs-12">
	// 												<ul>
	// 													<li role="separator" className="divider"></li>
	// 													<li><Link to="/login">Login Page</Link></li>
	// 													<li><Link to="/Signup">Signup Page</Link></li>
	// 													<li><Link to="/forgetPassword">Forget Password</Link></li>
	// 													<li><Link to="/VendorSignUp">VendorSignUp</Link></li>

	// 												</ul>
	// 											</div>

												
	// 										</div>{/* / .row */}
	// 									</div>{/* / .dropdown-menu */}
	// 								</li>{/* / Pages */}

	// 							</ul>{/* / .nav .navbar-nav */}

	// 						</div>
	// 						{/*/.navbar-collapse */}
	// 					</div>{/* / .container */}
						
	// 				</nav>
										
	// 			</section>

	// 			<section className="page-header">
	// 				<div className="container">
	// 					<div className="row">
	// 						<div className="col-md-12">
	// 							<div className="content">
	// 								<h1 className="page-name">Shop</h1>
	// 								<ol className="breadcrumb">
	// 									<li><Link to="index.html">Home</Link></li>
	// 									<li className="active">shop</li>
	// 								</ol>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</section>

	// 			<section className="products section">
	// 				<div className="container">
	// 					<div className="row">
						
	// 					{getdata.map((product)=>{
	// 				const id=product.apparelID
	// 				console.log(id)
	// 						return(
	// 							<>
	// 								<div className="col-md-4">
	// 									<div className="product-item">
	// 										<div className="product-thumb">
	// 											<img className="img-responsive" src={`data:image/png;base64,${product[0].image}`} alt="product-img" />
	// 											<div className="preview-meta">
												
	// 											</div>
	// 										</div>
	// 										<div className="product-content">
	// 											<h2>
	// 													{product.description}
	// 											</h2>
	// 											<h3>
	// 												<Link to={`/productdetails/${id}`} className="btn btn-main">
	// 													SELECT
	// 												</Link>
	// 											</h3>
	// 											{/* <p className="price" name="pcost">{product.id}</p> */}
	// 										</div>
	// 									</div>
	// 								</div>
	// 							</>
	// 						)//product.apparelid
	// 					})}	


	// 					</div>
	// 				</div>
	// 			</section>

	// 			<footer className="footer section text-center">
	// 				<div className="container">
	// 					<div className="row">
	// 						<div className="col-md-12">
	// 							<ul className="social-media">
	// 								<li>
	// 									<Link to="https://www.facebook.com/themefisher">
	// 										<i className="tf-ion-social-facebook"></i>
	// 									</Link>
	// 								</li>
	// 								<li>
	// 									<Link to="https://www.instagram.com/themefisher">
	// 										<i className="tf-ion-social-instagram"></i>
	// 									</Link>
	// 								</li>
	// 								<li>
	// 									<Link to="https://www.twitter.com/themefisher">
	// 										<i className="tf-ion-social-twitter"></i>
	// 									</Link>
	// 								</li>
	// 								<li>
	// 									<Link to="https://www.pinterest.com/themefisher/">
	// 										<i className="tf-ion-social-pinterest"></i>
	// 									</Link>
	// 								</li>
	// 							</ul>
	// 							<ul className="footer-menu text-uppercase">
	// 								<li>
	// 									<Link to="contact.html">CONTACT</Link>
	// 								</li>
	// 								<li>
	// 									<Link to="shop.html">SHOP</Link>
	// 								</li>
	// 								<li>
	// 									<Link to="pricing.html">Pricing</Link>
	// 								</li>
	// 								<li>
	// 									<Link to="contact.html">PRIVACY POLICY</Link>
	// 								</li>
	// 							</ul>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</footer>    

	// 		</React.Fragment>

	// 	</div>

    // )
}
