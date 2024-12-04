import React from "react";
import "../../css/ShoppingCSS/allProducts.css";
import { useNavigate } from "react-router-dom";
function ProjectTile({ products, handleAddtoCart }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/product-details/${products._id}`); // Navigate to the product details page
  };

  return (
    <>
      {/* <Banner image={categoryImage} title={categoryName} /> */}

      <div className="col-lg-3 col-md-4 col-6 productContainer g-5">
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
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectTile;
