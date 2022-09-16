import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css'


// newproject
import Login from './Login'
import Signup from './Signup';
import VendorSignUp from './VendorSignUp';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';
import Home from './Home';
import Fetching from './Fetching';


export default function App3() {
  return (

    <Router>
    <div>

            {/* New project is here*/}
            {/* <Signup /> */}
            {/* <Login /> */}
            {/* <ForgotPassword /> */}
            {/* <Home /> */}

            {/* <AppLogin /> */}
            <Routes>
              <Route exact path="/" element={<Login />} />

              <Route path="/home" element={<Home />} />

              <Route  path="/signup" element={<Signup />} />

              <Route  path="/vendorsignup" element={<VendorSignUp />} />

              <Route  path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>

            {/* <Dashboard /> */}

            {/* <Fetching /> */}

            {/* <Login /> */}

    </div>
    </Router>
  )
}
