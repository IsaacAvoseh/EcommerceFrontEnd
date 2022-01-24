import React from 'react'

export default function Footer() {
    return (
        <div>
      

        <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 ">
            <p className="footer-logo">Hekto</p>
            <div className="footer-contactus">
              <input className='input-footer' placeholder="Enter Email Address" type="text" /><button className="button">Signup</button>
            </div>
            <p className="contact-info">Contact info</p>
            <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
                <div className="footer-two">
                  <p className="title">Categories</p>
                  <p>Laptops &amp; Computers</p>
                  <p>Cameras &amp; Photography</p>
                  <p>Smart Phones &amp; Tablets</p>
                  <p>Video Games &amp; Consoles</p>
                  <p>Waterproof Headphones</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="footer-four">
                  <p className="title">Customer Care</p>
                  <p>My Account</p>
                  <p>Discount</p>
                  <p>Returns</p>
                  <p>Orders History</p>
                  <p>Order Tracking</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="footer-four">
                  <p className="title">Pages</p>
                  <p>Browse the Shop</p>
                  <p>Category</p>
                  <p>Pre-Built Pages</p>
                  <p>Visual Composer Elements</p>
                  <p>WooCommerce Pages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="last-row">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <p> ©Webecy - All Rights Reserved</p>
        </div>
        <div className="col-lg-6">
          <i className="fab fa-facebook" />
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter-square" />
        </div>   
      </div>
    </div>
  </div>
  
        </div>
    )
}
