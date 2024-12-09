import React from "react";
import Address from '../../components/shopping-view/Address'
import "../../css/ShoppingCSS/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity } from "../../store/shop/cart-slice";
import { createNewOrder } from "../../store/shop/order-slice"; // Assuming you already have this action
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51QTfTvGDYLefQimIPbucS34forh0725jUsV7RByJ24Cst6w074S9ohqCSw2YqIN6OldKP3W32NjI6b1A0v41PeHI00yU2Hp5MS");

export default function Checkout() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [currentSelectedAddress, setCurrentSelectedAddress] = React.useState(
    null
  );
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
        console.log("Cart item updated successfully");
      }
    });
  }

  async function handleInitiateStripePayment() {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to proceed.");
      return;
    }

    if (currentSelectedAddress === null) {
      alert("Please select one address to proceed.");
      return;
    }

    const orderData = {
      userId: user?.id,
      cartId: cartItems?._id,
      cartItems: cartItems.items.map((item) => ({
        productId: item?.productId,
        title: item?.title,
        image: item?.image,
        price: item?.salePrice > 0 ? item?.salePrice : item?.price,
        quantity: item?.quantity,
      })),
      addressInfo: {
        addressId: currentSelectedAddress?._id,
        address: currentSelectedAddress?.address,
        city: currentSelectedAddress?.city,
        pincode: currentSelectedAddress?.pincode,
        phone: currentSelectedAddress?.phone,
        notes: currentSelectedAddress?.notes,
      },
      orderStatus: "pending",
      paymentMethod: "stripe",
      paymentStatus: "pending",
      totalAmount: totalCartAmount,
      orderDate: new Date(),
      orderUpdateDate: new Date(),
      payerId: ''
    };

    // Dispatch order creation and handle Stripe session
    dispatch(createNewOrder(orderData)).then(async (data) => {
      if (data?.payload?.success) {
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.payload.sessionId, // Ensure backend sends sessionId
        });

        if (error) {
          console.error("Stripe Checkout error:", error);
        }
      } else {
        alert("Failed to initiate payment. Please try again.");
      }
    });
  }

  return (
    <div className="container-fluid checkoutpage">
      <div className="row p-md-5">
        <div className="col-lg-6">
        <Address
          selectedId={currentSelectedAddress}
          setCurrentSelectedAddress={setCurrentSelectedAddress}
        />
          {/* <h3>Contact</h3>
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
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cashOnDelivery" className="ps-2">
              Cash On Delivery
            </label>
          </div>
          <div className="p-2 border border-top-0 rounded-0 radioBtns">
            <input
              type="radio"
              id="viaStripe"
              name="payment"
              value="stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="viaStripe" className="ps-2">
              Stripe (Credit/Debit Card)
            </label>
          </div> */}
          <button
            className=" mt-3 p-2 w-100 CheckBtn"
            onClick={handleInitiateStripePayment}
            // disabled={paymentMethod !== "stripe"}
          >
            Pay With Stripe
          </button>
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
            <h6 style={{ color: "var(--primary-color)" }}>Total:</h6>
            <h6>${totalCartAmount}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
