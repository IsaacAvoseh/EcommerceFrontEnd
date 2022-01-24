import React from 'react'
import Description from '../Components/Description'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'
import RelatedProduct from '../Components/RelatedProduct'
import SingleProduct from '../Components/SingleProduct'
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading'
import { useCart } from "react-use-cart"
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'



export default function ProductDetails() {
  const imageBaseUrl = "http://127.0.0.1:8000/images/";
  const url = "http://127.0.0.1:8000/api";
  const { addItem, items } = useCart();

  // const addItemNotification = (product) => {

  //   const checkItem = (item) => {
  //     return item.id === product.id;
  //   }

  //   const inCart = items.findIndex(checkItem);

  //   if(inCart > -1) {
  //     addItem(product);
  //     toast.success(`${product.name} quantity updated to ${product.quantity}`);
  //     console.log(product.quantity);
  //   } else {
  //     addItem(product);
  //     toast.success(`${product.name} Added to Cart`);
  //   }
  // }


  const [single, setSingle] = React.useState([]);
  const [singleCategory, setSingleCategory] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [category, setCategory] = React.useState([]);
  const { id } = useParams();

  const getRelatedProducts = () => {
  
    fetch(`${url}/products/category/` + id)
      .then((res) => res.json())
      .then((data) => {
        console.log("Related Products", data);
        setCategory(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      }
      );
  };



  //call api to get single products details from database
  const getSingleProduct = () => {
  
    fetch(`${url}/products/`+ id)
      .then((res) => res.json())
      .then((data) => {
        setSingle(data.data);
        setSingleCategory(data.data.category);
        console.log("Database: Single Product", data.data);
        setIsLoading(false);

      })


      .catch((err) => {
        console.log(err);
      }

      );
  };

  React.useEffect(() => {
    getSingleProduct();
    getRelatedProducts();
  }, [id]);



  return (
    <div>
    <Nav/>
    <Header
    title = "Product Details"
    />
    {
    
       isLoading ? (
         <Loading/>
        ) : (
          <SingleProduct
            name={single.name}
            price={single.price}
            color={single.color}
            press={ () => addItem(single) }
            // item={single.data}
            discount={single.discount_price}
            image={imageBaseUrl + single.image}
            image1={imageBaseUrl + single.image_1}
            image2={imageBaseUrl + single.image_2}
            image3={imageBaseUrl + single.image_3}
            category={singleCategory.name}
          />
        )

    }

    <Description
    desc={single.description}
    desc1={single.description}
    desc2={single.description}
    desc3={single.description}
    />


  {
    isLoading
    ? (
      <Loading/>
    )
    : (
            <div className="container" style={{ marginTop: "80px", marginBottom: "120px" }}>
              <h4 className="related-product">Related Products</h4>
              <div className="row" >

   { category.map(product => (
     <div className="col-lg-3" >

     <Link to={`/product/${product.id}`}>
        <RelatedProduct
        
        price={product.price}
        
          name={product.name}
          image={imageBaseUrl + product.image}
          />
          </Link>
        </div>
      ))
    }
              </div>
            </div>
    )

  }
    <PreFooter/>
  </div>
  )
}
