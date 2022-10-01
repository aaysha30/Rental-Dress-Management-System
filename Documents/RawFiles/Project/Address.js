import React from 'react'
import { Link } from 'react-router-dom'


export default function Address() {
  return (
    <div>

        <section className="top-header">
	<div className="container">
		<div className="row">
			<div className="col-md-4 col-xs-12 col-sm-4">
				<div className="contact-number">
					<i className="tf-ion-ios-telephone"></i>
					<span>0129- 12323-123123</span>
				</div>
			</div>
			<div className="col-md-4 col-xs-12 col-sm-4">
				<div className="logo text-center">
					<Link to="index.html">
						{/* <svg width="135px" height="29px" viewBox="0 0 155 29" version="1.1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink">
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-size="40"
								font-family="AustinBold, Austin" font-weight="bold">
								<g id="Group" transform="translate(-108.000000, -297.000000)" fill="#000000">
									<text id="AVIATO">
										<tspan x="108.94" y="325">AVIATO</tspan>
									</text>
								</g>
							</g>
						</svg> */}
					</Link>
				</div>
			</div>
			<div className="col-md-4 col-xs-12 col-sm-4">
				<ul className="top-menu text-right list-inline">
					<li className="dropdown cart-nav dropdown-slide">
						<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
								className="tf-ion-android-cart"></i>Cart</Link>
						<div className="dropdown-menu cart-dropdown">
							<div className="media">
								<Link className="pull-left" to="#!">
									<img className="media-object" src="images/shop/cart/cart-1.jpg" alt="image" />
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
								<li><Link to="cart.html" className="btn btn-small">View Cart</Link></li>
								<li><Link to="checkout.html" className="btn btn-small btn-solid-border">Checkout</Link></li>
							</ul>
						</div>

					</li>

					<li className="dropdown search dropdown-slide">
						<Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
								className="tf-ion-ios-search-strong"></i> Search</Link>
						<ul className="dropdown-menu search-dropdown">
							<li>
								<form action="post"><input type="search" className="form-control" placeholder="Search..." /></form>
							</li>
						</ul>
					</li>

					<li className="commonSelect">
						<select className="form-control">
							<option>EN</option>
							<option>DE</option>
							<option>FR</option>
							<option>ES</option>
						</select>
					</li>

				</ul>
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

        <section className="user-dashboard page-wrapper">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <ul className="list-inline dashboard-menu text-center">
                <li><Link to="dashboard.html">Dashboard</Link></li>
                <li><Link to="order.html">Orders</Link></li>
                <li><Link className="active" to="address.html">Address</Link></li>
                <li><Link to="profile-details.html">Profile Details</Link></li>
                </ul>
                <div className="dashboard-wrapper user-dashboard">
                <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Country</th>
                        <th className="col-md-2 col-sm-3">Phone</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Nokia</td>
                        <td>Adam Smith</td>
                        <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                        <td>Bangladesh</td>
                        <td>+884 5452 6452</td>
                        <td>
                            <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default"><i className="tf-pencil2" aria-hidden="true"></i></button>
                            <button type="button" className="btn btn-default"><i className="tf-ion-close" aria-hidden="true"></i></button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Samsung</td>
                        <td>Adam Smith</td>
                        <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                        <td>Bangladesh</td>
                        <td>+884 5452 6452</td>
                        <td>
                            <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default"><i className="tf-pencil2" aria-hidden="true"></i></button>
                            <button type="button" className="btn btn-default"><i className="tf-ion-close" aria-hidden="true"></i></button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Motorola</td>
                        <td>Adam Smith</td>
                        <td>9/4 C Babor Road, Mohammad Pur, Dhaka</td>
                        <td>Bangladesh</td>
                        <td>+884 5452 6452</td>
                        <td>
                            <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default"><i className="tf-pencil2" aria-hidden="true"></i></button>
                            <button type="button" className="btn btn-default"><i className="tf-ion-close" aria-hidden="true"></i></button>
                            </div>
                        </td>
                        </tr>
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
