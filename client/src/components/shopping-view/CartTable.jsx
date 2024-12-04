import React, { useEffect } from "react";
import "../../css/ShoppingCSS/cart.css";
import { MdDelete } from "react-icons/md";
import {
  fetchCartItems,
  deleteCartItem,
  updateCartQuantity,
} from "../../store/shop/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartTable() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
//   const { productList } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch]);

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

  function handleCartItemDelete(getCartItem) {
    dispatch(
      deleteCartItem({ userId: user?.id, productId: getCartItem?.productId })
    ).then((data) => {
      if (data?.payload?.success) {
        console.log("Cart item is deleted successfully");
      }
    });
  }

  return (
    <div className="pt-5">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.items?.map((cartItem) => (
            <tr>
              <td className="productImg">
                <img
                  src={cartItem?.image}
                  alt={cartItem?.title}
                  height="200rem"
                  width="200rem"
                />
                <div className="allDetails">
                  <span className="details">
                    <h4>{cartItem?.title}</h4>
                    <MdDelete onClick={() => handleCartItemDelete(cartItem)} />
                  </span>
                </div>
              </td>
              <td className="price">
                ${" "}
                {cartItem?.salePrice > 0
                  ? cartItem?.salePrice
                  : cartItem?.price}
              </td>
              <td className="quantities">
                <button
                  className="minus"
                  disabled={cartItem?.quantity === 1}
                  onClick={() => handleUpdateQuantity(cartItem, "minus")}
                >
                  &#8722;
                </button>
                <span className="quantity mx-2">{cartItem?.quantity}</span>
                <button
                  className="plus"
                  onClick={() => handleUpdateQuantity(cartItem, "plus")}
                >
                  &#43;
                </button>
              </td>
              <td className="totalPrice">
                $
                {(
                  (cartItem?.salePrice > 0
                    ? cartItem?.salePrice
                    : cartItem?.price) * cartItem?.quantity
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
