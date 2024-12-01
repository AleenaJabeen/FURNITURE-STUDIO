import React, { useEffect } from 'react'
import { ProductFilter,ProjectTile } from '../../components';
import styles from '../../css/ShoppingCSS/Listing.module.css';
import { sortOptions } from '../../config';
import { BiSort } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,

} from "../../store/shop/products-slice";



function Listing() {
  const dispatch = useDispatch();
  const {productList}=useSelector(state=>state.shoppingProducts);
  console.log("listing",productList);
  useEffect(()=>{
    dispatch(fetchAllFilteredProducts());
  },[dispatch]);
  // console.log(productList,"productListsing");
  return (
    <div className={`${styles.listingSection} container-fluid`}>
     <ProductFilter/>
     <div className={styles.allProducts}>
      <h3>All Products</h3>
      
      <div className={styles.DropDownMenu}>
        <li className={`nav-item dropdown ${styles.li}`}>
          <a className="nav-link d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         <span><BiSort className='me-1' /></span> 
          Sort By
         
          </a>
        
          <ul className="dropdown-menu p-2 bg-dark text-white">
            {sortOptions.map(sortItem=><li key={sortItem.id} className='p-2'>{sortItem.label}</li>)}
            
          </ul> </li><p>10 products</p></div>
     </div>
    <div>
    <div className='container-fluid category-body'>
    <div className="row pb-5">
    
{productList && productList.length > 0 && productList? (productList.map(productItem=>{
return <ProjectTile products={productItem} key={productItem}/>})) : null }
</div>
</div>
</div>
    </div>
  
  );
}

export default Listing;
