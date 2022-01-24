import React from 'react'

export default function ProductCard(props) {
    return (
        <div className="card card-pro">
                <div className="card-body">
                  <div className="single-item row">
                    <div className="col-4 ">
                      <img src={props.product_img} alt="" className="card-img-top" />
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-lg-4">
                          <p className="card-title">{props.product_name}</p>
                        </div>
                        <div className="col-lg-8">
                          <div className>
                            <span className="sm-circle bg-warning " />
                            <span className="sm-circle bg-danger" />
                            <span className="sm-circle bg-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="prices">
                        <span className="card-price">${props.current_price}</span>
                        <span className="card-price-former">${props.formal_price}</span>
                        <span>
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star fill" />
                          <i className="fas fa-star" />
                        </span>
                      </div>
                      <div className="item-description">
                        <p>{props.short_desc}</p>
                      </div>
                      <div className>
                        <i className="fas fa-cart-plus item-actions" />
                        <i className="far fa-heart item-actions" />
                        <i className="fas fa-search-plus item-actions" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

    )
}
