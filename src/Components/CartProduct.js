import React from 'react'

import  { useState } from 'react'

import { useCart } from 'react-use-cart'


function CartProduct(props) {
//   const [quantity, setQuantity] = useState(1);
//   // handling increment and decrement
//   const handleDecrement = () => {
//     if(quantity>1){
//    setQuantity(quantity -1)
//    ;}
// };

// const handleIncrement = () => {
//     if(quantity<10){  
//    setQuantity(quantity +1)
//    ;}
// };


  const {
    totalUniqueItems,
  } = useCart();

  



// end of increment and decreme
    return (
        
            <div>
            <div className="row">
              <div className="col-lg-6">
                 
               
                <div className="row">
                  <div className="col-lg-3">
                  <div className="delete-product">
                  <i className="fas fa-times-circle delete" onClick={ props.remove } />
                    <img src={props.image} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <h6>{props.name}</h6>
                    <p>
                      Color: {props.color}{" "}
                      {/* <span style={{ float: "right" }}>$32.00</span> */}
                    </p>
                    <p>Size: { props.size }</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
               
                <p className="margin-down">N{props.price}</p>
              </div>
              <div className="col-lg-2">
               
                <div className=" quantity">
                  <h6 className="margin-down" >
                   <span className="regulator"> <i onClick={ props.removeOne } class="fa fa-minus " aria-hidden="true"></i></span>
                    <span className="qty-num">{props.qty}</span>
                    <span  className="regulator">
                      <i  onClick={ props.addOne } class="fa fa-plus" aria-hidden="true"></i>
                    </span>
                  </h6>
                </div>
              </div>
              <div className="col-lg-2">
                
                <p className="margin-down">N{(props.price) * (totalUniqueItems)}</p>
              </div>
            </div>
            <hr/>
          </div>
        
    )
}

export default CartProduct
