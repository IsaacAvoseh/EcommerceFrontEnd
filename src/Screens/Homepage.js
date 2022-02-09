import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import CardOffer from '../Components/CardOffer'
import CardTrending from '../Components/CardTrending'
import FeaturedCard from '../Components/FeaturedCard'
import LateCard from '../Components/LateCard'
import Loading from '../Components/Loading'
import Nav from '../Components/Nav'
import PreFooter from '../Components/PreFooter'
import Services from '../Components/Services'
import TopCard from '../Components/TopCard'
import { useCart } from "react-use-cart"


export default function Homepage() {   
    const { addItem } = useCart();

    const imageBaseUrl = "http://127.0.0.1:8000/images/";
    const url = "http://127.0.0.1:8000/api";


    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [ featured , setFeatured] = React.useState([]);
    const [ trending , setTrending] = React.useState([]);
    const [latest, setLatest] = React.useState([]);



    //call products api to get data
    
    const getProducts = () => {
        fetch(`${url}/products`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setIsLoading(false);
            console.log(data);
            localStorage.setItem('products', JSON.stringify(data));

        })
        .catch(error => console.log(error))


    }

    //get featured products from api
    const getFeaturedProducts = () => {
        fetch(`${url}/featured`)
        .then(response => response.json())
        .then(data => {
            setFeatured(data);
            setIsLoading(false);
            console.log(data);
        //    localStorage.setItem('featured', JSON.stringify(data));    
        })
        .catch(error => console.log(error))
    }

//get latest products from api
    const getLatestProducts = () => {
        fetch(`${url}/latest`)
        .then(response => response.json())
        .then(data => {
            setLatest(data);
            setIsLoading(false);
            console.log(data);
        //    localStorage.setItem('latest', JSON.stringify(data));
        })
        .catch(error => console.log(error))
    }


    useEffect(() => {
        getProducts()
        getFeaturedProducts()
        getLatestProducts()
    }, [])


    return (
        <div>
        <Nav
        active ="active"
        />
        <div className="carousel">

        <div className="container">
        <div className="row">
        <div className="col-lg-1">
        <img src="lamp.png" alt="" className="lamp-top" />
        </div>
        <div className="col-lg-6">
        <div className="wrapper">
            <h2 className="furniture-b">Best Furniture For Your Castle....</h2>
            <h1 className="furniture">New Furniture Collection Trends in 2020</h1>
            <p className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.
            </p>
            <Link to='/sidebar'>
            <button className="btn-shop">Shop now</button>
            </Link>
        </div>
        </div>
        <div className="col-lg-5">

        <img src="chair.png" alt="" className="chair_top " />
        </div>
        
        </div>
        <div className="circled">
        <span className="sm-circled circle " />
        <span className="sm-circled circle" />
        <span className="sm-circled " />
      </div>
        
        </div>
        
        </div>
        <div className="container">
            <h2 className="featured">featured Products</h2>

            <div className="row">

            {
                isLoading ? (
                            <Loading />
                ) : (
                        featured.data?.slice(0, 4).map(product => (
                        <FeaturedCard
                        key={product.id}
                        id={product.id}
                        item={product}
                        addItem={ addItem }
                        link={`/product/${product.id}`}
                        code={product.product_code}
                        title={product.name}
                        price={product.price}
                        image={imageBaseUrl + product.image}
                        />
            
                    )
                    )   )
                    
                    }

            
            </div>


        <h2 className="featured">Leatest Products</h2>
            <div className="ltn-nav">
                <span id='nav-ltn'>new arrival</span>
                <span id='nav-ltn'>best seller</span>
                <span id='nav-ltn'>feature</span>
                <span id='nav-ltn'>special offer</span>
               
            </div>

            <div className="row">

           {
                isLoading ? (
                            <Loading />
                ) : (
                    latest?.data?.map(product => (
                        <LateCard
                        key={product.id}
                        id={product.id}
                        addItem={addItem}
                        item={product}
                        link={`/product/${product.id}`}
                        name={product.name}
                        price={product.price}
                        discount={product.discount_price}
                        img={imageBaseUrl + product.image}
                        />

                    )
                    )   )


                        
           }
           
          
            </div>

            <h2 className="featured-offer">What Shopex Offer!</h2>

            <Services/>



            </div>
            <div className="unique-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                           <img src="chair2.png" alt="" />
                        </div>

                        <div className="col-lg-5">
                            <h1 className="unique-title">Unique Features Of latest &
                            Trending Products
                            </h1>
                            <div className="row">
                                <div className="col-lg-1"><span id='color-circle1'> </span></div>
                                <div className="col-lg-11"><p className="unique-text">All frames constructed with hardwood solids and laminates</p></div>

                                <div className="col-lg-1"><span id='color-circle2'></span></div>
                                <div className="col-lg-11"><p className="unique-text">Reinforced with double wood dowels, glue, screw - nails corner 
                                blocks and machine nails</p></div>

                                <div className="col-lg-1"><span id='color-circle3'></span></div>
                                <div className="col-lg-11"><p className="unique-text">Arms, backs and seats are structurally reinforced</p></div>

                                <div className="col-lg-4"><button id='uni-btn'>Add to cart</button></div>
                                <div className="col-lg-4">
                                    <p className="subtext-uni">B&B Italian Sofa </p>
                                    <p className="subtext-uni2">$32.00</p>
                                </div>
                               
                            </div>
                          
                         

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                 <h2 className="featured">Trending Products</h2>
                <div className="row">
              
                {
                    isLoading ? (
                         <Loading/>
                    ) : (
                        data?.data?.slice(0, 4).map(product => (
                            <CardTrending
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            link = {`/product/${product.id}`}
                            price={product.price}
                            discount={product.discount_price}
                            img={imageBaseUrl + product.image}
                            />

                        )
                        )   )

                }
                
               
              
                
                </div>

                <div className="row second-trend">

                <div className="col-lg-4 trend1">
                <h1 id='text-trend'>23% off in all products</h1>
                <p id='text-trend-p'>shop now</p>
                <div className="offset-lg-7 col-lg-5">
                    <img src="trend.png" alt="" />
                </div>
                </div>
                <div className="col-lg-4 trend2">
                <h1 id='text-trend'>23% off in all products</h1>
                <p id='text-trend-p'>shop now</p>
                <div className="offset-lg-3 col-lg-9">
                    <img src="trend2.png" alt="" />
                </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                       
                       {
                            isLoading ? (
                                    <Loading />
                            ) : (
                                data?.data?.slice(4, 8).map(product => (
                                 <>
                                        <Link to={`/product/${product.id}`}>

                                      <div className="col-lg-4 img-case">
                                                <img src={imageBaseUrl + product.image} alt="" />
                                  </div>
                        </Link>


                             <div className="col-lg-6 ">
                            <p id='seat-chair'>{ product.name }</p>
                            <p id='seat-chair-price'>N{product.price}</p>
                        </div>
                        </>
                        

                        )
                        )   )
                       }
                     
                    </div>
                </div>
                
                </div>


                <h2 className="featured">Discount Item</h2>

                <div className="ltn-nav">
                <span id='nav-ltn'>Wood Chair</span>
                <span id='nav-ltn'>Plastic chair</span>
                <span id='nav-ltn'>Sofa Collection</span>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <h1 className="discount-title">20% Discount Of All Products</h1>
                    <h2 className="discount-subTitle">Eams Sofa Compact</h2>
                    <p className="discount-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="check-text"><i className="fas fa-check check " />
                             Material expose like metals</p>
                            <p className="check-text"> <i className="fas fa-check check" />
                            Material expose like metals</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="check-text"><i className="fas fa-check check" />
                             Material expose like metals</p>
                            <p className="check-text"> <i className="fas fa-check check" />
                            Material expose like metals</p>

                           
                        </div>
                            <Link to='/shop'>
                                <button id='uni-btn'>shop now</button>
                            </Link>
                    </div>

                </div>
                <div className="col-lg-6 brown-chair">
                    <img src="brown-chair.png" alt="" />
                </div>

                
            </div>

            <h2 className="featured">Top Categories</h2>

                <div className="row">
                  {
                    isLoading ? (
                            <Loading />
                    ) : (
                        data?.data?.slice(4, 8).map(product => (
                            <TopCard
                                img={imageBaseUrl + product.image}
                                title={product.name}
                                link={`/product/${product.id}`}
                                price={product.price}
                            />
                        )
                        )   )
                  }
                   
                </div>

            </div>

            <div className="get-latest">
                <div className="container">
                    <h1 className="get-latest-text">Get Leatest Update By Subscribing <br/> To 0ur Newsletter</h1>
                   <Link to='/shop'>
                        <button id='uni-btn'>shop now</button>
                   </Link>
                </div>
            </div>

            <PreFooter/>


        </div>
    )
}
