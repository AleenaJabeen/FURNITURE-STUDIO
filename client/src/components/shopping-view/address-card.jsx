import React from 'react';
import styles from '../../css/ShoppingCSS/Account.module.css';

function AddressCard({addressInfo,handleDeleteAddress,handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,}) {
  return (
    
    <div className={`${styles.addressCard}  ${
        selectedId?._id === addressInfo?._id
          ? styles.selectedAddressCard
          : styles.addressCard
      } col-md-6 col-12 me-3 mb-2 p-3`} onClick={
      setCurrentSelectedAddress
        ? () => setCurrentSelectedAddress(addressInfo)
        : null
    }>
      <label>Address: {addressInfo?.address}</label>
      <label>City: {addressInfo?.city}</label>
      <label>Pincode: {addressInfo?.pincode}</label>
      <label>Phone:{addressInfo?.phone}</label>
      <label>Notes:{addressInfo?.notes}</label>
      <div className='d-flex gap-5 justify-content-between w-100'>
        <button onClick={()=>handleEditAddress(addressInfo)} className={`${styles.editBtn}`}>Edit</button>
        <button onClick={()=>handleDeleteAddress(addressInfo)} className={`${styles.editBtn}`}>Delete</button></div>
    </div>
  )
}

export default AddressCard;
