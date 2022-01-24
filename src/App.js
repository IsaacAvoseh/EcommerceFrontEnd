import react from 'react';
import logo from './logo.svg';
import './App.css';
import './Homepage.css';
import './Day1.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ShopLeft from './Screens/ShopLeft';
import ShopGrid from './Screens/ShopGrid';
import Footer from './Components/Footer';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Homepage from './Screens/Homepage';
import ProductDetails from './Screens/ProductDetails';
import Login from './Screens/Login';
import Register from './Screens/Register';
import OrderCompleted from './Screens/OrderCompleted';
import ShoppingCart from './Screens/ShoppingCart';
import ShippingInfo from './Screens/ShippingInfo';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Profile from './Screens/Profile';
import { useEffect, useState } from 'react/cjs/react.development';
import { UserContext } from './context/UserContext';
import Shop from './Screens/Shop';
import { useCart } from "react-use-cart";
import { CartProvider } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  handleItemAdded,
  handleItemUpdated,
  handleItemRemoved,
} from './utils/CartNotify.js';

const toastOptions = {
  position: 'top-right',
  draggable: false,
  toastClassName:
    'bg-primary text-white text-center px-2 py-3 shadow-none rounded-lg',
  progressClassName: 'h-0',
  closeButton: false,
  autoClose: 2000,
};


function App() {
  
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

//remove user from local storage every 30 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("clearing user");
      localStorage.removeItem('user-info');
      localStorage.removeItem('token');
    }, 1.8e+6);
    return () => clearInterval(interval);
  }, []);

  return (
    
   
    <div className="App">
      <ToastContainer/>
      <CartProvider
        onItemAdd={handleItemAdded}
        onItemUpdate={handleItemUpdated}
        onItemRemove={handleItemRemoved}
      >

      <UserContext.Provider value={{
        token, setToken, user, setUser, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin
      }}>
       

   <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Homepage/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/sidebar" element = {<ShopLeft/>} />
      {/* <Route path="/shopGrid" element = {<ShopGrid/>} /> */}
      <Route path='/shop' element = {<Shop />} />
      {/* <Route path="/product-details" element = {<ProductDetails/>} /> */}
    
      <Route path="/login" element = {<Login/>} />
      <Route path="/register" element = {<Register/>} />
      <Route path="/product/:id" element = {<ProductDetails/>} />
      <Route path="/completed" element = {<OrderCompleted/>} />
      {/* <Route path="/shopping-cart" element = {<ShoppingCart/>} /> */}
      <Route path="/cart" element = {<ShoppingCart/>} />
      <Route path="/shipping" element = {<ShippingInfo/>} />
      <Route path='/users' element ={<Profile/>} />
     
    </Routes>
         
    
   <Footer/>

   </BrowserRouter>
       

    </UserContext.Provider>
    </CartProvider>
  
    </div>
  
  );
}

export default App;
