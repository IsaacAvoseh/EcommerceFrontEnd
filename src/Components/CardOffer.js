import React from 'react'

export default function (props) {
    return (
        <div className="col-lg-3">
           <div className="card offer-card">
                <div className="offer-icon">
                    <img src={props.img} alt="" />
                </div>
                <h2 className={`offer-title ${props.extra}`}>{props.title}</h2>
                <p className="offer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
           </div> 
        </div>
    )
}
