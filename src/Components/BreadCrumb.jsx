import React, { useContext } from 'react'
import styles from './BreadCrumb.module.css'
import { SearchContext } from '../context/SearchContext'

export default function BreadCrumb(props) {
  const { input, setInput, search } = useContext(SearchContext);

  const handleChange = (e) => {
    if (input !== e.target.value) {
      setInput(e.target.value);
      search(e.target.value);
    } else {
      setInput("");
    }
  };
    return (
      <div className="container">
        <div className={styles["section-4"]}>
          <div className="row">
            <div className="col-lg-6">
              <div className={styles["search-right"]}>
                <p className={styles["title"]}>
                  Ecommerce Acceories &amp; Fashion item{" "}
                </p>
                <p className={styles["stat"]}>
                  About 9,620 results (0.62 seconds)
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-inline-flex">
              <div className={styles["search-div1"]}>
                <span className={styles["search-text"]}>Per Page:</span>
                <input
                  className={styles["search-input"]}
                  size={1}
                  type="text"
                />
              </div>
              <div className={styles["search-div2"]}>
                <span className={styles["search-text"]}>Sort By:</span>
                <select
                  className={styles["search-input"]}
                  aria-label=".form-select-sm select example"
                >
                  <option >Best Match</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className={styles["search-div3"]}>
                <span className={styles["search-text"]}>View:</span>
                <i onClick={props.press} id={styles['far']} className="fas fa-list" />
                <i onClick={props.press2} className="fas fa-th-large" />
                <input
                className={styles["search-input"]}
                  onChange={handleChange}
                  size={15}
                  type="text"
                  placeholder='Search'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
