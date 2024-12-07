import React, { useState } from 'react';
import '../../css/ShoppingCSS/orders.css'
import { closeIcon } from '../../assets';
import CommonForm from '../common/Form';

const initialFormData = {
    status:""
}


function AdminOrderDetailsView({closeModal}) {

    const [formData,setFormData] =useState(initialFormData)
   function handleUpdateStatus(e){
e.preventDefault();
   }
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
<div className='row select'>
    <CommonForm
   formControls={[
    {
      label: "Order Status",
      name: "status",
      componentType: "select",
      options: [
        { id: "pending", label: "Pending" },
        { id: "inProcess", label: "In Process" },
        { id: "inShipping", label: "In Shipping" },
        { id: "delivered", label: "Delivered" },
        { id: "rejected", label: "Rejected" },
      ],
    },
  ]}
    formData={formData}
    setFormData={setFormData}
    buttonText={'Update Order Status'}
    onSubmit={handleUpdateStatus}/>
</div>

    </div>
  )
}

export default AdminOrderDetailsView;
