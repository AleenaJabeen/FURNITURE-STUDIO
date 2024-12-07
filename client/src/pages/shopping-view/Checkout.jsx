import React from "react";
import "../../css/ShoppingCSS/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity } from "../../store/shop/cart-slice";

export default function Checkout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const totalCartAmount =
    cartItems && cartItems.items && cartItems.items.length > 0
      ? cartItems.items.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  function handleUpdateQuantity(getCartItem, typeOfAction) {
    // if (typeOfAction == "plus") {
    //   let getCartItems = cartItems.items || [];

    //   if (getCartItems.length) {
    //     const indexOfCurrentCartItem = getCartItems.findIndex(
    //       (item) => item.productId === getCartItem?.productId
    //     );

    //     const getCurrentProductIndex = productList.findIndex(
    //       (product) => product._id === getCartItem?.productId
    //     );
    //     const getTotalStock = productList[getCurrentProductIndex].totalStock;

    //     console.log(getCurrentProductIndex, getTotalStock, "getTotalStock");

    //     if (indexOfCurrentCartItem > -1) {
    //       const getQuantity = getCartItems[indexOfCurrentCartItem].quantity;
    //       if (getQuantity + 1 > getTotalStock) {
    //         const message = `Only ${getQuantity} quantity can be added for this item`;
    //         toast.error(message, {
    //           position: "bottom-right",
    //           autoClose: 3000,
    //           style: {
    //             fontSize: "16px",
    //             fontWeight: "bold",
    //             fontFamily: "'Arial', sans-serif",
    //             padding: "15px",
    //             color: "#caa571",
    //             backgroundColor: "#000000",
    //             textAlign: "center",
    //           },
    //         });

    //         return;
    //       }
    //     }
    //   }
    // }

    dispatch(
      updateCartQuantity({
        userId: user?.id,
        productId: getCartItem?.productId,
        quantity:
          typeOfAction === "plus"
            ? getCartItem?.quantity + 1
            : getCartItem?.quantity - 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        console.log("Cart item is updated successfully");
      }
    });
  }

  return (
    <div className="container-fluid checkoutpage">
      <div className="row p-md-5">
        <div className="col-lg-6">
          <h3>Contact</h3>
          <div className="row">
            <div className="col">
              <input type="email" className="p-2 mb-2 w-100" />
            </div>
          </div>
          <h3>Delivery</h3>
          <div className="row">
            <div className="col">
              <select id="country" className="p-2 w-100">
                <option value="Pakistan">Pakistan</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="First Name"
                className=" p-2 my-2 w-100"
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Last Name"
                className=" p-2 my-2  w-100"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Address"
                className="p-2 my-2  w-100"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="City"
                className="p-2 my-2  w-100"
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Postal Code"
                className="p-2 my-2 w-100"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Phone number"
                className="p-2 my-2 w-100"
              />
            </div>
          </div>
          <div className="p-2 mt-2 border rounded-0 radioBtns">
            <input
              type="radio"
              id="cashOnDelivery"
              name="payment"
              value="Cash-On-Delivery"
            />
            <label htmlFor="cashOnDelivery" className="ps-2">
              Cash On Delivery
            </label>
          </div>
          <div className="p-2 border border-top-0 rounded-0 radioBtns">
            <input type="radio" id="viaCard" name="payment" value="Via-Card" />
            <label htmlFor="viaCard" className="ps-2">
              Pay with PayPal
            </label>
          </div>
          <button className=" mt-3 p-2 w-100 CheckBtn">Complete Order</button>
        </div>
        <div className="col-lg-6 mt-5">
          {cartItems?.items?.map((cartItem) => (
            <div className="listCart">
              <div className="item mb-5">
                <div className="image">
                  <img src={cartItem?.image} alt={cartItem?.title} />
                </div>
                <div className="checkout-info align-items-center">
                  <div className="name ms-1">{cartItem?.title}</div>
                  <div className="price">
                    ${" "}
                    {cartItem?.salePrice > 0
                      ? cartItem?.salePrice
                      : cartItem?.price}
                  </div>
                  <div className="quantity">
                    <button
                      className="minus"
                      disabled={cartItem?.quantity === 1}
                      onClick={() => handleUpdateQuantity(cartItem, "minus")}
                    >
                      &#8722;
                    </button>
                    <span>{cartItem?.quantity}</span>
                    <button
                      className="plus"
                      onClick={() => handleUpdateQuantity(cartItem, "plus")}
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between px-3">
            <h6 style={{ color: "var(--primary-color)" }}>Subtotal:</h6>
            <h6>${totalCartAmount}</h6>
          </div>
          <div className="d-flex justify-content-between px-3">
            <h6 style={{ color: "var(--primary-color)" }}>Shipping:</h6>
            <h6>Rs. 199</h6>
          </div>
          <div className="d-flex justify-content-between p-3">
            <h4 style={{ color: "var(--primary-color)" }}>Total:</h4>
            <h4>Rs. 22,000</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
