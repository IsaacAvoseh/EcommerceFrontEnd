import React from 'react'
import styles from './Cards.module.css'
import { useCart } from "react-use-cart"
import { Link } from 'react-router-dom';

export default function Cards(props) {
    const { addItem } = useCart()

    return (
      <div className={`${styles["card"]}`}>
        <div className={`card-body ${styles["card1"]}`}>
          <div className={styles["body"]}>
            <Link to={props.link}>

            <img
              src={props.image}
              className={`image-responsive ${styles["img"]}`}
              alt=""
            />
            </Link>
            <div className={styles["far"]}>
              <i className="fas fa-heart"></i>
              <i onClick={() => addItem(props.item) } className="fas fa-shopping-cart"></i>
              <i className="fas fa-search"></i>
            </div>
          </div>
            <Link to={props.link}>
                
          <div className={styles["prices"]}>
            <h6 className="card-title">{props.name}</h6>

            <div>
              <span className={` bg-warning ${styles["sm-circle"]} `} />
              <span className={` bg-danger ${styles["sm-circle"]} `} />
              <span className={` bg-primary ${styles["sm-circle"]} `} />
            </div>

            <div>
              <span className={styles["card-price"]}>N{props.discount}</span>
              <span className={styles["card-price-former"]}>
                <del>N{props.price}</del>
              </span>
            </div>
          </div>
          </Link>
        </div>
      </div>
    );
}
