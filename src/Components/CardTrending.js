import React from 'react'
import { Link } from 'react-router-dom'

export default function CardTrending(props) {
    return (
        <div className="col-lg-3">
            <Link to={props.link}>
        <div className="card trending-card">
       
           <div className="card-body">
           <div className="image-latest">

           <img src={props.img} alt="" className="card-img-top " />
         
        </div>
        <div className="card-latest">
           <div className="row">

               <div className="col-lg-12">
               <p id='text-trend'>{props.name}</p>
               </div>
               <div className="col-lg-12 trend-price">
               <span id='after-trend'>N{props.discount}</span>
               <span id='before-trend'>N{ props.price }</span>
               </div>

               <div className="col-lg-6">
              
               </div>
               <div className="col-lg-6">
             
               </div>
           
           </div>
        </div>
           </div>
        </div>
            </Link>
       
    </div>
    )
}
