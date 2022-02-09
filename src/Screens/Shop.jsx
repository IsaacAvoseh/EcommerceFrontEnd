import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb'
import Cards from '../Components/Cards';
import Cards1 from '../Components/Cards1';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
// import Header from '../Components/Header';
// import LowerNav from '../components/LowerNav'
import Nav from '../Components/Nav';
import PreFooter from '../Components/PreFooter';
// import NavBar from '../components/NavBar'
import styles from "./Shop.module.css";
import { useCart } from "react-use-cart";
import { SearchContext } from '../context/SearchContext';
import ReactPaginate from "react-paginate";
import Paginate from '../Components/Paginate';
import Pagination from '../Components/Pagination';

const copy = JSON.parse(localStorage.getItem("products"));

export default function Shop() {
  const { addItem } = useCart();

  const imageBaseUrl = "http://127.0.0.1:8000/images/";
  const url = "http://127.0.0.1:8000/api";

  const [list, setList] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  //paginate state
  const [ currentPage, setCurrentPage ] = React.useState(1);
  const [ dataPerPage ] = React.useState(10);

  //data from context
  const { data, setData } = React.useContext(SearchContext);

  console.log('dataperpage', dataPerPage);

  //call api to get products from database
  const getProducts = () => {
    fetch(`${url}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Database", data);
        setData(data.data);
        setIsLoading(false);
        localStorage.setItem("products", JSON.stringify(data));
      });
  };

  React.useEffect(() => {
    if (data?.length !== 0) {
      console.log("Local data", data);
      setData(data.data || copy.data);
      setIsLoading(false);

      setList(true);
    } else {
      console.log("getting data from database");
      // setList(true);
      getProducts();
    }
  }, []);

  const showList = () => {
    console.log("clicked");
    setList(!list);
  };

  //pagination function , to sue pagination map the page data with currentData
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = copy.data?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //pagination function ends
  return (
    <>
      <Nav active5="active" />

      <Header title={list ? "shop grid" : "shop list"} />

      <BreadCrumb press={showList} press2={showList} />

      <div className={styles["cardrow"]}>
        {list ? (
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {data?.map((product) => (
                  <Cards
                    key={product.id}
                    item={product}
                    link={`/product/${product.id}`}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    discount={product.discount_price}
                    image={imageBaseUrl + product.image}
                  />
                ))}
              </>
            )}
          </>
        ) : (
          <div className="col-lg-10">
            {isLoading ? (
              <Loading />
            ) : (
              data?.map((product) => (
                <Cards1
                  key={product.id}
                  id={product.id}
                  link={`/product/${product.id}`}
                  addItem={addItem}
                  item={product}
                  name={product.name}
                
                  price={product.price}
                  discount={product.discount_price}
                  image={imageBaseUrl + product.image}
                  desc={product.description}
                />
              ))
            )}
          </div>
        )}
      </div>

      <div>
        <Pagination
          dataPerPage={dataPerPage}
          totalData={copy.data?.length}
          paginate={paginate}
        />
      </div>

      <PreFooter />
    </>
  );
}
