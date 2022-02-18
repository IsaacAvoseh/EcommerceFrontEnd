import React from "react";
import CalculateShopping from "../Components/CalculateShopping";
import CartProduct from "../Components/CartProduct";
import CartTotals from "../Components/CartTotals";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { useCart } from "react-use-cart"
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const imageBaseUrl = "https://hecto-ecom.herokuapp.com/images/";
const url = "https://hecto-ecom.herokuapp.com/api";

function ShoppingCart() {

  const navigate =  useNavigate();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  console.log('firstName, items', items);

  //post cart item to database after adding to cart
  const postCartItem = () => {
    // e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("react-use-cart"));
    let cartItem = {
      cart: cart,
      user_id: localStorage.getItem("user_id")
    };
    console.log('cartItem', cartItem);
    fetch(url + "/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(cartItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log("cart item posted", data);
       
      });
  };
  // postCartItem();


  const noItems = <dv>
    <h1>No items in cart  </h1>
  </dv>

const handleClick = () =>{
   //check if user is logged in 
   if(localStorage.getItem('token')){
     //check if cart is empty
    if(isEmpty){
      navigate('/shop')
    }else{ 
      navigate('/shipping')
    }
   }
   //if user is not logged in and cart is empty
    else if(!localStorage.getItem('token') && isEmpty === true){
      navigate('/shop')
    }
    // user is not logged but cart is  not empty
    else if(!localStorage.getItem('token') && isEmpty === false ){
      localStorage.setItem('intended1', JSON.stringify('/shipping'))
      swal('Please login to continue')
      navigate('/login')
    }
}

  return (
    
    <div>
    <Nav/>
    <Header
    title = "Shopping Cart"

    />
      <div className="container shopping-div">
        <div className="shopping-cart">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mb-4">Product</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Price</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Quantity</h6>
                </div>
                <div className="col-lg-2">
                  <h6 className="mb-4">Total</h6>
                </div>
              </div>



              {
                items === undefined || items.length === 0 ? noItems :
                  
                    items.map(item => (
                      <CartProduct
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={(item.price * item.quantity)}
                        color={item.color}
                        image={imageBaseUrl + item.image}
                        qty={item.quantity}
                        size={item.size}
                        remove={() => removeItem(item.id)}
                        removeOne={() => updateItemQuantity(item.id, item.quantity - 1)}
                        addOne={() => updateItemQuantity(item.id, item.quantity + 1)}

                      />
                    ))
                  
              }
              
              {/* <CartProduct img="product3.png" price="32.00" qty="4" name="Hand Bag3" color="Pink" /> */}
              <div className="row">
                  <div className="col-lg-3"><Link to='/sidebar' className="update-cart-btn">Update Cart</Link></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"><button onClick={() => emptyCart()} className="clear-cart-btn">Clear Cart</button></div>
              </div>
            </div>
            <div className="col-lg-4">
              <h6 style={{ textAlign: "center" }} className="mb-4">
                Cart Totals
              </h6>
              
              <CartTotals 
              total ={cartTotal}
              total1 ={cartTotal}
              press={handleClick}
              link={' '}
              title= { isEmpty? 'Continue Shopping': 'Proceed to Checkout' }
              />
              <h6 style={{ textAlign: "center" }} className="mb-4 mt-4">
                Calculate Shopping
              </h6>
              <CalculateShopping />
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default ShoppingCart;
