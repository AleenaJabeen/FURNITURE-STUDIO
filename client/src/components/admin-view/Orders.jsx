import React, { useEffect, useState } from "react";
import "../../css/ShoppingCSS/orders.css";
import AdminOrderDetailsView from "./order-details";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  resetOrderDetails,
} from "../../store/admin/order-slice";

function AdminOrders() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {setShowModal(false);
    dispatch(resetOrderDetails());
  };

  const { orderList, orderDetails } = useSelector((state) => state.adminOrder);
  const dispatch = useDispatch();

  function handleFetchOrderDetails(getId) {
    dispatch(getOrderDetailsForAdmin(getId));
  }

  useEffect(() => {
    dispatch(getAllOrdersForAdmin());
  }, [dispatch]);

  console.log(orderDetails, "orderList");

  useEffect(() => {
    if (orderDetails !== null) setShowModal(true);
  }, [orderDetails]);

  return (
    <>
      <div className="container-fluid ordersSection">
        <h2>All Orders</h2>
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
                    <td>Rs. {orderItem?.totalAmount}</td>
                    <td>
                      <button onClick={() => {
                          setShowModal(true);
                          dispatch(resetOrderDetails());
                          handleFetchOrderDetails(orderItem?._id);
                        }}
                    >
                        View Details
                      </button>
                      {showModal && (
                        <AdminOrderDetailsView closeModal={closeModal} orderDetails={orderDetails} />
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

export default AdminOrders;
