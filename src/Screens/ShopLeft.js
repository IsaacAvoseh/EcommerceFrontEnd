import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumb'
import Cards from '../Components/Cards'
import Cards1 from '../Components/Cards1'
import Header from '../Components/Header'
import Loading from '../Components/Loading'
import Nav from '../Components/Nav'
import styles from "./Shop.module.css";
import { useCart } from "react-use-cart"
import ProductCard from '../Components/ProductCard'
import { SearchContext } from '../context/SearchContext';
import Pagination from '../Components/Pagination'


export default function ShopLeft(props) {
  const imageBaseUrl = "http://127.0.0.1:8000/images/";
  const url = "http://127.0.0.1:8000/api";

  const { addItem } = useCart();
  const { searchProducts, input, data, setData, search } = useContext(SearchContext);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dataPerPage] = React.useState(10);
  // const { data, setData } = React.useContext(SearchContext);

  const [list, setList] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [brands, setBrands] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const checkBox = document.getElementsByClassName('form-check-input');


  const setAllProducts = () => {
    setData(copy.data);
  }
  

  const copy =  JSON.parse(localStorage.getItem("products"));

    //sort by brands

    const sortByBrands = (e) => {
 //return item with same brand
      let brands = copy.data.filter(item => item.brand_id == e.target.id);
      setData(brands);
     console.log('brandsLiest', brands);
    }
  
    //sort by categories
    const sortByCategories = (e) => {
      let categories = copy.data.filter(item => item.category_id == e.target.id);
      setData(categories);
      // checkBox.checked = !checkBox.checked;
      console.log('categoriesList', categories);
    }

    //sort by price
    const sortByPrice = (e) => {
      let price = copy.data.sort((a, b) => {
        if(e.target.id === 'low'){
          return a.price - b.price;
        }
        else if(e.target.id === 'high'){
          return b.price - a.price;
        }
        else if(e.target.id === 'all'){
          return a.price - b.price;
        }
        else{
          return a.price - b.price;
        }
      });
      setData(price);
      console.log('priceList', price);
    }




  //state to manage  checkbox
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
  }
  



  const getProducts = () => {
    fetch(`${url}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Database", data);
        setData(data.data);
        setIsLoading(false);
        localStorage.setItem("products", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      }
      );
  };

 


  //get list of brands and categories from database
  const getBrands = () => {
    fetch(`${url}/brands`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Database: Brands", data);
        setBrands(data.data);

      })

      .catch((err) => {
        console.log(err);
      }

      );
  };

  //get list of categories from database
  const getCategories = () => {
    fetch(`${url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Database: Categories", data);
        setCategories(data.data);

      })

      .catch((err) => {
        console.log(err);
      }

      );
  };


  React.useEffect(() => {
    // getProducts();
    getBrands();
    getCategories();
    if (data.length !== 0) {
      console.log('Local data', data);
      setData(data.data || copy.data);
      setIsLoading(false);

      setList(true);
    } else {
      console.log('getting data from database');
      setList(true);
      getProducts();
    }
  }, []);

  const showList = () => {
    console.log("clicked");
    setList(!list);
  };
  // const copy = JSON.parse(localStorage.getItem("products"));

  //pagination function// to use pagination, map the page data with currentData
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  // const currentData = copy.data?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //pagination ends here


    return (
        <div>
        <Nav  
        active5 = "active"
      

        />

        <Header
        title = {list? 'shop grid': 'shop list'}
    
        />
        <BreadCrumb press={showList} press2={showList}/>

        <div className="container">

       
          
        <div className="main">
          <div className="row">
            <div className="col-lg-2">
              <div className="right-filter">
                <p>Product Brand</p>
                <ul className="right-filter-ul">
                    <li className>
                      <input name='brand' className="form-check-input form-check-input3" type="radio" onClick={ setAllProducts } name='brand'/>
                      <label className="form-check-label">All Products</label>
                    </li>

                 {
                    brands.map(brand => ( 
                      
                      <li className>
                        {/* <input type="checkbox" id={brand.id} value={brand.id} onClick={sortByBrands}/> */}
                        <input name='brand' className="form-check-input form-check-input3" type="radio"  name='brand' onClick={sortByBrands} id={brand.id} />
                        <label className="form-check-label">{brand.name}</label>
                      </li>
                    ))
                 }  

                 </ul>
              </div>
              <div className="right-filter">
                <p>Categories</p>
                <ul className="right-filter-ul">
                  
                 {
                    categories.map(category => (
                      <li className>
                        <input className="form-check-input form-check-input2" type="radio" name='checkbox' onClick={ sortByCategories } id={ category.id } />
                        <label className="form-check-label">{category.name}</label>
                      </li>
                    ))
                    
                 }
                  
                </ul>
              </div>
              <div className="right-filter">
                <p>Price Filter</p>
                <ul className="right-filter-ul">
                  <li className>
                    <input className="form-check-input form-check-input2" type="radio" name='price' id="low" onClick={ sortByPrice } />
                    <label className="form-check-label">Low</label>
                  </li>
                  <li className>
                      <input className="form-check-input form-check-input2" name='price' type="radio" id="high" onClick={sortByPrice} />
                    <label className="form-check-label">High</label>
                  </li>
                  <li className>
                      <input className="form-check-input form-check-input2" name='price' type="radio" id='all' id="flexCheckDefault" onClick={sortByPrice} />
                    <label className="form-check-label">Low - High</label>
                  </li>
                  <li className>
                      <input className="form-check-input form-check-input2" onClick={sortByPrice} name='price'  type="radio" id="flexCheckDefault" />
                    <label className="form-check-label">High - Low </label>
                  </li>
                </ul>
              </div>
              {/* <span className="bottom-search">
                <input type="text" size className="search search-text" style={{width: '65%'}} />
                <i className="fas fa-search input-search-icon" />
              </span> */}
            </div>
            <div className="col-lg-10" style={
              {
                display: 'flex',
                flexWrap: 'wrap',
              
              }
            }>

                {
                  list ? (
                    <>
                    {
                      isLoading ? (
                        <Loading/>
                      ) : (
                        <>
                    { data?.map(product => (
                      <div className="col-lg-3">
                       
                       <Cards
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        addItem={addItem}
                        item={product}
                        discount={product.discount_price}
                        link={`/product/${product.id}`}
                        image={imageBaseUrl + product.image}

                       />
                        
                      </div>

                    
                    ))}
                    </>
                    
                  ) }
                  
                    </>

                  ) : (
                    isLoading? ( 
                      <Loading/>
                    ) : (
                      data?.map(product => (
                        <Cards1
                         key={product.id}
                         name={product.name}
                          price={product.price}
                          link={`/product/${product.id}`}
                          discount={product.discount_price}
                          addItem={addItem}
                          item={product}
                          image={imageBaseUrl + product.image}
                          desc={product.description}
                          id={product.id}
                        />

                    
                    ))
                      )
                  )

                  }

            </div>
          </div>
        </div>

          <div>
            <Pagination
              // dataPerPage={dataPerPage}
              // totalData={copy.data?.length}
              // paginate={paginate}
            />
          </div>
      </div>
        </div>
        
    )
}
