import React, { useEffect, useState } from "react";
import "../../css/ShoppingCSS/orders.css";
import ShoppingOrderDetailsView from "./orders-details";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersByUserId,
  getOrderDetails,
  resetOrderDetails,
} from "../../store/shop/order-slice";

function ShoppingOrders() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { orderList, orderDetails } = useSelector((state) => state.shopOrder);

  function handleFetchOrderDetails(getId) {
    dispatch(getOrderDetails(getId));
  }

  useEffect(() => {
    dispatch(getAllOrdersByUserId(user?.id));
  }, [dispatch]);

  useEffect(() => {
    if (orderDetails !== null) setShowModal(true);
  }, [orderDetails]);

  console.log(orderDetails, "orderDetails");

  return (
    <>
      <div className="container-fluid ordersSection">
        <h2>Order History</h2>
      </div>
      <div className="orderTable">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Order Status</th>
              <th>Order Price</th>
              <th className="d-none">
                <span>Details</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList && orderList.length > 0
              ? orderList.map((orderItem) => (
                  <tr>
                    <td>{orderItem?._id}</td>
                    <td>{orderItem?.orderDate.split("T")[0]}</td>
                    <td>
                      <span
                        className={`badge py-2 px-3 rounded-pill ${
                          orderItem?.orderStatus === "confirmed"
                            ? "text-bg-success"
                            : orderItem?.orderStatus === "rejected"
                            ? "text-bg-danger"
                            : "text-bg-dark"
                        }`}
                      >
                        {orderItem?.orderStatus}
                      </span>
                    </td>
                    <td>${orderItem?.totalAmount}</td>
                    <td>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          dispatch(resetOrderDetails());
                          handleFetchOrderDetails(orderItem?._id);
                        }}
                      >
                        view details
                      </button>
                      {showModal && (
                        <ShoppingOrderDetailsView
                          closeModal={closeModal}
                          orderDetails={orderDetails}
                        />
                      )}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShoppingOrders;
