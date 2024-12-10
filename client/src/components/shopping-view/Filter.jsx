import React, { Fragment, useState } from 'react';
import { filterOptions } from '../../config';
import styles from '../../css/ShoppingCSS/Listing.module.css';
import { GiConsoleController } from 'react-icons/gi';

function ProductFilter({filters,handleFilters}) {
  const [activeFilters, setActiveFilters] = useState({});
  const handleFilterClick = (keyItem, optionId) => {
    setActiveFilters((prevFilters) => {
      const currentFilters = { ...prevFilters };

      if (!currentFilters[keyItem]) {
        currentFilters[keyItem] = []; // Initialize if undefined
      }

      if (currentFilters[keyItem].includes(optionId)) {
        // If already active, remove it (uncheck)
        currentFilters[keyItem] = currentFilters[keyItem].filter(
          (id) => id !== optionId
        );
      } else {
        // If not active, add it (check)
        currentFilters[keyItem].push(optionId);
      }

      return currentFilters; // Update state with new filters
    });

    // Call the parent filter handler
    handleFilters(keyItem, optionId);
  };

  return (
    <div className={`row container-fluid ${styles.filter}`}>
    {Object.keys(filterOptions).map((keyItem) => (
      <Fragment key={keyItem}>
        {filterOptions[keyItem].map((option, index) => (
          <p
            key={option.id || index} // Prefer option.id if available, fallback to index
            className={`${styles.filterProduct} col-lg-2 col-md-4 ${
              activeFilters[keyItem]?.includes(option.id) ? styles.filterActive : ""
            }`} // Add active class conditionally
              onClick={() => handleFilterClick(keyItem, option.id)}

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
