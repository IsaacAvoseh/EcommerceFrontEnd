import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import PreFooter from "../Components/PreFooter";

function OrderCompleted() {
  return (
    <div>
    <Nav/>
      <Header
      title = "Order Completed"
      />

      <div className="container mb-4">
            <img
              className="order-completed-clock"
              src="../images/clock.png"
              alt=""
            />
       <div className="order-completed-div">
              <div>
                <img
                  style={{ marginInline: "45%", width: "10%" }}
                  src="../images/checked.png"
                  alt=""
                />
                <h3 className="order-completed-htxt">
                  Your Order Is Completed!
                </h3>
                <p className="order-completed-txt">
                  Thank you for your order! Your order is being processed and
                  will be completed within 3-6 hours. You will receive an email
                  confirmation when your order is completed.
                </p>
               <Link to='/shop'> <button className="order-completed-btn">
                  Continue Shopping
                </button>
                </Link>
              </div>
            </div>
            {/* <img
              className="order-completed-note"
              src="../images/note.png"
              alt=""
            /> */}
      </div>
     <PreFooter/>
    </div>
  );
}

export default OrderCompleted;
