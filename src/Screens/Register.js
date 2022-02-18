
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'



const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const eye = <i class="fas fa-eye"></i>;

export default function Register() {

    const imageBaseUrl = "https://hecto-ecom.herokuapp.com/images/";
    const url = "https://hecto-ecom.herokuapp.com/api";

    const navigate = useNavigate();

    // consume api from laravel for user registration
    // if success, redirect to login page
    // if fail, display error message
    const [formData, setFormData] = React.useState(initialValue);
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);


    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    };



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password must match");
            return;
        }


        setError("");
        setSuccess("");
        // consume api
        // if success, redirect to login page
        // if fail, display error message

        fetch(`${url}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success === true) {
                    setFormData(initialValue);
                   swal("Success", "Registration Successful", "success");
                    navigate('/login')

                } else {
                    setError(data.message);
                    swal("Error", data.message, "error");

                }

            })
            .catch((err) => {
                console.log(err);
            });
    };



  return (
    <div>
    
    <Nav/>

    <Header
    title = "My account "
    />
          <div className="login">
              <span className="text-success">{success}</span>
              <h4 style={{ textAlign: "center" }} id="login-txt">
                  Register
              </h4>
              <p style={{ textAlign: "center" }} className="login-txt mb-4">
                  Please register using account details below
              </p>
              <input
                  className="login-input "
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
              <input
                  className="login-input "
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
              <br /> <br />
              <input
                  className="login-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
              />
              <i onClick={showPasswordHandler}>{eye}</i>
              <span className="error-txt text-danger">{error}</span>
              <span>
                  <input
                      className="login-input"
                      type={showPassword ? "text" : "password"}
                      placeholder="Comfirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                  />
                  <i onClick={showPasswordHandler}>{eye}</i>
              </span>
              <span className="error-txt text-danger ">{error}</span>
              <p className="login-txt mt-4 mb-4">Forgot your password?</p>
              <button
                  type="button"
                  onClick={handleSubmit}
                  className="login-btn"
                  style={{ color: "white" }}
              >
                  Sign Up
              </button>
              <p className="login-txt mt-4" style={{ textAlign: "center" }}>
                  Already have an Account? Login
              </p>
          </div>
          <PreFooter/>
        </div>
  )
}
