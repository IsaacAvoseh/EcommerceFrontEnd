import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useContext, useEffect, useState } from 'react/cjs/react.development';
import { UserContext } from '../context/UserContext';
import { SearchContext } from '../context/SearchContext';


export default function Nav(props) {

  const { input, setInput, search } = useContext(SearchContext);
  console.log('inputContext', input);

  const navigate = useNavigate();

  const [user, setUser ] = useState(JSON.parse(localStorage.getItem('user-info')) || '')
  const [isLoading, setIsLoading] = useState(true)
 

  const { totalItems } = useCart();

  const [firstName, lastName] = user ? (user.name.split(' ')) : '';

const handleChange = (e) => {
 if(input !== e.target.value) {
  setInput(e.target.value);
  search(e.target.value);
 }else {
  setInput('');
 }
}

 //log out user
  const handleLogout = () => {
    localStorage.removeItem('user-info')
    localStorage.removeItem('token')
    localStorage.removeItem('react-use-cart')
    navigate('/')

  }
console.log('input', props.input);
 
    return (
      <>
        <nav className="navbar head1 navbar-expand-lg navbar-light bg-light">
        <div className="container newr">
        
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link anc" href="#"><i className="far fa-envelope"/>
                { user? user.email: 'Your Email'}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link anc" href="#"><i className="fas fa-phone-alt"/> { user ? '+238039261902' :'Your Number'}</a>
              </li>
            </ul>

            <ul className="navbar-nav ul1 me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle  anc"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link anc dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  USD
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">

                {
                    user ? (<li className="nav-item dropdown">
                      <a className="nav-link anc dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        { firstName }
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/users">Profile</a></li>
                        <li><a className="dropdown-item sign-out-alt" onClick={handleLogout}>Logout</a></li>
                      
                      </ul>
                    </li>
                      
                    ):(
                                       
                      <Link to="/login" className="nav-link anc" >Login <i className="far fa-user" /></Link>
                         
                  )

                }
              </li>
              <li className="nav-item">
                <a className="nav-link anc" href="#">Wishlist <i className="far fa-heart" /></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc" to="/cart"><i className="fas fa-shopping-cart" /><sup className='text-white m-1 h6' >{ totalItems }</sup ></Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <nav className="navbar head2 navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand navbar-brand-b" to="/">Hekto</Link>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link anc2 ${props.active}`} aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link anc2 ${props.active1}`} >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className={`nav-link anc2 ${props.active2}`} >pages</Link>
            </li>
            <li className="nav-item">
              <Link to="/sidebar" className={`nav-link anc2 ${props.active3}`} >Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={`nav-link anc2 ${props.active4}`} >Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className={`nav-link anc2 ${props.active5}`} >Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link anc2 ${props.active6}`} >Contact</Link>
            </li>
          </ul>
          <div className="d-flex">
                <input value={input} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                <button className="btn btn2 btn-outline-success" type="submit"><i className="fas btn-search fa-search" onClick={handleChange} /></button>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}
