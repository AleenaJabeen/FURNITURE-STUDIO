import React,{useState} from 'react';
import '../../css/ShoppingCSS/orders.css';
import { closeIcon } from '../../assets';

function ShoppingOrderDetailsView({closeModal}) {
  return (
    <div className='dialogBox'>
    <div className='d-flex justify-content-end close' onClick={()=>closeModal()}><img src={closeIcon} alt="closeicon" /></div>
    <div className="container row">
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order ID</p>
        <label>1234</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order Date</p>
        <label>1234</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order Status</p>
        <label>1234</label>
    </div>
    <div className='d-flex justify-content-between align-items-center dialogContent'>
        <p>Order Price</p>
        <label>1234</label>
    </div>
    </div>
    <hr />
    <div className="detail container row">
        <div className="grid fw-bold">Order Details</div>
            <ul className='grid'>
                <li className='d-flex justify-content-between align-items-center'>
                    <span>Product One</span>
                    <span>$100</span>
                </li>
            </ul> 
            <div className="grid fw-bold">Shipping Information</div>
            
                <div className='grid row'>
                    <span>John doe</span>
                    <span>Address</span>
                    <span>City</span>
                    <span>Pincode</span>
                    <span>Phone</span>
                    <span>Notes</span>
                </div> 
    </div>
    
        </div>
  )
}

export default ShoppingOrderDetailsView;
