import React from 'react'
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

export default function ShopLeft(props) {
  const imageBaseUrl = "http://127.0.0.1:8000/images/";
  const url = "http://127.0.0.1:8000/api";

  const { addItem } = useCart();


  const [list, setList] = React.useState(false);
  const [data, setData] = React.useState(localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []);
  const [isLoading, setIsLoading] = React.useState(true);
  const [brands, setBrands] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [input, setInput] = React.useState('')

  const prod = JSON.parse(localStorage.getItem('products'))
  console.log('prorororo', prod);

  // const [cart, setCart] = React.useState(localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]);

  //sort by brands
  const sortByBrands = (e) => {
    setInput(e.target.value)
  //sort by categories
  const sortByCategories = (e) => {
    let categories = prod.filter(item => item.category === e.target.id);
    setData(categories);
  }
    }

  //state to manage  checkbox
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    
  }
  

  //sort by price
  const sortByPrice = (e) => {
    let price = data.filter(item => item.price === e.target.value);
    setList(price);
  }
  
//search through procducts in local storage onfocus

    const set = (arr, query) => {
      return arr.data.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

   const search = (inputV) => {
      let sel = set(prod, inputV);
     setData(sel);
   }  
    // let products = data.filter(item => item.name.toLowerCase().includes(inputV.toLowerCase()));
    // setList(products);
 

  //call api to get products from database

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
      setData(data.data);
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


    return (
        <div>
        <Nav
        input={input}
        setInput={setInput}
      data={search}
        
          active5 = "active"
        />

        <Header
        title = {list? 'shop grid': 'shop list'}
    
        />
        <BreadCrumb press={showList} press2={showList} focus={ search } />

        <div className="container">

       
          
        <div className="main">
          <div className="row">
            <div className="col-lg-2">
              <div className="right-filter">
                <p>Product Brand</p>
                <ul className="right-filter-ul">

                 {
                    brands.map(brand => ( 
                      
                      <li className>
                        {/* <input type="checkbox" id={brand.id} value={brand.id} onClick={sortByBrands}/> */}
                        <input name='brand' className="form-check-input form-check-input3" type="radio" onClick={() => sortByBrands(input)} value={input} name ={brand.id}  id="flexCheckDefault" />
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
                        <input className="form-check-input form-check-input2" type="checkbox" value={input } onChange={handleToggle} id="flexCheckDefault" />
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
                    <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">N0.00 - N150.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">N150.00 - N350.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">N150.00 - N504.00</label>
                  </li>
                  <li className>
                    <input className="form-check-input form-check-input2" type="checkbox" defaultValue id="flexCheckDefault" />
                    <label className="form-check-label">N450.00 +</label>
                  </li>
                </ul>
              </div>
              <span className="bottom-search">
                <input type="text" size className="search search-text" style={{width: '65%'}} />
                <i className="fas fa-search input-search-icon" />
              </span>
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
                    { data.map(product => (
                      <div className="col-lg-3">
                       
                       <Cards
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
                      data.map(product => (
                        <Cards1
                         
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
       
      </div>
        </div>
        
    )
}
