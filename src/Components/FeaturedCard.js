import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturedCard(props) {
    return (
        <div className="col-lg-3">
            <div className="card card-feature">
           
                 <div className="image-feature">
                    <div className ="icons-feature">
                     <i onClick={() => props.addItem(props.item)} className="fas fa-cart-plus item-action" />
                    <i className="far fa-heart item-action" />
                    <i className="fas fa-search-plus item-action" />
                </div>
                <Link to={props.link}>
                    <img src={props.image} alt="" className="card-img-top" />
                    <div id='btn'>
                    
                    <button className="btn-feature">view details</button>             
                    </div>
                    </Link>
                 </div>
                 <div className="card-details">
                 <p className="card-title-feature text-center">{props.title}</p>
                 <div className="circled">
                 <span className="sm-circled-feature circle1 " />
                 <span className="sm-circled-feature circle2" />
                 <span className="sm-circled-feature circle3" />
               </div>

                <p className="color-code text-center">Code - { props.code }</p>
                 
     
                 <div className="prices-bottom text-center">
                     <span className="card-price" >N{props.price}</span>
                    
                     <br/>
          
                  </div>    
                 </div>
            </div>
           
        </div>
    )
}
