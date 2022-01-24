import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Services from '../Components/Services'

export default function About() {
    return (
        <div>
        <Nav
        active1 = "active"
        />

        <Header
        title = "About"
    
        />

        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="left-about"></div>
                    
                    </div>
                    <div className="col-lg-6 right-about">
                        <h1 className="about-title">Know About Our E-Commerce <br/>
                        Business, History</h1>
                        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam,
                         malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
                          Accumsan faucibus vitae lobortis quis bibendum quam.</p>

                          <button className="about-btn">Contact us</button>
                    </div>
                </div>

                <h2 className="about-features">Our features</h2>

                <Services/>

           
                
              
            </div>
            <div className="about-client">
            <h2 className="about-client-say">Our client say!</h2>
            <p className="client-name">Selina Gomez</p>
            <p className="client-designation">Ceo At Webecy Digital</p>
            <div className="comments">
                    <p className="client-comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui
                    sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
                    aliquam lacus volutpat praesent.
    </p>
            </div>


            </div>
        </div>
        </div>
    )
}
