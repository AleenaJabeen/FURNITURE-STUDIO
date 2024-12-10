import React from "react";
import "../../css/ShoppingCSS/allProducts.css";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
function ProjectTile({ products, handleAddtoCart }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/product-details/${products._id}`); // Navigate to the product details page
  };

  return (
    <>
      {/* <Banner image={categoryImage} title={categoryName} /> */}

      <div className="col-lg-3 col-md-4 col-sm-6 col-12 productContainer g-5">
        <div className="productCard text-center">
          <img
            src={products?.image}
            alt={products?.title}
            onClick={handleClick}
          />
          
          {products?.totalStock === 0 ? (
            <button className="btn rounded-0 w-100 cartBtn fw-bold">
              Out of Stock
            </button>
          ) : (
            <button
              className="btn rounded-0 w-100 cartBtn fw-bold"
              onClick={() =>
                handleAddtoCart(products?._id, products?.totalStock)
              }
            >
            <FaCartShopping  className="fs-2 pb-2"/>
            </button>
            
          )}
          
        </div>
        <div className="card-body">
          <h2 className="fs-5 fw-bold mb-2 mt-2"
          style={{color:"var(--text-color)"}}>{products?.title}</h2>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span
              className={`${
                products?.salePrice > 0 ? "text-decoration-line-through" : ""
              } fs-6 fw-semibold`}
              style={{color:"var(--primary-color)"}}
            >
              Rs. {products?.price}
            </span>
            {products?.salePrice > 0 ? (
              <span className="fs-6 fw-bold" style={{color:"var(--primary-color)"}}>Rs. {products?.salePrice}</span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectTile;
