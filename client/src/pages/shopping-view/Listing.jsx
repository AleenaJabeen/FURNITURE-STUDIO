import React, { useEffect, useState } from 'react'
import { ProductFilter,ProductTile } from '../../components';
import styles from '../../css/ShoppingCSS/Listing.module.css';
import { sortOptions } from '../../config';
import { BiSort } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import {
  fetchAllFilteredProducts,

} from "../../store/shop/products-slice";


function createSearchParamsHelper(filterParams) {
  const queryParams = [];

  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");

      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }

  console.log(queryParams, "queryParams");

  return queryParams.join("&");
}
function Listing() {
  const dispatch = useDispatch();
  const {productList,productDetails}=useSelector(state=>state.shoppingProducts);
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSort(value){
    console.log(value);
    setSort(value);
  }
  function handleFilters(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption],
      };
      console.log(cpyFilters);
    } else {
      const indexOfCurrentOption =
        cpyFilters[getSectionId].indexOf(getCurrentOption);

        console.log(cpyFilters);

      if (indexOfCurrentOption === -1)
        cpyFilters[getSectionId].push(getCurrentOption);
      else cpyFilters[getSectionId].splice(indexOfCurrentOption, 1);
    }
    console.log(cpyFilters);
    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
    console.log(cpyFilters);

  }

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  },[]);

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [filters]);
  useEffect(() => {
    if (filters !== null && sort !== null)
      dispatch(
        fetchAllFilteredProducts({ filterParams: filters, sortParams: sort })
      );
  }, [dispatch, sort, filters]);

  return (
    <div className={`${styles.listingSection} container-fluid`}>
     <ProductFilter filters={filters} handleFilters={handleFilters}/>
     <div className={styles.allProducts}>
      <h3>All Products</h3>
      <div className={styles.DropDownMenu}>
        <li className={`nav-item dropdown ${styles.li}`}>
          <a className="nav-link d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <span><BiSort className='me-1' /></span> 
          Sort By
          </a>
          <ul className="dropdown-menu p-2 bg-dark text-white">
            {sortOptions.map(sortItem=><li value={sortItem.id} onClick={() => handleSort(sortItem.id)}  key={sortItem.id} className='p-2'>{sortItem.label}</li>)}
          </ul> </li><p>{productList.length} Products</p></div>
     </div>
    <div>
    <div className='container-fluid category-body'>
    <div className="row pb-5">
    
{productList && productList.length > 0 && productList? (productList.map((productItem,index)=>{
return <ProductTile products={productItem} key={index}/>})) : null }
</div>
</div>
</div>
    </div>
  
  );
}

export default Listing;
