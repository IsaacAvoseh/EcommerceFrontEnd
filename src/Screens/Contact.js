import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'

export default function Contact() {
    return (
        <div>
        <Nav
        active6 = "active"
        />

        <Header
        title = "Contact"
    
        />

        <div className="container">
            <div className="row contact">
                <div className="col-lg-6">
                    <h1 className="contact-title">Information About us</h1>
                    <h5 className="contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
                     malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
                      Accumsan faucibus vitae lobortis quis bibendum quam.
                    </h5>

                   <div className="circle-container">
                        <div id='contact-circle1'></div>
                        <div id='contact-circle2'></div>
                        <div id='contact-circle3'></div>
                   </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="contact-title">Contact Way</h1>
                    <div className="row first-row">
                        <div className="col-lg-6">

                            <div className="row">
                            <div className="col-lg-2">
                                <div id='big-circle1'></div>
                            </div>
                            <div className="col-lg-10">
                                <p className="contact-sm-text">Tel: 877-67-88-99</p>
                                <p className="contact-sm-text move-up">E-Mail: shop@store.com</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                            <div className="col-lg-2">
                                <div id='big-circle2'></div>
                            </div>
                            <div className="col-lg-10">
                                <p className="contact-sm-text">Support Forum</p>
                                <p className="contact-sm-text move-up">For over 24hr</p>
                            </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="row second-row">
                        <div className="col-lg-6">

                            <div className="row">
                            <div className="col-lg-2">
                                <div id='big-circle3'></div>
                            </div>
                            <div className="col-lg-10">
                                <p className="contact-sm-text">20 Margaret st, London</p>
                                <p className="contact-sm-text move-up">Great britain, 3NM98-LK</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                            <div className="col-lg-2">
                                <div id='big-circle4'></div>
                            </div>
                            <div className="col-lg-10">
                                <p className="contact-sm-text">Free standard shipping</p>
                                <p className="contact-sm-text move-up">on all orders.</p>
                            </div>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </div>
            <div className="row third-row">

                <div className="col-lg-6">
                <h1 className="contact-title">Contact Way</h1>
                <p className="contact-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
                 tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>

                <form>
                <div className="row mt-5">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Name*'/>
                        
                      </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                          
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' />
                            
                        </div>
                    </div>
                </div>
                    <div className="mb-3">
                       
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Subject*' />
                        
                    </div>
                    <div className="mb-3">
                   
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} placeholder='Type Your Messege*' />
                  </div>
                  
                    <button type="submit" className="about-btn">Submit</button>
              </form>

                
                </div>
                <div className="col-lg-6">
                    <img src="contact.png" alt="" />
                </div>
            
            </div>
        </div>


        </div>
    )
}
