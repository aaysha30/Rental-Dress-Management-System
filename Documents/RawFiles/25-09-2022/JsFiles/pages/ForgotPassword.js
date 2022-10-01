import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  axios  from 'axios';

export default function ForgotPassword() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigateto = useNavigate();

    const handleEmail = (em) => {
        setEmail(em.target.value);
     }
     const handlePassword = (pwd) => {
         setPassword(pwd.target.value);
     }
// //, {
//     password : password,
//     email : email,}
         const handleDetails = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8080/customer/forgotPassword/${email}/${password}`,{
                email:email,
                password:password
            })

                .then(result => {
                    navigateto('/login');
                })
                .catch(error => {
                    console.log(error);
                })}

//Vendor Forgot Password

             const  handleDetailsVendor=(e)=>{
                e.preventDefault();
                axios.put(`http://localhost:8080/vendor/forgotPassword/${email}/${password}`,{
                    email:email,
                    password:password
                })
    
                    .then(result => {
                        alert("Password Updated !!")
                        navigateto('/login');
                    })
                    .catch(error => {
                        console.log(error);
                        alert("Something went Wrong");
                    })
             }

  return (
    <div>
        <section className="forgot-password-page account homeimage">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center ">
                    <h2 className="text-center">Reset Password</h2>
                    <form className="text-left clearfix">
                        <p className=''>Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.</p>
                        <div className="form-group my-3">
                        <div className="form-group">
                            <input type="email" className="form-control my-3"  placeholder="Email" name='email' onChange={handleEmail}  />
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control my-3"  placeholder="Password" name='password' onChange={handlePassword} required />
                            </div>
                            <div className="form-group">
                            <input type="password" className="form-control my-3"  placeholder="ReEnterPassword"  name='password' onChange={handlePassword} required />
                            </div>
                        </div>
                        <div className="text-center my-4">
                        <button type="submit" className="btn btn-main text-center" onClick={handleDetails}>reset password For Customer</button><br/><br/>
                        <button type="submit" className="btn btn-main text-center" onClick={handleDetailsVendor}>reset password For Vendor</button>
                        </div>
                    </form>
                    <p className="mt-20"><Link to="/Login">Back to log in</Link></p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  ) 
}
