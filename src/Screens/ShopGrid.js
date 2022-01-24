import Header from "../Components/Header";
import Nav from "../Components/Nav";
import ProductCard from "../Components/ProductCard";
import React from 'react'
import { Link } from "react-router-dom";
import Card from "../Components/Card";

export default function ShopGrid() {
    return (
             <div>
                <Nav
                active5 = "active"
                />

                <Header
                title = "shop grid "
            
                />
                <div className="container">

            
                <div className="section-4">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="search-right">
                        <p className="title">Ecommerce Acceories &amp; Fashion item </p>
                        <p className="stat">About 9,620 results (0.62 seconds)</p>
                    </div>
                    </div>
                    <div className="col-lg-6 d-inline-flex">
                    <div className="search-div1">
                        <span className="search-text filter-icon">Per Page:</span>
                        <input className="search-input" size={1} type="text" />
                    </div>
                    <div className="search-div2">
                        <span className="search-text filter-icon">Sort By:</span>
                        <select className="search-input" aria-label=".form-select-sm select example">
                        <option selected>Best Match</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        </select>
                    </div>
                    <div className="search-div3">
                        <span className="search-text">View:</span>
                        <Link className='filter-icon-anc' to="/shopList"><i className="fas fa-list filter-icon" /></Link> 
                        <Link className='filter-icon-anc' to="/shopGrid"><i className="fas fa-th-large filter-icon" /></Link> 
                        <input className="search-input" size={15} type="text" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="main">
                <div className="row">
                    <div className="col-lg-3">
                    <div className="right-filter">
                        <p>Product Brand</p>
                        <ul className="right-filter-ul">
                        <li className>
                            <input className="form-check-input form-check-input3" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Coaster Furniture</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input3" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Fusion Dot High Fashion</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input3" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Unique Furnitture Restore</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input3" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Dream Furnitture Flipping</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input3" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Young Repurposed</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input3" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Green DIY furniture</label>
                        </li>
                        </ul>
                    </div>
                    <div className="right-filter">
                        <p>Categories</p>
                        <ul className="right-filter-ul">
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Prestashop</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Magento</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Bigcommerce</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">osCommerce</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">3dcart</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Bags</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Accessories</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Jewellery</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">Watches</label>
                        </li>
                        </ul>
                    </div>
                    <div className="right-filter">
                        <p>Price Filter</p>
                        <ul className="right-filter-ul">
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">$0.00 - $150.00</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">$150.00 - $350.00</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">$150.00 - $504.00</label>
                        </li>
                        <li className>
                            <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label">$450.00 +</label>
                        </li>
                        </ul>
                    </div>
                    <span className="bottom-search">
                        <input type="text" size className="search search-text" style={{width: '65%'}} />
                        <i className="fas fa-search input-search-icon" />
                    </span>
                    </div>
                    <div className="col-lg-9">
                    <div className="row">
                    
                   
                    <Card
                    product_name = "Wrist Watch"
                    product_img = "wrist-watch.jpg"
                    current_price ="158"
                    formal_price ="322"
                    short_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
                    />
                    <Card
                    // product_name = "Wrist Watch"
                    // product_img = "wrist-watch.jpg"
                    // current_price ="158"
                    // formal_price ="322"
                    // short_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
                    />
                    <Card
                    // product_name = "Wrist Watch"
                    // product_img = "wrist-watch.jpg"
                    // current_price ="158"
                    // formal_price ="322"
                    // short_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
                    />
                    <Card
                    // product_name = "Wrist Watch"
                    // product_img = "wrist-watch.jpg"
                    // current_price ="158"
                    // formal_price ="322"
                    // short_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
                    />
                 
                    </div>

                    </div>
                </div>
                </div>
            
            </div>
          </div>
    )
}

