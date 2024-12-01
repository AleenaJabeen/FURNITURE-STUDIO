import React, { Fragment } from 'react';
import { filterOptions } from '../../config';
import styles from '../../css/ShoppingCSS/Listing.module.css';

function ProductFilter() {
  return (
    <div className={`row container-fluid ${styles.filter}`}>
    {Object.keys(filterOptions).map((keyItem) => (
      <Fragment key={keyItem}>
        {filterOptions[keyItem].map((option, index) => (
          <p
            key={option.id || index} // Prefer option.id if available, fallback to index
            className={`${styles.filterProduct} col-lg-2 col-6`}
          >
            {option.label}
          </p>
        ))}
      </Fragment>
    ))}
  </div>
  
  )
}

export default ProductFilter;
