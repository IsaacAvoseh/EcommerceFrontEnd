import React from 'react'
import { Link } from 'react-router-dom'

export default function LateCard(props) {
    return (
        <div className="col-lg-4">
        <div className="latest-card">
       
             <div className="image-latest">
                <div className ="icons-latest">
                     <i onClick={() => props.addItem(props.item)} className="fas fa-cart-plus item-action" />
                    <i className="far fa-heart item-action" />
                    <i className="fas fa-search-plus item-action" />
                </div>

                    <Link to={props.link}> <img src={props.img} alt="" className="card-img-top img-late" /></Link>
              
             </div>
             <div className="card-latest">
                 <Link to={props.link}>
                <div className="row">

                    <div className="col-lg-7">
                    <p id='text-l'>{props.name}</p>
                    </div>
                    <div className="col-lg-2">
                    <p id='after'>N{props.discount}</p>
                    </div>
                    <div className="col-lg-2">
                    <p id='before'>N{props.price}</p>
                    </div>
                
                </div>
                    </Link>

             </div>
        </div>
       
    </div>
    )
}
