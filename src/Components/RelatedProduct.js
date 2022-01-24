import React from 'react'

function RelatedProduct(props) {
    return (
<>            <img
              style={{ height: "200px",
              width: "230px", }}
              src={props.image}
              alt=""
            />
            <h6 className="mt-2">
             {props.name}
              <span>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </span>
            </h6>
            <h6>N{props.price}</h6>
          </>
         
       
    )
}

export default RelatedProduct
