import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { uuid } from 'uuidv4';

export default function Checkout2(props) {
    //   const [dateOfDispatch,setDateOfDispatch]=useState();
    //   const [address,setAddress]=useState('');
    //   const[depositAmount,setDepositAmount]=useState()
    //   const[rentAmount,setRentAmount]=useState()
    //   const[totalAmount,setTotalAmount]=useState()
    //   const [totalRent,setTotalRent]=useState(0)
    //   const [totalDeposit,setTotalDeposit]=useState(0)
    //   const[dateOfReturn,setDateOfReturn]=useState();
    
    //   const a=0;
    //   const cartList = useSelector((state) => {
    //     return state.cartItems.map((e) => {
    //         return {
    //             apparelId : e.apparelId,
    //             description : e.description,
    //             rent_amount : e.rent_amount,
    //             deposit_amount : e.deposit_amount,
    //             gender : e.gender,
    //             status : e.status,
    //         }
    //     });
    // });

    // let finalDeposit=cartList.map((product)=>product.deposit_amount).reduce((prev,current)=>prev+current,0)
    //     console.log("Final Deposit Amount : "+finalDeposit)

    // let finalRent=cartList.map((product)=>product.rent_amount).reduce((prev,current)=>prev+current,0)
    // console.log("Final Rent Amount: "+finalRent)

    // const cid=useSelector(state=>{
    //   console.log("Checkout Page ->  cid: "+state.roleId)
    //   return state.roleId;
    // });
    // var total=finalDeposit+finalRent
    // console.log("Total Amount : "+total)

    // function HandlerDate(e){
    //       console.log("Handler")
    //       var dod=e.target.value
    //       setDateOfDispatch(dod);
    //       console.log("date of dispatch "+dod)
    //       var d=new Date(e.target.value)
    //       console.log(d)
    //       d.setDate(d.getDate()+4);
    //       console.log("dor :"+d)
    //       var m=d.getMonth()+1
    //       var str=d.getDate()+"-"+m+"-"+d.getFullYear()
    //     setDateOfReturn(str)
    //     console.log(dateOfReturn)
    // }

    // function HandlerAddress(e){
    //     console.log("Address : "+e.target.value)
    //     setAddress(e.target.value())
    // }

    // function HandlerPlaceOrder(e){

    //   e.preventDefault();
    //         axios.post('http://localhost:8080/orders/placeorder', {
    //             customer_id: cid,
    //             date_of_dispatch:dateOfDispatch,
    //             date_of_return:dateOfReturn,
    //             delievery_address:address,
    //             deposit_amount:depositAmount,
    //             rent_amount:rentAmount,
    //             status:"Available",
    //             total_amount:total
    //         })
    //          .then(result =>{
    //             alert("Order Placed !!")
    //         })
    //          .catch(error => {
    //             console.log(error);
    //         })
    // }
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
  const arr=[];
//   const listOfId=useSelector((state)=>{state.apparelId})
  const aidList = useSelector((state) => {
    return state.cartItems.map((e) => {
        // return arr.push(e.apparelID);
        console.log("cartList map : "+e.apparelID)
        arr.push(e.apparelID)
        return arr;
        });
});
console.log("aidList : -> ")
console.log(aidList.map((a)=>{console.log("My aid : "+a)}))

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
               var str1=d.getFullYear()+"-"+m+"-"+d.getDate()
                setDateOfReturn(str1)
                console.log(dateOfReturn)
            
  }
 
  function HandlerAddress(e){
    console.log("Address : "+e.target.value)
    setAddress(e.target.value())
  }
  function HandlerPlaceOrder(e){
  console.log("placeorder..")
     e.preventDefault();
    //  const unique_id = uuid();
    //  const small_id = unique_id.slice(0,2)
    //  console.log("small id : "+small_id)
 // console.log("uuid : "+small_id)
 
          axios.post('http://localhost:8080/placeorderdress', {
            order_id:187,
           
              date_of_dispatch:dateOfDispatch,
              date_of_return:dateOfReturn,
              delievery_address:address,
              deposit_amount:depositAmount,
              rent_amount:rentAmount,
              status:"Available",
              total_amount:total,
              customer_id:cid,
              aid:aidList
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
                              <Link to="/Cart"><i
                                      className="tf-ion-android-cart"></i>Cart</Link>
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

                          <li className="Login">
                              <Link to={"/Login"}>Login</Link>
                          </li>
                          {/* <!-- / Languages --> */}
                      </ul>
                      {/* <!-- / .nav .navbar-nav .navbar-right --> */}
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
                      {/* <!-- / .navbar-header --> */}

                      {/* <!-- Navbar Links --> */}
                      <div id="navbar" className="navbar-collapse collapse text-center">
                          <ul className="nav navbar-nav">

                              {/* <!-- Home --> */}
                              <li className="dropdown ">
                                  <Link to="/">Home</Link>
                              </li>

                              {/* <!-- Elements --> */}
                              <li className="dropdown dropdown-slide">
                                  <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                                      role="button" aria-haspopup="true" aria-expanded="false">Shop <span
                                          className="tf-ion-ios-arrow-down"></span></Link>
                                  <div className="dropdown-menu">
                                      <div className="row">

                                          {/* <!-- Basic --> */}
                                          <div className="col-lg-12 col-md-6 mb-sm-3">
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
                                                      <li><Link to="/profileDetails">Profile Details</Link></li>
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
                                  <h1 className="page-name">Checkout</h1>
                                  <ol className="breadcrumb">
                                      <li><Link to="/home">Home</Link></li>
                                      <li className="active">checkout</li>
                                  </ol>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <div className="page-wrapper">
            <div className="checkout shopping">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="block billing-details">
                       
                            <h4 className="widget-title">Billing Details</h4>
                            <form className="checkout-form">
                            <div className="form-group">
                                    <label htmlFor="dod">Date of disapatch</label>
                                    <input type="date" className="form-control" id="dod" placeholder="" onChange={HandlerDate}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="full_name">Full Name</label>
                                    <input type="text" className="form-control" id="full_name" placeholder=""/>
                                </div>
                         
                                <div className="form-group">
                                    <label htmlFor="user_address">Address</label>
                                    <input type="text" className="form-control" id="user_address" placeholder=""/>
                                </div>
                                <div className="checkout-country-code clearfix">
                                    <div className="form-group">
                                    <label htmlFor="user_post_code">Zip Code</label>
                                    <input type="text" className="form-control" id="user_post_code" name="zipcode" defaultvalue=""/>
                                    </div>
                                    <div className="form-group" >
                                    <label htmlFor="user_city">City</label>
                                    <input type="text" className="form-control" id="user_city" name="city" defaultvalue=""/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_country">Country</label>
                                    <input type="text" className="form-control" id="user_country" placeholder=""/>
                                </div>
                            </form>
                        </div>
                        
                        </div>

                        <div className="col-md-8">
                              <div className="block">
                                  <div className="product-list">
                                  <form method="post">
                                      <table className="table">
                                      <thead>
                                          <tr>
                                              <th className="">Dispatch Date</th>
                                              <th className="">Return Date</th>
                                              <th className="">Description</th>
                                              <th className="">Deposit Amount</th>
                                              <th className="">Rent Amount</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {cartList.map((e) => {
                                            console.log("dor : "+dateOfReturn)
                                              return (
                                              <div>
                                                  <tr className="">
                                                       {/* <td><input type="date" name="dod" onChange={HandlerDate}/></td> */}
                                                       <td className="">{dateOfDispatch}</td>
                                                      <td className="">{dateOfReturn}</td>
                                                      <td className="">{e.description}</td>
                                                      <td className="">{e.deposit_amount}</td>
                                                      <td className="">{e.rent_amount}</td>
                                                  </tr>
                                            {/* //     <ul>
                                            //    <li> {e.description}</li>
                                            //     </ul> */}
                                            </div>
                                              )
                                          })}
                                                  {/* <tr className="">
                                                      <td></td>
                                                      <td></td>
                                                      <td></td>
                                                 Total deposit:<td>{finalDeposit}</td>
                                                 Total Rent :<td>{finalRent}</td>
                                                 Total Amount :<td>{finalDeposit + finalRent}</td> */}
                                                      {/* <td><input type="submit" value="Place Order" className='btn btn-main' onClick={HandlerPlaceOrder}/></td> */}
                                                  {/* </tr> */}
                                      </tbody>
                                      </table>
                                     
                                      <Link to="/home" className="btn btn-main pull-right" onClick={HandlerPlaceOrder}>Place Order</Link>
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

          </div>

    ) 
}
