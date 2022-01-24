import React from "react";
import { Link } from "react-router-dom";

function CartTotals(props) {
  return (
    <div className="total-checkout">
      <h4 className="mt-2 cart-total-txt">Subtotals <span style={{float: "right"}}>N{props.total}</span></h4>
      <hr />
      <h4 className="mt-4 cart-total-txt2">Totals <span style={{float: "right"}}>N{ props.total1 }</span></h4>
      <hr />
      <input className="mt-4" type="checkbox" />
      <label
        style={{ marginLeft: "4px" }}
        htmlFor=""
        className="cart-total-txt3"
      >
        Shipping & taxes calculated at checkout
      </label>
       <button  onClick={props.press} className="proceed-btn2 mt-4">{ props.title }</button>
    </div>
  );
}

export default CartTotals;
