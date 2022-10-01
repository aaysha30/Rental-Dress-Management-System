import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios  from 'axios';
import emailjs from 'emailjs-com';

export default function Signup() {

    // const [first_name, setFirst_name] = useState('');
    // const [last_name, setLast_name] = useState('');
    // const [mobile_no, setMobile_no] = useState('');
    // const [email_Id, setemail_Id] = useState('');
    // const [password, setPassword] = useState('');
    // const [gender, setGender] = useState('');

    // const navigateto = useNavigate();

    // const handleFname = (em) => {
    //     console.log("-----")
    //     setFirst_name(em.target.value);
    //     console.log("-----")
    //     console.log(first_name)
    // }
    // const handleLname = (em) => {
    //     setLast_name(em.target.value);
    // }
    // const handleMoblieno = (em) => {
    //     setMobile_no(em.target.value);
    // }
    // const handleemail_Id = (em) => {
    //    setemail_Id(em.target.value);
    // }
    // const handlePassword = (pwd) => {
    //     setPassword(pwd.target.value);
    // }
    // const handleGender = (em) => {
    //     setGender(em.target.value);
    // }

    // const handleSignUpCustomer = (e) => {
    //     setFirst_name(e.target.value)
    //     e.preventDefault();
    //     console.log("Registration");
    //     axios.post('http://localhost:8080/registration', {
           
    //         first_name : first_name,
    //         last_name : last_name,
    //         mobile_no : mobile_no,
    //         email_IdID : email_Id,
    //         password : password,
    //         gender : gender



    //     })
    //         .then(result => {
    //             navigateto('/login');
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     }//end of function
    

    const [shownumber, setShownumber] = useState(Math.floor(100000 + Math.random() * 900000));

    useEffect(()=>{
        console.log(shownumber);
    },[])
        const [registration, setRegistration] = useState({
            first_name: "",
            last_name: "",
            email_Id: "",
            mobile_no: "",
          
            gender: "",
            password: "",
    
        });
    
        const handleEmailVerification = (em) => {

            em.preventDefault();
    
            emailjs.send('service_nkozgdm', 'template_pebfizg', {
                first_name : registration.first_name,
                last_name : registration.last_name,
                numericcode : shownumber,
                email_Id : registration.email_Id
            }, "fa8V8lvoAejIiAXP0")
            .then(result=>{
                console.log(result)
            }).catch(error=>{
                console.log(error);
            })
            
            alert("Email send successfully");
            // var numericcode;
            // console.log(numericcode);


        }
    
     
        const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setRegistration({ ...registration, [name]: value });
        };
    
        const handleClick = (e) => {
            e.preventDefault();
            console.log(registration.first_name)
            axios.post("http://localhost:8080/customer/registration", {
                first_name: registration.first_name,
                last_name: registration.last_name,
                mobile_no: registration.mobile_no,
                email_Id: registration.email_Id,
                password: registration.password,
               
               gender:registration.gender
            }).then((response) => {
                console.log(response.data);
                alert("Customer added");
            }).catch((e) => {
                console.log(e);
                alert("Customer not added")
            })
            console.log(registration.first_name)
        }
    
    return (
        // <div>
        //     <section className="signin-page account">
        //         <div className="container">
        //             <div className="row justify-content-center">
        //             <div className="col-md-6 col-md-offset-3">
        //                 <div className="block text-center my-3">
        //                 <h2 className="text-center">Customer SignUp</h2>
        //                 <form className="text-left clearfix my-3" action="/">
        //                     <div className="form-group">
        //                     <input type="text" className="form-control my-3"  placeholder="First Name"  name='first_name' onChange={handleChange}  />
        //                     </div>
        //                     <div className="form-group">
        //                     <input type="text" className="form-control my-3"  placeholder="Last Name" onChange={handleChange} name='last_name' />
        //                     </div>
        //                     <div className="form-group">
        //                     <input type="text" className="form-control my-3"  placeholder="Mobileno" onChange={handleChange} name='mobile_no'  />
        //                     </div>
        //                     <div className="form-group">
        //                     <input type="email" className="form-control my-3"  placeholder="email_Id" onChange={handleChange} name='email_Id'   />
        //                     </div>
        //                     <div className="form-group">
        //                     <input type="password" className="form-control my-3"  placeholder="Password" onChange={handleChange} name='password' required />
        //                     </div>
        //                     <div className="form-group">
        //                     <input type="text" className="form-control my-3"  placeholder="Gender" onChange={handleChange} name='gender'  />
        //                     </div>
        //                     <div className="text-center">
        //                     <button  className="btn btn-main text-center my-3" onClick={handleClick}>REGISTER</button>
        //                     </div>
        //                 </form>
        //                 <p className="mt-20">Already have an account ? <Link to="/Login">Login</Link></p>
        //                 </div>
        //             </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <div>
        <section className="signin-page account homeimage" >
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 col-md-offset-3">
                    <div className="block text-center my-3">
                    <h2 className="text-center">Customer SignUp</h2>
                    <form className="text-left clearfix my-3" action="">
                        <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="First Name" name='first_name' onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Last Name" onChange={handleChange} name='last_name' required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Mobile No" onChange={handleChange} name='mobile_no' required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control my-3"  placeholder="Email Id" onChange={handleChange} name='email_Id' required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control my-3"  placeholder="Password" onChange={handleChange} name='password' required  />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Gender" onChange={handleChange} name='gender' required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control my-3"  placeholder="Enter 6 digit code to verify email" onChange={handleChange} name='numericcode' required />
                        </div>
                        <div className="text-center">
                            <button  className="btn btn-main text-center my-2" onClick={handleEmailVerification}>Send OTP</button>

                            <button  className="btn btn-main text-center my-3" onClick={handleClick}>REGISTER</button>
                        </div>
                    </form>
                    <p className="mt-20">Already have an account ? <Link to="/Login">Login</Link></p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
    )
}
//onChange={handleGender}