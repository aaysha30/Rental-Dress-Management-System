import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../store/cartSlice';



export default function ProductSingle() {
    //const {id} = useParams();
    const genderF='f';
    const genderM='m';
    const category1="Sherwani";
    const category2="Tuxedo";
    const category3="Kurta";
    const category4="Lehenga";
    const category5="Gown"; 
    const category6="Western";
const obj=useParams();
let [items,setItem]=useState([])
//let [purchases,setPurchases]=useState([])
const id=obj.aid;
console.log(id)
let [apid,setApId]=useState();
const uname = useSelector((state)=>{return state.uname});
 
 //console.log("ProductSingle Page->Cart List :->"+cartList)
 const[cartListItem,setCartListItem]=useState('');
    const[data, setData] = useState('');
    const dispatch=useDispatch();
const navigate=useNavigate();
// const state1 = useSelector((state)=>{return state});
    useEffect(()=>{
        axios.get(`http://localhost:8080/category/searchByApparelId/${id}`)
            .then((showDescOfSeparateProd)=>{
                setData(showDescOfSeparateProd.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    },[]);

    function Handler(data){
        console.log("Clicked");
       setApId(id);
       console.log(id);
        if(uname!=""){
           
          // dispatch({type:"addToCart",payload:{cart:cartListItem}})
        // dispatch({type:"addToCart",payload:{cart:apid}})
         dispatch(addToCart(data))
           
            alert("Added to cart");
            navigate("/")
        }
        else{
        navigate("/login")
        }
    }
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

                    <section className="single-product">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <ol className="breadcrumb">
                                        <li><Link to="index.html">Home</Link></li>
                                        <li><Link to="shop.html">Shop</Link></li>
                                        <li className="active">Single Product</li>
                                    </ol>
                                </div>

                                <div className="col-md-6">
                                    <ol className="product-pagination text-right">
                                        <li><Link to="blog-left-sidebar.html"><i className="tf-ion-ios-arrow-left"></i> Preview</Link></li>
                                        <li><Link to="blog-left-sidebar.html">Next <i className="tf-ion-ios-arrow-right"></i></Link></li>
                                    </ol>
                                </div>
                            </div>
                                            
                            <div className="row mt-20">
                                    <div className="col-md-5">
                                        <div className="single-product-slider ">
                                            <div id='carousel-custom' className='carousel slide' data-ride='carousel'>
                                                <div className='carousel-outer'>
                                                    <div className='carousel-inner '>
                                                        <div className='item active'>
                                                            {/* <img src={data.image} className='col-md-12' /> */}
                                                            <img className="img-responsive" src={`data:image/jpg;base64,${data.image}`} alt="product-img" />
                                                        </div>
                                                    </div>
                                                </div>
                                                   
                                                        {/* <ol className='carousel-indicators mCustomScrollbar meartlab'>
                                                            <li data-target='#carousel-custom' data-slide-to='0' className='active'>
                                                                {data.data && <img src={data.data.avatar} alt='' />}
                                                            </li>
                                                        </ol> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-7" style={{paddingLeft: '40px'}}>
            
                                        <div className="single-product-details">
            
                                            {/* <h1>{data.cate}</h1> */}
                                            <h3 className="product-category">{data.description}</h3>
                                          Rent Amount :  <h3 className="product-price">{data.rent_amount}</h3>
                                         Deposit Amount :   <h3 className="product-price">{data.deposit_amount}</h3>
                                        
                                         Size :   <h4 className="product-description mt-20">{data.size}</h4>
                                                    
                                            {/* <div className="product-quantity">
                                                <span><h4>Gender :- </h4></span>
                                                <div className="product-quantity-slider">
                                                    <h2>{data.gender}</h4>
                                                </div>
                                            </div> */}

                                            <div className="product-quantity">
                                                <span><h4>Status :</h4></span>
                                                    <h4>{data.status}</h4>
                                            </div>
                                            {/* <div className="product-category">
                                                <span><h4>Categories </h4></span>
                                            </div> */}
                                           {/* // <Link to="/cart" className="btn btn-main mt-20" >Add To Cart</Link> */}
                                           <div className="btn btn-main mt-20" onClick={()=>Handler(data)}>Add To Cart</div>
                                        </div>
            
                                    </div>
                            </div>       
                        

                        </div>
                    </section>

                    {/* <section className="products related-products section">
                        <div className="container">
                            <div className="row">
                                <div className="title text-center">
                                    <h2>Related Products</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <span className="bage">Sale</span>
                                            <img className="img-responsive" src="images/shop/products/product-5.jpg" alt="product-img" />
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="product-single.html">Reef Boardsport</Link></h4>
                                            <p className="price">$200</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img className="img-responsive" src="images/shop/products/product-1.jpg" alt="product-img" />
                                            
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="product-single.html">Rainbow Shoes</Link></h4>
                                            <p className="price">$200</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img className="img-responsive" src="images/shop/products/product-2.jpg" alt="product-img" />
                                            
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="product-single.html">Strayhorn SP</Link></h4>
                                            <p className="price">$230</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="product-thumb">
                                            <img className="img-responsive" src="images/shop/products/product-3.jpg" alt="product-img" />
                                            
                                        </div>
                                        <div className="product-content">
                                            <h4><Link to="product-single.html">Bradley Mid</Link></h4>
                                            <p className="price">$200</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section> */}

                    <div className="modal product-modal fade" id="product-modal">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="tf-ion-close"></i>
                        </button>
                        <div className="modal-dialog " role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="modal-image">
                                                <img className="img-responsive" src="images/shop/products/modal-product.jpg" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="product-short-details">
                                                <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                                                <p className="product-price">$200</p>
                                                <p className="product-short-description">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
                                                </p>
                                                <Link to="#!" className="btn btn-main">Add To Cart</Link>
                                                <Link to="#!" className="btn btn-transparent">View Product Details</Link>
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
