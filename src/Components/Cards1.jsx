import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards1.module.css'
import { useCart } from "react-use-cart";


export default function Cards1(props) {
      const { addItem } = useCart();

    return (
      <div className={`card ${styles["card"]}`}>
        <div className={` card-body ${styles["card-body"]}`}>
          <div className={styles["single-item"]}>
            <div className="col-lg-5">
              <Link to={props.link}>
                <img
                  src={props.image}
                  alt=""
                  className={`img-responsive ${styles["card-img-top"]}`}
                />
              </Link>
            </div>

            <div className={`col-lg-7 ${styles["card-content"]}`}>
              <Link to={props.link}>
                <div className={`col-lg-7 ${styles["card-content2"]}`}>
                  <div className="col-lg-6">
                    <p className={styles["card-title"]}>{props.name}</p>
                  </div>
                  <div className={`col-lg-6 ${styles["circle"]}`}>
                    <div className>
                      <span className={` bg-warning ${styles["sm-circle"]} `} />
                      <span className={` bg-danger ${styles["sm-circle"]} `} />
                      <span className={` bg-primary ${styles["sm-circle"]} `} />
                    </div>
                  </div>
                </div>
                <div className={styles["prices"]}>
                  <span className={styles["card-price"]}>
                    N{props.discount}
                  </span>
                  <span className={styles["card-price-former"]}>
                    N{props.price}
                  </span>
                  <span>
                    <i className={`far fa-star ${styles["far"]}`} />
                    <i className={`far fa-star ${styles["far"]}`} />
                    <i className={`far fa-star ${styles["far"]}`} />
                    <i className={`far fa-star ${styles["far"]}`} />
                    <i className="far fa-star" />
                  </span>
                </div>

                <div className={styles["item-description"]}>
                  <p>{props.desc}</p>
                </div>
              </Link>

              <div className>
                <i
                  onClick={() => props.addItem(props.item)}
                  className={`fas fa-cart-plus ${styles["item-actions"]}`}
                />
                <i className={`far fa-heart ${styles["item-actions"]}`} />
                <i className={`fas fa-search-plus ${styles["item-actions"]}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
