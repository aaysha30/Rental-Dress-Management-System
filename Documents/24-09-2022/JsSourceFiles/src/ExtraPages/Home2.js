import React from 'react'
import {Link} from 'react-router-dom'

export default function Home2() {
   
  return (
    <React.Fragment>
        {/* <!-- Top Header Bar --> */}
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



<div className="hero-slider">
  <div className="slider-item th-fullpage hero-area" style={{"backgroundImage": 'url("assets/images/slider/JR2_7859_1512x.jpg")'}}>
    <div className="container">

      <div className="row">
        <div className="col-lg-8 text-center">
          {/* <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p> */}
          <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">!!Go on Fashion by your Choice!!</h1>
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
    </React.Fragment>
  )
}
