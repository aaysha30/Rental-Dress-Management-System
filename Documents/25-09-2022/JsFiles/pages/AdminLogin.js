import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
        <section className="signin-page account homeimage">
            <div className="container">
                <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-md-offset-2">
                    <div className="block text-center">

                    <h2 className="text-center">Admin Log In</h2>
                    <form className="text-left clearfix" action="index.html" >
                        <div className="form-group ">
                            <input type="email" className="form-control npm audit fix --force" placeholder="Email" name='email' required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control my-3" placeholder="Password" name='password' required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-main text-center my-2" >Login</button>
                        </div>
                        {/* <div className="text-center">
                            <button type="submit" className="btn btn-main text-center my-2" >Vendor Login</button>
                        </div> */}
                    </form>
                    <p className="mt-20">New in this site, Create Account?
                        <Link to="/signup">&nbsp;&nbsp; For Customer &nbsp;</Link>
                        <Link to="/vendorsignup">&nbsp; For Vendor</Link>
                    </p>
                    <p><Link to="/Forgotpassword">Forgot your password?</Link></p>
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
