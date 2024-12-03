import React,{useEffect} from "react";
import "../../css/ShoppingCSS/ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductDetails

} from "../../store/shop/products-slice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails } = useSelector(
    (state) => state.shoppingProducts
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);
  return (
    <>
      <div className="container-fluid py-5 category-body">
        <div className="row px-4 justify-content-around align-items-center">
          <div className="col-lg-5 col-8">
            <img src={productDetails?.image} alt={productDetails?.title} className="productDImg" />
          </div>
          <div className="col-lg-5 product-info">
            <h1 className="mb-2 mt-3"></h1>
            <p className="mb-1 lh-1 pb-2">{productDetails?.title}</p>
            <p className="m-0 lh-1 pb-2">Rs.{productDetails?.price}</p>
            <p className="m-0 lh-1 text-white">Category:{productDetails?.category==="furniture"?"Luxury furniture":productDetails?.category}</p>
            <div className="product-quantity mb-3">
              <span className="dminus">&#8722;</span>
              <span className="quantity">1</span>
              <span className="dplus">&#43;</span>
            </div>
            <button className="btn rounded-0 w-50 cartbtn">Add to Cart</button>
            <div className="product-details">
              <span>Product Details Fit:</span> Standard <br />
              <span>Material Composition:</span> High-Quality Wood, Metal, or Fabric <br />
              <span>Features:</span> Sturdy build, ergonomic design, easy maintenance <br />
              <span>Description:</span> A stylish, modern and classic piece designed to
              elevate any living space. Crafted with premium materials, this
              furniture item offers both comfort and durability, making it a
              perfect fit for your home decor.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
