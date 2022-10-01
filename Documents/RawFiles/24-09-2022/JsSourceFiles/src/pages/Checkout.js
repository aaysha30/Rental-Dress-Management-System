import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'

export default function Checkout(props) {
  const [dateOfDispatch,setDateOfDispatch]=useState();
  const [address,setAddress]=useState('');
  const[depositAmount,setDepositAmount]=useState()
  const[rentAmount,setRentAmount]=useState()
  const[totalAmount,setTotalAmount]=useState()
  const [totalRent,setTotalRent]=useState(0)
  const [totalDeposit,setTotalDeposit]=useState(0)
  const[dateOfReturn,setDateOfReturn]=useState();
// console.log("Total Deposit in checkout :->"+props.totalDepositAmount)
  
    // const cartList1=useSelector((state1)=>{return state1.cartItems.map((e)=>{
    //     setTotalDeposit(totalDeposit+e.deposit_amount)
    //     console.log("Total deposit : "+totalDeposit)}
    //     )});
 
  const a=0;
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

let finalDeposit=cartList.map((product)=>product.deposit_amount).reduce((prev,current)=>prev+current,0)
    console.log("Final Deposit Amount : "+finalDeposit)

let finalRent=cartList.map((product)=>product.rent_amount).reduce((prev,current)=>prev+current,0)
console.log("Final Rent Amount: "+finalRent)
///var t=finalDeposit
//setTotalAmount(finalDeposit)
// console.log("Total Amount :"+totalAmount)
const cid=useSelector(state=>{
  console.log("Checkout Page ->  cid: "+state.roleId)
  return state.roleId
});
//console.log("Customer id : "+user)
var total=finalDeposit+finalRent
console.log("Total Amount : "+total)
const navigate=useNavigate()
function HandlerDate(e){
  console.log("Handler")
  var dod=e.target.value
  setDateOfDispatch(dod);
  console.log("date of dispatch "+dod)
  var d=new Date(e.target.value)
  console.log(d)
  d.setDate(d.getDate()+4);
  console.log("dor :"+d)
  var m=d.getMonth()+1
  var str=d.getDate()+"-"+m+"-"+d.getFullYear()
setDateOfReturn(str)
console.log(dateOfReturn)

}
function HandlerAddress(e){
  console.log("Address : "+e.target.value)
  setAddress(e.target.value())
}
function HandlerPlaceOrder(e){

   e.preventDefault();
        axios.post('http://localhost:8080/orders/placeorder', {
          customer_id:cid,
            date_of_dispatch:dateOfDispatch,
            date_of_return:dateOfReturn,
            delievery_address:address,
            deposit_amount:depositAmount,
            rent_amount:rentAmount,
            status:"Available",
            total_amount:total
           
        }) .then(result =>{
            alert("Order Placed !!")
            navigate('/')
        }
        )
        .catch(error => {
            console.log(error);
        })
}
   return (

    <div>
      <form>
   Date of dispatch : <input type="date" name="dod" onChange={HandlerDate}/><br/>
   Date of return :<p id="dor">{dateOfReturn}</p>
   Delivery Address :<input type="text" name="adr" onChange={HandlerAddress}/><br/>
   
   <ol>
   {cartList.map((e)=>{
    // setDepositAmount(e.depositAmount)
    // setRentAmount(e.rent_amount)
   return(
    <div>
    Id: <li>{e.ApparelID}</li>
    <li>{e.description}</li>
    <li>{e.deposit_amounts}</li>
    <li>{e.rent_amount}</li>
    </div>
    )
   })}
   
</ol>

<h1>Total Deposit : {finalDeposit}</h1>
<h1>Total Rent : {finalRent}</h1>
<h1>Total Amount : {finalDeposit+finalRent}</h1>
<br/>
<input type="submit" value="Place Order" onClick={HandlerPlaceOrder}/>
</form>
</div>
//    <React.Fragment>
//      <section className="top-header">
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

// <section className="page-header">
// 	<div className="container">
// 		<div className="row">
// 			<div className="col-md-12">
// 				<div className="content">
// 					<h1 className="page-name">Checkout</h1>
// 					<ol className="breadcrumb">
// 						<li><Link to="index.html">Home</Link></li>
// 						<li className="active">checkout</li>
// 					</ol>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </section>
// <div className="page-wrapper">
//    <div className="checkout shopping">
//       <div className="container">
//          <div className="row">
//             <div className="col-md-8">
//                <div className="block billing-details">
//                   <h4 className="widget-title">Billing Details</h4>
//                   <form className="checkout-form">
//                      <div className="form-group">
//                         <label htmlFor="full_name">Full Name</label>
//                         <input type="text" className="form-control" id="full_name" placeholder=""/>
//                      </div>
//                      <div className="form-group">
//                         <label htmlFor="user_address">Address</label>
//                         <input type="text" className="form-control" id="user_address" placeholder=""/>
//                      </div>
//                      <div className="checkout-country-code clearfix">
//                         <div className="form-group">
//                            <label htmlFor="user_post_code">Zip Code</label>
//                            <input type="text" className="form-control" id="user_post_code" name="zipcode" defaultvalue=""/>
//                         </div>
//                         <div className="form-group" >
//                            <label htmlFor="user_city">City</label>
//                            <input type="text" className="form-control" id="user_city" name="city" defaultvalue=""/>
//                         </div>
//                      </div>
//                      <div className="form-group">
//                         <label htmlFor="user_country">Country</label>
//                         <input type="text" className="form-control" id="user_country" placeholder=""/>
//                      </div>
//                   </form>
//                </div>
//                <div className="block">
//                   <h4 className="widget-title">Payment Method</h4>
//                   <p>Credit Cart Details (Secure payment)</p>
//                   <div className="checkout-product-details">
//                      <div className="payment">
//                         <div className="card-details">
//                            <form  className="checkout-form">
//                               <div className="form-group">
//                                  <label htmlFor="card-number">Card Number <span className="required">*</span></label>
//                                  <input  id="card-number" className="form-control"   type="tel" placeholder="•••• •••• •••• ••••"/>
//                               </div>
//                               <div className="form-group half-width padding-right">
//                                  <label htmlFor="card-expiry">Expiry (MM/YY) <span className="required">*</span></label>
//                                  <input id="card-expiry" className="form-control" type="tel" placeholder="MM / YY"/>
//                               </div>
//                               <div className="form-group half-width padding-left">
//                                  <label htmlFor="card-cvc">Card Code <span className="required">*</span></label>
//                                  <input id="card-cvc" className="form-control"  type="tel" maxLength="4" placeholder="CVC" />
//                               </div>
//                               <Link to="confirmation.html" className="btn btn-main mt-20">Place Order</Link>
//                            </form>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//             </div>
//             <div className="col-md-4">
//                <div className="product-checkout-details">
//                   <div className="block">
//                      <h4 className="widget-title">Order Summary</h4>
//                      <div className="media product-card">
//                         <Link className="pull-left" to="product-single.html">
//                            <img className="media-object" src="images/shop/cart/cart-1.jpg" alt="Image" />
//                         </Link>
//                         <div className="media-body">
//                            <h4 className="media-heading"><Link to="product-single.html">Ambassador Heritage 1921</Link></h4>
//                            <p className="price">1 x $249</p>
//                            <span className="remove" >Remove</span>
//                         </div>
//                      </div>
//                      <div className="discount-code">
//                         <p>Have a discount ? <Link data-toggle="modal" data-target="#coupon-modal" to="#!">enter it here</Link></p>
//                      </div>
//                      <ul className="summary-prices">
//                         <li>
//                            <span>Subtotal:</span>
//                            <span className="price">$190</span>
//                         </li>
//                         <li>
//                            <span>Shipping:</span>
//                            <span>Free</span>
//                         </li>
//                      </ul>
//                      <div className="summary-total">
//                         <span>Total</span>
//                         <span>$250</span>
//                      </div>
//                      <div className="verified-icon">
//                         <img src="images/shop/verified.png"/>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    </div>
// </div>
//    {/* Modal */}
//    <div className="modal fade" id="coupon-modal" tabIndex="-1" role="dialog">
//       <div className="modal-dialog" role="document">
//          <div className="modal-content">
//             <div className="modal-body">
//                <form>
//                   <div className="form-group">
//                      <input className="form-control" type="text" placeholder="Enter Coupon Code"/>
//                   </div>
//                   <button type="submit" className="btn btn-main">Apply Coupon</button>
//                </form>
//             </div>
//          </div>
//       </div>
//    </div>
   
// <footer className="footer section text-center">
// 	<div className="container">
// 		<div className="row">
// 			<div className="col-md-12">
// 				<ul className="social-media">
// 					<li>
// 						<Link to="https://www.facebook.com/themefisher">
// 							<i className="tf-ion-social-facebook"></i>
// 						</Link>
// 					</li>
// 					<li>
// 						<Link to="https://www.instagram.com/themefisher">
// 							<i className="tf-ion-social-instagram"></i>
// 						</Link>
// 					</li>
// 					<li>
// 						<Link to="https://www.twitter.com/themefisher">
// 							<i className="tf-ion-social-twitter"></i>
// 						</Link>
// 					</li>
// 					<li>
// 						<Link to="https://www.pinterest.com/themefisher/">
// 							<i className="tf-ion-social-pinterest"></i>
// 						</Link>
// 					</li>
// 				</ul>
// 				<ul className="footer-menu text-uppercase">
// 					<li>
// 						<Link to="contact.html">CONTACT</Link>
// 					</li>
// 					<li>
// 						<Link to="shop.html">SHOP</Link>
// 					</li>
// 					<li>
// 						<Link to="pricing.html">Pricing</Link>
// 					</li>
// 					<li>
// 						<Link to="contact.html">PRIVACY POLICY</Link>
// 					</li>
// 				</ul>
// 				<p className="copyright-text">Copyright &copy;2021, Designed &amp; Developed by <Link to="https://themefisher.com/">Themefisher</Link></p>
// 			</div>
// 		</div>
// 	</div>
// </footer>
//     {/* 
//     Essential Scripts
//     =====================================*/}
    
//     {/* Main jQuery */}
//     <script src="plugins/jquery/dist/jquery.min.js"></script>
//     {/* Bootstrap 3.1 */}
//     <script src="plugins/bootstrap/js/bootstrap.min.js"></script>
//     {/* Bootstrap Touchpin */}
//     <script src="plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
//     {/* Instagram Feed Js */}
//     <script src="plugins/instafeed/instafeed.min.js"></script>
//     {/* Video Lightbox Plugin */}
//     <script src="plugins/ekko-lightbox/dist/ekko-lightbox.min.js"></script>
//     {/* Count Down Js */}
//     <script src="plugins/syo-timer/build/jquery.syotimer.min.js"></script>

//     {/* slick Carousel */}
//     <script src="plugins/slick/slick.min.js"></script>
//     <script src="plugins/slick/slick-animation.min.js"></script>

//     {/* Google Mapl */}
//     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script>
//     <script type="text/javascript" src="plugins/google-map/gmap.js"></script>

//     {/* Main Js File */}
//     <script src="js/script.js"></script>
    
//    </React.Fragment>

  )
}
