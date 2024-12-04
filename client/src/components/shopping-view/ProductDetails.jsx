import React,{useEffect} from "react";
import "../../css/ShoppingCSS/ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductDetails

} from "../../store/shop/products-slice";
import { addToCart, fetchCartItems } from "../../store/shop/cart-slice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetails() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails } = useSelector(
    (state) => state.shoppingProducts
  );
  function handleAddToCart(getCurrentProductId, getTotalStock) {
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          const message = `Only ${getQuantity} quantity can be added for this item`;
          toast.error(message, {
            position: "bottom-right",
            autoClose: 3000,
            style: {
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "'Arial', sans-serif",
              padding: "15px",
              color: "#caa571",
              backgroundColor: "#000000",
              textAlign: "center",
            },
          });

          return;
        }
      }
    }
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        const message = "Product is added to cart successfully!";
          toast.success(message, {
            position: "bottom-right",
            autoClose: 3000,
            style: {
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "'Arial', sans-serif",
              padding: "15px",
              color: "#caa571",
              backgroundColor: "#000000",
              textAlign: "center",
            },
          });
      }
    });
  }
  

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
            <p className="m-0 lh-1 text-white pb-2">Category:{productDetails?.category==="furniture"?"Luxury furniture":productDetails?.category}</p>
            <button className="btn rounded-0 w-50 cartbtn" onClick={() =>
                  handleAddToCart(
                    productDetails?._id,
                    productDetails?.totalStock
                  )
                }>Add to Cart</button>
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
