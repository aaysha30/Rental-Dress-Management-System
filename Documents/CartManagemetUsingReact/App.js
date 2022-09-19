//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home';

import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VendorSignup from './pages/VendorSignUp';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Address from './pages/Address';


import AdminLogin from './pages/AdminLogin';
import { Provider } from 'react-redux';
//import store from './store/reducer';
import CartSession from './CartSession';
import Catalogue from './Catalogue';
import ProductByCategory from './pages/ProductByCategory';
import ProductSingle from './pages/ProductSingle';
import ProfileDetails from './pages/ProfileDetails';
import Order from './pages/Order';

import cartSlice from './store/cartSlice';
import { createStore } from 'redux';
const store=createStore(cartSlice)
function App() {
  return (
    <Router>
    <div className="App">
      {/* <Home></Home> */}
      {/* <ProfileDetails></ProfileDetails> */}
      {/* <ProductDetails></ProductDetails> */}
      <Provider store={store}>
      <Routes>
      <Route exact path='/' element={<Home></Home>}/>
      <Route exact path='/productByCategory/:category' element={<ProductByCategory></ProductByCategory>}/>
      <Route exact path='/ProductDetails' element={<ProductDetails></ProductDetails>}/>
      <Route exact path='/Checkout' element={<Checkout></Checkout>}/>
      <Route exact path='/login' element={<Login></Login>}/>
      <Route exact path='/Signup' element={<Signup></Signup>}/>
      <Route exact path='/VendorSignup' element={<VendorSignup></VendorSignup>}/>
      <Route exact path='/ForgotPassword' element={<ForgotPassword></ForgotPassword>}/>
      <Route exact path='/Cart' element={<Cart></Cart>}/>
      <Route exact path='/Address' element={<Address></Address>}/>
      <Route exact path='/Order' element={<Order></Order>}/>
      <Route exact path='/ProfileDetails' element={<ProfileDetails></ProfileDetails>}/>
      <Route exact path='/Dahboard' element={<Dashboard></Dashboard>}/>
      <Route exact path='/AdminLogin' element={<AdminLogin></AdminLogin>}/>
      <Route exact path='/cartsession' element={<CartSession></CartSession>}/>
      <Route exact path='/catalogue/:gender' element={<Catalogue></Catalogue>}/>
      <Route exact path='/productdetails/:aid' element={<ProductSingle></ProductSingle>}/>
      </Routes> 
      </Provider>
    </div>
    </Router>
  );
}

export default App;
