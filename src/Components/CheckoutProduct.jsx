import React from 'react'

function CheckoutProduct(props) {
    return (
        <div >
        <div className="row demo-img">
          <div className="col-lg-4 ">
            <img src={props.image} alt="" />
          </div>
          <div className="col-lg-8">
            <h6>{ props.name } <sup>{ props.qty }</sup></h6>
            <p>Color: { props.color } <span style={{float: "right"}}>N{ props.price }</span></p>
            <p>Size: { props.size }</p>
          </div>
        </div>
            <hr/>
      </div>
    )
}

export default CheckoutProduct
