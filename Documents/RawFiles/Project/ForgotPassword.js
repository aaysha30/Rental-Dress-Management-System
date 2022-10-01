import React from 'react'
// impo
import './backimage.css'

export default function ForgotPassword() {
  return (
    <div>
        <section className="forget-password-page account">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center ">
                    <h2 className="text-center">Reset Password</h2>
                    <form className="text-left clearfix">
                        <p className=''>Please enter the email address for your account. A verification code will be sent to you. Once you have received the verification code, you will be able to choose a new password for your account.</p>
                        <div className="form-group my-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Registered email address" />
                        </div>
                        <div className="text-center my-4">
                        <button type="submit" className="btn btn-main text-center">reset password</button>
                        </div>
                    </form>
                    <p className="mt-20"><a href="login.html">Back to log in</a></p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  ) 
}
