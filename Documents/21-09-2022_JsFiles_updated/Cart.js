import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Cart() {

// //const cartList=useSelector((state1)=>{return console.log("Cart Page->Cart List :->"+state1.cartItems.map((e)=>{console.log(e.description)}))});
// //description
// //rental price
// //deposit
// //
// const cartList=useSelector((state1)=>{return console.log("Cart Page->Cart List :->"+state1.cartItems.map((e)=>{}))});
   
// return (
//     <React.Fragment>
        
//       <section className="top-header">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-4 col-xs-12 col-sm-4">
//                             <div className="contact-number">
//                                 <i className="tf-ion-ios-telephone"></i>
//                                 <span>+91-4534544534</span>
//                             </div>
//                         </div>
//                         <div className="col-md-4 col-xs-12 col-sm-4">
//                             {/* <!-- Site Logo --> */}
//                             <div className="logo text-center">
//                                 <Link to="/">
// 							<h1>Fashion On Rent</h1>

//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="col-md-4 col-xs-12 col-sm-4">
//                             {/* <!-- Cart --> */}
//                             <ul className="top-menu text-right list-inline">
//                                 <li className="dropdown cart-nav dropdown-slide">
//                                     <Link to="/Cart" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
//                                             className="tf-ion-android-cart"></i>Cart</Link>
//                                     <div className="dropdown-menu cart-dropdown">
//                                         {/* <!-- Cart Item --> */}
//                                         <div className="media">
//                                             <Link className="pull-left" to="#!">
//                                                 <img className="media-object" src="assets/images/shop/cart/cart-1.jpg" alt="image" />
//                                             </Link>
//                                             <div className="media-body">
//                                                 <h4 className="media-heading"><Link to="#!">Ladies Bag</Link></h4>
//                                                 <div className="cart-price">
//                                                     <span>1 x</span>
//                                                     <span>1250.00</span>
//                                                 </div>
//                                                 <h5><strong>$1200</strong></h5>
//                                             </div>
//                                             <Link to="#!" className="remove"><i className="tf-ion-close"></i></Link>
//                                         </div> 
//                                         {/* <!-- Cart Item --> */}
//                                         <div className="media">
//                                             <Link className="pull-left" to="#!">
//                                                 <img className="media-object" src="images/shop/cart/cart-2.jpg" alt="image" />
//                                             </Link>
//                                             <div className="media-body">
//                                                 <h4 className="media-heading"><Link to="#!">Ladies Bag</Link></h4>
//                                                 <div className="cart-price">
//                                                     <span>1 x</span>
//                                                     <span>1250.00</span>
//                                                 </div>
//                                                 <h5><strong>$1200</strong></h5>
//                                             </div>
//                                             <Link to="#!" className="remove"><i className="tf-ion-close"></i></Link>
//                                         </div>

//                                         <div className="cart-summary">
//                                             <span>Total</span>
//                                             <span className="total-price">$1799.00</span>
//                                         </div>
//                                         <ul className="text-center cart-buttons">
//                                             <li><Link to="/Cart" className="btn btn-small">View Cart</Link></li>
//                                             <li><Link to="/Checkout" className="btn btn-small btn-solid-border">Checkout</Link></li>
//                                         </ul>
//                                     </div>
//                                 </li>
//                                 {/* <!-- / Cart --> */}


//                                 {/* <!-- Search --> */}
//                                 <li className="dropdown search dropdown-slide">
//                                     <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
//                                             className="tf-ion-ios-search-strong"></i> Search</Link>
//                                     <ul className="dropdown-menu search-dropdown">
//                                         <li>
//                                             <form action="post"><input type="search" className="form-control" placeholder="Search..." /></form>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 {/* <!-- / Search --> */}

//                                 {/* <!-- Languages --> */}
//                                 <li className="commonSelect">
//                                     <select className="form-control">
//                                         <option>English</option>
//                                         <option>Japanese</option>
//                                         <option>Russian</option>
//                                         <option>French</option>
//                                     </select>
//                                 </li>
//                                 {/* <!-- / Languages --> */}

//                             </ul>
//                             {/* <!-- / .nav .navbar-nav .navbar-right --> */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* <!-- End Top Header Bar --> */}


//             {/* <!-- Main Menu Section --> */}
//              <section className="menu">
//                 <nav className="navbar navigation">
//                     <div className="container">
//                         <div className="navbar-header">
//                             <h2 className="menu-title">Main Menu</h2>
//                             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
//                                 aria-expanded="false" aria-controls="navbar">
//                                 <span className="sr-only">Toggle navigation</span>
//                                 <span className="icon-bar"></span>
//                                 <span className="icon-bar"></span>
//                                 <span className="icon-bar"></span>
//                             </button>
//                         </div>
//                         {/* <!-- / .navbar-header --> */}

//                         {/* <!-- Navbar Links --> */}
//                         <div id="navbar" className="navbar-collapse collapse text-center">
//                             <ul className="nav navbar-nav">

//                                 {/* <!-- Home --> */}
//                                 <li className="dropdown ">
//                                     <Link to="/">Home</Link>
//                                 </li>
//                                 {/* <!-- / Home --> */}

//                                 {/* <!-- Elements --> */}
//                                 <li className="dropdown dropdown-slide">
//                                     <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
//                                         role="button" aria-haspopup="true" aria-expanded="false">Shop <span
//                                             className="tf-ion-ios-arrow-down"></span></Link>
//                                     <div className="dropdown-menu">
//                                         <div className="row">

//                                             {/* <!-- Basic --> */}
//                                             <div className="col-lg-6 col-md-6 mb-sm-3">
//                                                 <ul>
//                                                     <li className="dropdown-header">Pages</li>
//                                                     <li role="separator" className="divider"></li>
//                                                     <li><Link to="/Checkout">Checkout</Link></li>
//                                                     <li><Link to="/Cart">Cart</Link></li>
                                                    

//                                                 </ul>
//                                             </div>

                                           
//                                         </div>
//                                         {/* <!-- / .row --> */}
//                                     </div>
//                                     {/* <!-- / .dropdown-menu --> */}
//                                 </li>
//                                 {/* <!-- / Elements --> */}


//                                 {/* <!-- Pages --> */}
//                                 <li className="dropdown dropdown-slide">
//                                     <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
//                                         role="button" aria-haspopup="true" aria-expanded="false">Catalogue <span
//                                             className="tf-ion-ios-arrow-down"></span></Link>
//                                     <div className="dropdown-menu">
//                                         <div className="row">
//                                             {/* <!-- For Him --> */}
//                                             <div className="col-lg-6 col-md-6 mb-sm-3">
//                                                 <ul>
//                                                     <li className="dropdown-header">For Him</li>
//                                                     <li role="separator" className="divider"></li>
//                                                     <li><Link to="/ProductCatalogue">Sherwani</Link></li>
//                                                     <li><Link to="/ProductCatalogue">Tuxedo</Link></li>
//                                                     <li><Link to="/ProductCatalogue">Kurta Pyjama</Link></li>
//                                                 </ul>
//                                             </div>
                                            
//                                             {/* <!--For Her--> */}
//                                             <div className="col-lg-6 col-md-6 mb-sm-3">
//                                                 <ul>
//                                                     <li className="dropdown-header">For Her</li>
//                                                     <li role="separator" className="divider"></li>
//                                                     <li><Link to="/ProductCatalogue">Lehenga</Link></li>
//                                                     <li><Link to="/ProductCatalogue">Gowns</Link></li>
//                                                     <li><Link to="/ProductCatalogue">Indo-Western</Link></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                         {/* <!-- / .row --> */}
//                                     </div>
//                                     {/* <!-- / .dropdown-menu --> */}
//                                 </li>
//                                 {/* <!-- / Pages --> */}

//                                 <li className="dropdown dropdown-slide">
//                                     <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
//                                     role="button" aria-haspopup="true" aria-expanded="false">Dashboard<span
//                                         className="tf-ion-ios-arrow-down"></span></Link>

//                                         <div className="dropdown-menu">
//                                             <div className="row">
                                                
//                                                 {/* <!-- Contact --> */}
//                                                 <div className="col-lg-12 col-md-6 mb-sm-3">
//                                                     <ul>
//                                                         <li><Link to="/Order">Orders</Link></li>
//                                                         <li><Link to="/Address">Address</Link></li>
//                                                         <li><Link to="/profileDetails">Profile Details</Link></li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- / .row --> */}
//                                         </div>
//                                         {/* <!-- / .dropdown-menu --> */}
//                                 </li>

//                                 <li className="dropdown dropdown-slide">
//                                     <Link to="#!" className="dropdown-toggle w-25 p-3" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
//                                     role="button" aria-haspopup="true" aria-expanded="false">Login Details<span
//                                         className="tf-ion-ios-arrow-down"></span></Link>
//                                         <div className="dropdown-menu">
//                                             <div className="row ">
//                                                 {/* <!-- Utility --> */}
//                                                 <div className="col-lg-12 col-md-6 mb-sm-3">
//                                                     <ul>
//                                                         <li><Link to="/Login">Login Page</Link></li>
//                                                         <li><Link to="/signUp">Signin Page</Link></li>
//                                                         <li><Link to="/ForgotPassword">Forgot Password</Link></li>
//                                                         <li><Link to="/VendorSignUp">VendorSignUp</Link></li>
//                                                         <li><Link to="/AdminLogin">AdminLogin</Link></li>

//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                             {/* <!-- / .row --> */}
//                                         </div>
//                                         {/* <!-- / .dropdown-menu --> */}
//                                 </li>
//                             </ul>
//                             {/* <!-- / .nav .navbar-nav --> */}
//                         </div>
//                         {/* <!--/.navbar-collapse --> */}
//                     </div>
//                     {/* <!-- / .container --> */}
//                 </nav>
//             </section> 

//      <section class="page-header">
// 	    <div class="container">
// 		<div class="row">
// 			<div class="col-md-12">
// 				<div class="content">
// 					<h1 class="page-name">Cart</h1>
// 					<ol class="breadcrumb">
// 						<li><a href="index.html">Home</a></li>
// 						<li class="active">cart</li>
// 					</ol>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>



// <div class="page-wrapper">
//   <div class="cart shopping">
//     <div class="container">
//       <div class="row">
//         <div class="col-md-8 col-md-offset-2">
//           <div class="block">
//             <div class="product-list">
//               <form method="post">
//                 <table class="table">
//                   <thead>
//                     <tr>
//                       <th class="">Item Name</th>
//                       <th class="">Item Price</th>
//                       <th class="">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr class="">
//                       <td class="">
//                         <div class="product-info">
//                           <img width="80" src="assets/theme/images/shop/cart/cart-1.jpg" alt="" />
//                           <a href="#!">Sunglass</a>
//                         </div>
//                       </td>
//                       <td class="">$200.00</td>
//                       <td class="">
//                         <a class="product-remove" href="#!">Remove</a>
//                       </td>
//                     </tr>
//                     <tr class="">
//                       <td class="">
//                         <div class="product-info">
//                           <img width="80" src="assets/theme/images/shop/cart/cart-2.jpg" alt="" />
//                           <a href="#!">Airspace</a>
//                         </div>
//                       </td>
//                       <td class="">$200.00</td>
//                       <td class="">
//                         <a class="product-remove" href="#!">Remove</a>
//                       </td>
//                     </tr>
//                     <tr class="">
//                       <td class="">
//                         <div class="product-info">
//                           <img width="80" src="assets/theme/images/shop/cart/cart-3.jpg" alt="" />
//                           <a href="#!">Bingo</a>
//                         </div>
//                       </td>
//                       <td class="">$200.00</td>
//                       <td class="">
//                         <a class="product-remove" href="#!">Remove</a>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <a href="checkout.html" class="btn btn-main pull-right">Checkout</a>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>



// <script src="plugins/jquery/dist/jquery.min.js"></script>
   
//    <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
  
//    <script src="plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
  
//    <script src="plugins/instafeed/instafeed.min.js"></script>
  
//    <script src="plugins/ekko-lightbox/dist/ekko-lightbox.min.js"></script>

//    <script src="plugins/syo-timer/build/jquery.syotimer.min.js"></script>

 
//    <script src="plugins/slick/slick.min.js"></script>
//    <script src="plugins/slick/slick-animation.min.js"></script>


//    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script>
//    <script type="text/javascript" src="plugins/google-map/gmap.js"></script>

 
//    <script src="js/script.js"></script>
//     </React.Fragment>
//   )//return closing
const cartList = useSelector((state) => {
    return state.cartItems.map((e) => {
        return {
            apparelId : e.apparelId,
            description : e.description,
            rent_amount : e.rent_amount,
            deposit_amount : e.deposit_amount,
            gender : e.gender,
            status : e.status,
        }
    });
});
// var cartList;

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
                        
                        <h1>Fashion On Rent</h1>
                    </div>
                    <div className="col-md-4 col-xs-12 col-sm-4">
                        {/* <!-- Cart --> */}
                        <ul className="top-menu text-right list-inline">
                            <li className="dropdown cart-nav dropdown-slide">
                                <Link to="/cart" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"><i
                                        className="tf-ion-android-cart"></i>Cart</Link>
                                
                            </li>


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
                                                <li><Link to="pricing.html">Pricing</Link></li>
                                                <li><Link to="confirmation.html">Confirmation</Link></li>
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
                                                <li><Link to="/products/sherwani">Sherwani</Link></li>
                                                <li><Link to="/products/tuxedo">Tuxedo</Link></li>
                                                <li><Link to="/products/kurta">Kurta Pyjama</Link></li>
                                            </ul>
                                        </div>
                                        
                                        {/* <!--For Her--> */}
                                        <div className="col-lg-6 col-md-6 mb-sm-3">
                                            <ul>
                                                <li className="dropdown-header">For Her</li>
                                                <li role="separator" className="divider"></li>
                                                <li><Link to="/products/lehenga">Lehenga</Link></li>
                                                <li><Link to="/products/gowns">Gowns</Link></li>
                                                <li><Link to="/products/western">Western</Link></li>
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
                                                    <li><Link to="order.html">Orders</Link></li>
                                                    <li><Link to="address.html">Address</Link></li>
                                                    <li><Link to="profile-details.html">Profile Details</Link></li>
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
                                                    <li><Link to="login.html">Login Page</Link></li>
                                                    <li><Link to="signin.html">Signin Page</Link></li>
                                                    <li><Link to="forget-password.html">Forget Password</Link></li>
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
                            <h1 className="page-name">Cart</h1>
                            <ol className="breadcrumb">
                                <li><Link to="index.html">Home</Link></li>
                                <li className="active">cart</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className="page-wrapper">
            <div className="cart shopping">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                    <div className="block">
                        <div className="product-list">
                        <form method="post">
                            <table className="table">
                            <thead>
                                <tr>
                                    <th className="">ApparelId</th>
                                    <th className="">Description</th>
                                    <th className="">Rent Amount</th>
                                    <th className="">Deposit Amount</th>
                                    <th className="">Gender</th>
                                    <th className="">Status</th>
                                    <th className="">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map((item) => {
                                    return (
                                        <tr className="">
                                            <td className="">{item.apparelId}</td>
                                            <td className="">{item.description}</td>
                                            <td className="">{item.rent_amount}</td>
                                            <td className="">{item.deposit_amount}</td>
                                            <td className="">{item.gender}</td>
                                            <td className="">{item.status}</td>
                                            <td className="">
                                                <button className="btn btn-danger btn-sm" to="#!">Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                            <Link to="/checkout" className="btn btn-main pull-right">Checkout</Link>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


        <footer className="footer section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <ul className="social-media">
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
                        </ul> */}
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

{/* <script src="plugins/jquery/dist/jquery.min.js"></script>

<script src="plugins/bootstrap/js/bootstrap.min.js"></script>

<script src="plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>

<script src="plugins/instafeed/instafeed.min.js"></script>

<script src="plugins/ekko-lightbox/dist/ekko-lightbox.min.js"></script>

<script src="plugins/syo-timer/build/jquery.syotimer.min.js"></script>


<script src="plugins/slick/slick.min.js"></script>
<script src="plugins/slick/slick-animation.min.js"></script>


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script>
<script type="text/javascript" src="plugins/google-map/gmap.js"></script>


<script src="js/script.js"></script> */}
    </React.Fragment>
)

}
