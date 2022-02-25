import React from 'react'
import { useCart } from "react-use-cart";

function SingleProduct(props) {
  //switch image1, image2 and image3 to main image onclick
  const [mainImage, setMainImage] = React.useState(props.image);
  const [mainImage1, setMainImage1] = React.useState(props.image1);
  const [mainImage2, setMainImage2] = React.useState(props.image2);
  const [mainImage3, setMainImage3] = React.useState(props.image3);

  // const { addItem } = useCart();

  const handleImageClick = (e) => {
    console.log('image clicked');
    setMainImage(e.target.src);

  }

  
    return (
        <div className="container">
      <div
        className="row"
        style={{
          boxShadow: "0px 0px 25px 10px #F6F4FD",
          borderRadius: "2px",
          backgroundColor: "#fff",
          marginBlock: "100px"
        }}
      >
        <div className="col-lg-2">
          <img className="details-img"
            src={props.image}
            style={{ padding: "8px 8px 4px" }}
              alt="bag1" onError='https://hecto-ecom.herokuapp.com/images/image%201165.png'
          />
          <img className="details-img"
            src={props.image1}
              onClick={handleImageClick}
              defaultValue={mainImage1}
              
            style={{ padding: "4px 8px" }}
            alt="bag2"
          />
          <img  className="details-img"
            src={props.image2}
            style={{ padding: "4px 8px" }}
            alt="bag3"
          />
        </div>
        <div className="col-lg-4">
          <img  className="details-img-main"
            src={props.image3}

            style={{ padding: "8px 4px" }}
            alt="bag4"
          />
        </div>
        <div className="col-lg-6">
          <div className="" style={{ padding: "8px 25px", marginBlock: "15%"}}>
            <div className="">
              <div className="col-lg-12">
                <p
                  className="card-title"
                  style={{ fontFamily: "Josefin Sans", fontSize: "24px" }}
                >
                  {props.name}
                </p>
              </div>
            </div>
            <div className="prices">
              <span>
                <i className="fa fa-star" style={{ color: "yellow" }} />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
              </span>
              <span style={{ color: "blue" }}>(22)</span>
            </div>
            <div>
              <span className="card-price">N{props.discount}</span>
              <span className="card-price-former">N{ props.price }</span>
            </div>
            <div className="item-description">
              <p
                style={{
                  color: "blue",
                  marginBottom: 0,
                  fontFamily: "Josefin Sans",
                }}
              >
                Color: {props.color}
              </p>
              <p>
               {props.desc}
              </p>
            </div>

            <div  style={{ marginLeft: "30px" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "5px",
                  fontFamily: "Josefin Sans",
                  color: "blue",
                }}
                onClick={props.press}
              >
                Add To Cart
              </button>
              <span>
                <i className="fa fa-heart" style={{ padding: "0 8px" }} />
              </span>
            </div>
            <div>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Categories:{props.category}
              </p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>Tags:</p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Share:
                <span>
                  <i
                    className="fab fa-facebook"
                    style={{ color: "blue", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fab fa-instagram"
                    style={{ color: "#FB2E86", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fab fa-twitter-square"
                    style={{ color: "blue", paddingLeft: "8px" }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default SingleProduct
