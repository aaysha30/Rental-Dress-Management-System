import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  axios from 'axios';

export default function Signup() { 
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [mobile_no, setMobile_no] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const navigateto = useNavigate();

    const handleFname = (em) => {
        setFirst_name(em.target.value);
    }
    const handleLname = (em) => {
        setLast_name(em.target.value);
    }
    const handleMoblieno = (em) => {
        setMobile_no(em.target.value);
    }
    const handleEmail = (em) => {
       setEmailId(em.target.value);
    }
    const handlePassword = (pwd) => {
        setPassword(pwd.target.value);
    }
    const handleAddress = (em) => {
        setAddress(em.target.value);
    }

    const handleSignAsVendor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/vendor/addvendor', {
            first_name : first_name,
            last_name : last_name,
            mobile_no : mobile_no,
            emailId : emailId,
            password : password,
            address : address,
})
            .then(result => {
                alert("Registration success")
                console.log("Registered")
                navigateto('/login');
               
            })
            .catch(error => {
                console.log(error);
            })}
    return (
        <div>
            <section className="signin-page account">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="block text-center my-3">
                        <h2 className="text-center">Vendor SignUp</h2>
                        <form className="text-left clearfix my-3" action="/">
                        <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="First Name" name='first_name' onChange={handleFname}  />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Last Name"  name='last_name' onChange={handleLname} />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Mobileno"  name='mobile_no' onChange={handleMoblieno} />
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control my-3"  placeholder="Email" name='email' onChange={handleEmail}  />
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control my-3"  placeholder="Password" name='password' onChange={handlePassword} required />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Address"  name='address' onChange={handleAddress}  />
                            </div>
                            <div className="text-center">
                            <button type="submit" className="btn btn-main text-center my-3" onClick={handleSignAsVendor}>REGISTER</button>
                            </div>
                        </form>
                        <p className="mt-20">Already have an account ?<Link to="/Login">Login</Link></p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
