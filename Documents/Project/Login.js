import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home1.css'
import './style1.css'

export default function Login() {

    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');

    const navigateto = useNavigate();

    const handleEmail = (em) => {
        setUname(em.target.value);
    }

    const handlePassword = (pwd) => {
        setPassword(pwd.target.value);
    }

    const handleDetails = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/verify', {
            uname : uname,
            password : password
        })
            .then(result => {
                navigateto('/home');
            })
            .catch(error => {
                console.log(error);
            })
    }



  return (
    <div>
        <section className="signin-page account homeimage">
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-md-offset-2">
                    <div className="block text-center">

                    <h2 className="text-center">Log In</h2>
                    <form className="text-left clearfix" action="index.html">
                        <div className="form-group ">
                            <input type="email" className="form-control npm audit fix --force" placeholder="Email" name='uname' value={uname} onChange={handleEmail} required pattern="^[a-z0-9_]{1,15}@[a-z]{1,10}\.[a-z]{1,9}$" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control my-3" placeholder="Password" name='password' value={password} onChange={handlePassword} required pattern="^[A-Z]{1,3}[a-z]{2,4}[@#$%^&*][0-9]{4}$" />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-main text-center my-2" onClick={handleDetails} >Login</button>
                        </div>
                        {/* <div className="text-center">
                            <button type="submit" className="btn btn-main text-center my-2" >Vendor Login</button>
                        </div> */}
                    </form>
                    <p className="mt-20">New in this site, Create Account?
                        <Link to="/signup">&nbsp;&nbsp; For Customer &nbsp;</Link>
                        <Link to="/vendorsignup">&nbsp; For Vendor</Link>
                    </p>
                    <p><Link to="/forgotpassword">Forgot your password?</Link></p>
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
