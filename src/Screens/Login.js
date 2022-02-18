import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router'
import { UserContext } from '../context/UserContext';
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

// import { useContext } from 'react/cjs/react.development'

export default function Login() {
    

    const imageBaseUrl = "https://hecto-ecom.herokuapp.com/images/";
    const url = "https://hecto-ecom.herokuapp.com/api";


    const navigate = useNavigate();
   
//  const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/users')
        }
     }, [])

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");
    const [validForm, setValidForm] = React.useState(false);


useEffect(() => {
    if (formData.email.includes("@") && formData.password.length > 5) {
        setValidForm(true);
    } else {
        setValidForm(false);
    }
}, [ formData.email, formData.password]);
  

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError("");
        setSuccess("");
       
        fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.status === "error" || data.errors) {
                    swal('Error', data.message, 'error')
                    return;
                } else if( data.status === "success"){
                 toast.success('Login Successful')
                    localStorage.setItem("token", JSON.stringify(data.token));
                    localStorage.setItem("user-info", JSON.stringify(data.data));
                    //check local storage if there is any intended url 
                    if (localStorage.getItem('intended1') ){
                        let intendedUrl = JSON.parse(localStorage.getItem('intended1'))
                        console.log('Intended Url', intendedUrl)
                        navigate(intendedUrl)
                    }else{
                        navigate('/users')
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                console.log('Error Occured')
                // swal('Something went wrong', 'Please try again', 'error')
                return;
            });
    };



    
    return (
        <div> 
        <Nav/>

        <Header
        title = "My account "
    
        />
            <div className="login">

                <h4 style={{ textAlign: "center" }} id="login-txt">Login</h4>
                <p style={{ textAlign: "center" }} className="login-txt mb-4">Please login using account details below</p>
                <div className="text-danger text-center h3">{error}</div>

                <input className='login-input' type="email" placeholder="Email address" name='email' value={formData.email} onChange={handleChange} 
                onBlur={(e) => {
                    if (e.target.value.length === 0) {
                        setError("Email is required");
                    } else if (!e.target.value.includes("@")) {
                        setError("Email is invalid");
                    } else {
                        setError("");
                    }
                }}
            
          
                 /> <br /> <br />

                <input className='login-input' type="password" placeholder="Password" name='password' value={formData.password} onChange={handleChange} />
                <p className="login-txt mt-4 mb-4">Forgot your password?</p>
                {
                  validForm?  <button className='login-btn' style={{ color: "white" }} onClick={handleSubmit} >Sign in</button>:
                        <button className= 'vbtn' style={{ color: "white" }} >Sign in</button>

                  
                }
                <Link to='/register'>
                    <p className="login-txt mt-4" style={{ textAlign: "center" }}>Don’t have an Account? Create account</p>
                </Link>
            </div>


        <PreFooter/>
       
    </div>
    )
}
