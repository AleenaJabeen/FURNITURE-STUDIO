import React, { Fragment } from 'react';
import { filterOptions } from '../../config';
import styles from '../../css/ShoppingCSS/Listing.module.css';
import { GiConsoleController } from 'react-icons/gi';

function ProductFilter({filters,handleFilters}) {
  return (
    <div className={`row container-fluid ${styles.filter}`}>
    {Object.keys(filterOptions).map((keyItem) => (
      <Fragment key={keyItem}>
        {filterOptions[keyItem].map((option, index) => (
          <p
            key={option.id || index} // Prefer option.id if available, fallback to index
            className={`${styles.filterProduct} col-lg-2 col-6`}
            onClick={()=>{handleFilters(keyItem,option.id); console.log(option.id)}}

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
