import React from 'react'

function Description(props) {
    return (
        <div className="pb-4" style={{backgroundColor: "#F9F8FE"}}>
        <div className="container">
           <div style={{paddingTop: "50px", marginLeft: "0px"}}>
              
              <ul className="single-product-li">
                 <li className="single-product-list active-li" ><strong>Description</strong></li>
                 <li className="single-product-list" ><strong>Additional info</strong></li>
                 <li className="single-product-list" ><strong>Reviews</strong></li>
                 <li className="single-product-list" ><strong>Video</strong></li>
              </ul>
           </div>
           <div className="mt-4">
              <h6 className="color-1518"><strong>Various tempor</strong></h6>
              <p className="color-1518">{ props.desc } .</p>
           </div>
           <div className="mt-4">
              <h6 className="color-1518"><strong>More details</strong></h6>
              <p  className="color-1518"><i className="fa fa-arrow-right"></i> {props.desc1} </p>
                <p className="color-1518"><i className="fa fa-arrow-right"></i> {props.desc2}</p>
                <p className="color-1518"><i className="fa fa-arrow-right"></i>  {props.desc2} </p>
               
           </div>
        </div>
        </div>
    )
}

export default Description
