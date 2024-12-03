import React from 'react';
import '../../css/ShoppingCSS/allProducts.css';
import { useNavigate } from "react-router-dom";
function ProjectTile({products}) {
  const navigate = useNavigate();
  const handleClick = () => {
   
    navigate(`/shop/product-details/${products._id}`); // Navigate to the product details page
  };

  return (
    <>
      {/* <Banner image={categoryImage} title={categoryName} /> */}
      
      <div className="col-md-4 col-12 productContainer g-5">
        <div className="productCard text-center" onClick={handleClick}>
        <img src={products?.image} alt={products?.title}/>
          <button className="btn rounded-0 w-100 cartBtn fw-bold"  >
            Add to Cart
          </button>
        </div>
        </div>
   
    </>
  )
}

export default ProjectTile
