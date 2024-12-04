import React  from "react";
import "../../css/ShoppingCSS/cart.css";
import CartTable from "../../components/shopping-view/CartTable";
import {  useSelector } from "react-redux";
// import {useNavigate} from 'react-router-dom';

export default function Cart() {
    const { cartItems } = useSelector((state) => state.shopCart);
    const totalCartAmount =
    cartItems && cartItems.items.length > 0
      ? cartItems?.items?.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;
    
//   const navigate = useNavigate();
//   const checkoutPage =()=>{
//     navigate("/checkout")
// }
  return (
    <div className="container-fluid px-5 py-3 shoppingcart">
      <h1 className="text-center">Shopping Cart</h1>
      <div className="row">
        <div className="col-12">
        {cartItems?.items?.length > 0 ? <CartTable /> : <h4>Your cart is empty.</h4>}
        </div>
        <div className="subtotal col-12 text-end">
          <h2>
            Subtotal: <span className="amount">$ {totalCartAmount}</span>
          </h2>
          <div>
            <button className="CheckBtn rounded-0 w-25 p-2"  >
              Check out
              {/* onClick={checkoutPage} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
