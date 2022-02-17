import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartTotals from "../Components/CartTotals";
import CheckoutProduct from "../Components/CheckoutProduct";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { useCart } from 'react-use-cart'
import { PaystackButton } from 'react-paystack';
import { useState } from "react/cjs/react.development";
import swal from "sweetalert";


function ShippingInfo() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user-info'));

  //revoke access to page if user is logged in 
 const checkUser = () =>{
  if(!localStorage.getItem('token')){
    swal('oops','You must be logged in to view this page', 'error');
   setTimeout(()=>{
     window.location.href = '/login'
    }
    ,3000)

  }
  }
  checkUser();


  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    itemTotal,
  } = useCart();

  const publicKey = "pk_test_ca5483b1ebbff03f56af48ca9e744bd36d10e50c"
  const [amount, setAmount] = useState(cartTotal * 100)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [error, setError] = useState('')
  const [phone, setPhone] = useState("")
  


 const [firstname, lastname] = JSON.parse(localStorage.getItem('user-info')).name.split(' ');

const reference = (new Date().getTime().toString()) ;

  const imageBaseUrl = "http://127.0.0.1:8000/images/";
  const url = "http://127.0.0.1:8000/api";

  //call api to get shipping info 
  const callShipping = () => {

    console.log('Loading')
    fetch(`${url}/shipping`, {
      headers: myHeaders
    })
      .then((res) => res.json())
      .then((data) => {
  
        console.log('Getting Shipping info', data.data);
        if (data.error) {
        swal(data.errors)
        }
        if (data.data !== null) {
          console.log('shipping info', data.data);
          localStorage.setItem("shipping-info", JSON.stringify(data.data))
          setAddress(data.data.address);
          setAddress2(data.data.address2);
          setCity(data.data.city);
          setState(data.data.state);
          setZip(data.data.zip);
          setPhone(data.data.phone);
        }
      })
      .catch((err) => console.log(err));
  }



 
 const handleClick =() =>{
  console.log('Pressed');
  const shipping = {
    firstname,
    lastname,
    email,
    address,
    address2,
    city,
    state, 
    zip,
    user_id: JSON.parse(localStorage.getItem('user-info')).id,
    phone,
  }
  console.log(shipping)
  //check if input is empty
  if(shipping.address === '' || shipping.city === ''){
  swal('Please fill all details')
    return;
  }
 

  //call api to set or update shipping info
  fetch(`${url}/shipping`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(shipping),
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    localStorage.setItem("shipping-info", JSON.stringify(data.data))
    if (data.error) {
      swal(data.errors)
    }
  })
  .catch((err) => console.log(err));
 
}
  const cart = JSON.parse(localStorage.getItem('react-use-cart'));


const shippingInfo = JSON.parse(localStorage.getItem('shipping-info'));

  const shipping_id = shippingInfo !== null ? shippingInfo.id : JSON.parse(localStorage.getItem('user-info')).id; 

  
  //headers
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + JSON.parse(localStorage.getItem('token')));

  const myInit = {
    method: 'POST',
    body: JSON.stringify({
      cart,
      reference,
      user_id: JSON.parse(localStorage.getItem('user-info')).id,
      shipping_id: shipping_id,
    }),
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };



   const handleClick2 =() =>{
   
   console.log('Pressed2');

    fetch(`${url}/initailpayment`, myInit)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
         swal(data.errors)
        }
      })
 }




  const callFunction = () => {
    handleClick();
    handleClick2();
  }



  React.useEffect(() => {
    // checkUser()
    swal('Please fill in your shipping information to continue')
   callShipping()
  }, []);


  

  const noItems = <dv>
    <h1>No items in cart </h1>
  </dv>

  const componentProps = {
    email: user.email,
    amount,
    metadata: {
      name: user.name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    // onSuccess: (response) =>
    //   console.log(response),

    onSuccess: (response) => {
      const payment = {
        reference: reference,
        status: response.status, 
        email: user.email,
        name: user.name,
        cart,
      }
      // console.log('cartitems', cart)

      console.log(payment)
      console.log(response)
      fetch(`${url}/payment/update`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(payment),
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.success === 'success'){
        console.log(data);
        emptyCart();
       swal('Thank You !','Payment Successful', 'success')
        setTimeout(() => {
          navigate('/completed')
        }, 1000);
      }
        if (data.error) {
         swal(data.errors)
        }
      })

    },
      //call api to set or update shipping info
  
      // alert("Thanks for doing business with us! Come back soon!!"),
    

    onClose: () => swal('oops',"Payment Cancelled", 'error'),
  }
 
  //call api to get shipping info


  return (
    <div>
     
      <Nav/>
      <Header
      title = "Hekto Demo"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="demo-txt">Hecto Demo</h4>
            <p className="demo-Ptxt">Cart/ Information/ Shipping/ Payment</p>
            <div className="info-div">
              <h5 className="contact-info">Contact Information</h5>

              <h6 className="contact-info-p">
               {
                 user? user.name :
                    <Link to='/login' >
                      Already have an account? Log in
                    </Link>
               }
              </h6>
          
              <div>
                <input
                  className="checkout-input"
                  type="text"
                  placeholder="Email or mobile phone number"
                  value={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  id=""
                />

                <input className="checkout-input-checkbox" type="checkbox" />
                <label className="input-checkbox-label" htmlFor="">
                  Keep me up to date on news and excluive offers
                </label>

                <div className="row shipping-add-div">
                  { error !== '' ? <div className="alert alert-danger">{error}</div> : null }
                  <h4 className="shipping-txt">Shipping Address</h4>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="First name (optional)"
                      value={firstname}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Last name"
                      value={lastname}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Address"
                  name=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id=""
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Apartment,suit,e.t.c (optional)"
                  name=""
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  id=""
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="City"
                  name=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  id=""
                />

                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="State"
                      name=""
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Postal Code"
                      name=""
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>
              {
                user.email ? <button onClick={ handleClick }  className="proceed-btn">Update Shipping </button>:
                    <Link to={'/shop'}> <button className="proceed-btn">Continue Shopping</button></Link>
               
              }                
              </div>
            </div>
          </div>
          <div className="col-lg-4 checked-out-prod" >

          {
            items === undefined || items.length === 0 ? noItems :
            items.map(item => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                name={item.name}
                qty={item.quantity}
                price={(item.price * item.quantity)}
                color={item.color}
                size={item.size}
                image={imageBaseUrl + item.image}
                />
            ))
          }

          <CartTotals
            total={cartTotal}
            noItems={noItems}
            total1={cartTotal}
            title={ 
              <PaystackButton {...componentProps} />}
            link={''}
            press={ callFunction }
          />

          </div>
        </div>
      </div>
    
    </div>
  );
}

export default ShippingInfo;
