import { capturePayment } from "../../store/shop/order-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function OrderCompleted() {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const sessionId = params.get("session_id");
  
    useEffect(() => {
        if (sessionId) {
          const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));
    
          dispatch(capturePayment({ sessionId, orderId })).then((data) => {
            if (data?.payload?.success) {
              sessionStorage.removeItem("currentOrderId");
              window.location.href = "/shop/home";
            }
          });
        }
      }, [sessionId, dispatch]);
  
      return (
        <>
          <div className="text-align p-5 bg-dark">
            <h1 style={{color:"var(--primary-color)"}}>Processing Payment... Please wait!</h1>
          </div>
        </>
      );
  
}

export default OrderCompleted




