import React from 'react'
import { Link } from 'react-router-dom'

export default function TopCard(props) {
    return (
        <div className="col-lg-3 Top-Card">
            <Link to={props.link}>
            <div className="shadow-top">
                <div className="top-card">

                     <img src={props.img} alt="" />
     
                 </div>
            </div>
            <div className="bottom-card">
                 <h1 className="bottom-card-text">{props.title}</h1>
                 <h3 className="bottom-card-price">N{props.price}</h3>
            </div>
           
            </Link>
        </div>
    )
}
