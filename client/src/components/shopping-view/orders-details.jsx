import React,{useState} from 'react';
import '../../css/ShoppingCSS/orders.css';
import { closeIcon } from '../../assets';
import { useSelector } from "react-redux";


function ShoppingOrderDetailsView({closeModal, orderDetails }) {

    const { user } = useSelector((state) => state.auth);

  return (
    <div className='dialogBox'>
    <div className='d-flex justify-content-end close' onClick={()=>closeModal()}><img src={closeIcon} alt="closeicon" /></div>
    <div className="container row">
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order ID</p>
        <label>{orderDetails?._id}</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order Date</p>
        <label>{orderDetails?.orderDate.split("T")[0]}</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order Price</p>
        <label>${orderDetails?.totalAmount}</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Payment method</p>
        <label>{orderDetails?.paymentMethod}</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Payment Status</p>
        <label>{orderDetails?.paymentStatus}</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order Status</p>
        <label><span
                        className={`badge py-2 px-3 rounded-pill ${
                          orderDetails?.orderStatus === "confirmed"
                            ? "text-bg-success"
                            : orderDetails?.orderStatus === "rejected"
                            ? "text-bg-danger"
                            : "text-bg-secondary"
                        }`}
                      >
                        {orderDetails?.orderStatus}
                      </span></label>
    </div>
    </div>
    <hr />
    <div className="detail container row">
        <div className="grid fw-bold">Order Details</div>
            <ul className='grid'>
            {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
                ? orderDetails?.cartItems.map((item) => (
                <li className='d-flex justify-content-between align-items-center'>
                    <span>Title: {item.title}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span>Price: ${item.price}</span>
                </li>
                ))
                : null}
            </ul> 
            <div className="grid fw-bold">Shipping Information</div>
            
                <div className='grid row'>
                <span>{user.userName}</span>
              <span>{orderDetails?.addressInfo?.address}</span>
              <span>{orderDetails?.addressInfo?.city}</span>
              <span>{orderDetails?.addressInfo?.pincode}</span>
              <span>{orderDetails?.addressInfo?.phone}</span>
              <span>{orderDetails?.addressInfo?.notes}</span>
                </div> 
    </div>
    
        </div>
  )
}

export default ShoppingOrderDetailsView;
