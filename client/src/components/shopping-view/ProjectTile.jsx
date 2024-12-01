import React from 'react';
import '../../css/ShoppingCSS/allProducts.css';
function ProjectTile({products}) {
  console.log(products,'products');
  return (
    <>
      {/* <Banner image={categoryImage} title={categoryName} /> */}
      
      <div className="col-md-4 col-12 productContainer g-5">
        <div className="productCard text-center" >
        <img src={products?.image} alt={products?.title}/>
          <button className="btn rounded-0 w-100 cartBtn fw-bold"  >
            Add to Cart
          </button>
          <div className="span">{products?.category}</div>
        </div>
        </div>
   
    </>
  )
}

export default ProjectTile
