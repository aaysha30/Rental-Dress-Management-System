import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux';


export default function Catalogue() {
	const genderF='f';
    const genderM='m';
    const category1="Sherwani";
    const category2="Tuxedo";
    const category3="Kurta";
    const category4="Lehenga";
    const category5="Gown"; 
    const category6="Western";
	const [getdata, setGetdata] = useState([]);
	const fname=useSelector(state=>{ return state.fname});
    const f=fname.toUpperCase()
	// const getAll = (e) => {
	// 	e.preventDefault();
	// 	axios.get("http://localhost:8080/farmer/farmer-list",{}).//method name
	// 	then((response) => {
	// 		console.log(response.data)
	// 	}).catch((e) => {
	// 		console.log(e);
	// 		alert("Farmer not added")})}
    let obj=useParams();
   let gender=obj.gender;
	useEffect(() =>{

		axios.get(`http://localhost:8080/category/searchByGender/${gender}`)
			.then(
				(result) => {
					//var showthedata = result.data;
					//setGetdata(showthedata.data)
                    setGetdata(result.data)
                    console.log(getdata);
			},)

    //     const requestOptions = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
          
    //     };
    //     fetch(`http://localhost:8080/category/searchByGender/${gender}`, requestOptions)
    //     .then(response => response.json()
      
		
    //     )
    //     .then(data =>{
    //          setGetdata(data);
    //     } ).then(()=>{console.log("Fetching data..");
    // console.log(getdata)
    // });
    //     console.log("Fetching data..");
	// 	console.log(getdata);
    //     console.log(getdata.length)	
    //     getdata.map((i)=>{
    //         console.log("Map")
    //         console.log(i.Description)});



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
                                    <Link to="/cartsession" className="dropdown-toggle" ><i
                                            className="tf-ion-android-cart"></i>Cart</Link>
                                </li>
                                {/* <!-- / Cart --> */}


                                {/* <!-- Search --> */}
                                <li className="dropdown search dropdown-slide">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                            className="tf-ion-ios-search-strong"></i> HELLO {f}</Link>
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
                                                        <li><Link to="/preorder">Orders</Link></li>
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
					
							return(
								<>
									<div className="col-md-4">
										<div className="product-item">
											<div className="product-thumb">
												{/* <span className="bage">Sale</span> */}
												{/* <img className="img-responsive" src={product.image} alt="product-img" /> */}
												<img className="img-responsive" src={`data:image/jpg;base64,${product.image}`} alt="product-img" />
												
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
												<h4><Link to="/productdetails" name="pname">{product.description}</Link></h4>
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
