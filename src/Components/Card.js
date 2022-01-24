import React from 'react'

export default function Card() {
    return (
    
          <div className="col-lg-3">

          <img src="wrist-watch.jpg" alt="" className="card-img-top" />
          <p className="card-title text-center">Dictum morbi</p>
          <div className=" text-center">
          <span className="sm-circle bg-warning " />
          <span className="sm-circle bg-danger" />
          <span className="sm-circle bg-primary" />
        </div>

        <div className="prices-bottom text-center">
        <span className="card-price">$26.00</span>
        <span className="card-price-former">$52.00</span>
        <br/>
       
      </div>
          </div>
       
    )
}
