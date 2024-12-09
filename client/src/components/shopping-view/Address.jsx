import React,{useState,useEffect} from 'react';
import CommonForm from '../common/form';
import styles from '../../css/ShoppingCSS/Account.module.css';
import {addressFormControls} from '../../config';
import { useDispatch, useSelector } from "react-redux";
import { toast,ToastContainer } from "react-toastify";
import {addNewAddress,fetchAllAddresses, deleteAddress,editAddress,} from '../../store/shop/address-slice';
import AddressCard from './address-card';
import "react-toastify/dist/ReactToastify.css";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};
function Address({ setCurrentSelectedAddress, selectedId }) {

  const [formData, setFormData] = useState(initialAddressFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch=useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.shopAddress);
  function handleManageAddress(event) {
    event.preventDefault();

    if (addressList.length >= 3 && currentEditedId === null) {
      setFormData(initialAddressFormData);
      toast.success("You can add max 3 addresses", {
        position: "bottom-right",
        autoClose: 3000,
        style: {
          fontSize: "16px", 
          fontWeight: "bold", 
          fontFamily: "'Arial', sans-serif", 
          padding: "15px",   
          color: "#caa571",   
          backgroundColor: "#000000", 
          textAlign: "center",
        },
      });

      return;
    }

    currentEditedId !== null
      ? dispatch(
          editAddress({
            userId: user?.id,
            addressId: currentEditedId,
            formData,
          })
        ).then((data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllAddresses(user?.id));
            setCurrentEditedId(null);
            setFormData(initialAddressFormData);
            toast({
              title: "Address updated successfully",
            });
          }
        })
        :
       dispatch(
          addNewAddress({
            ...formData,
            userId: user?.id,
          })
        ).then((data) => {
          console.log(data);
          if (data?.payload?.success) {
            dispatch(fetchAllAddresses(user?.id));
            setFormData(initialAddressFormData);
            toast.success("Address added successfully", {
              position: "bottom-right",
              autoClose: 3000,
              style: {
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily: "'Arial', sans-serif",
                padding: "15px",
                color: "#caa571",
                backgroundColor: "#000000",
                textAlign: "center",
              },
            });
          }
        });
      
  }
  
  

  function handleDeleteAddress(getCurrentAddress) {
    dispatch(
      deleteAddress({ userId: user?.id, addressId: getCurrentAddress._id })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllAddresses(user?.id));
        toast.success("Address deleted successfully", {
          position: "bottom-right",
          autoClose: 3000,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "'Arial', sans-serif",
            padding: "15px",
            color: "#caa571",
            backgroundColor: "#000000",
            textAlign: "center",
          },
        });

      }
    });
  }

  function handleEditAddress(getCurrentAddress) {
    setCurrentEditedId(getCurrentAddress?._id);
    setFormData({
      ...formData,
      address: getCurrentAddress?.address,
      city: getCurrentAddress?.city,
      phone: getCurrentAddress?.phone,
      pincode: getCurrentAddress?.pincode,
      notes: getCurrentAddress?.notes,
    });
    
  }
  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }
  useEffect(() => {
    dispatch(fetchAllAddresses(user?.id));
  }, [dispatch]);

  console.log(addressList,"adderesmsbsnbnsbdn")

  return (
   
    <section className={styles.address}>
    <div className={`${styles.wrapper}`}>
    <div className="row container-fluid">
        {addressList && addressList.length > 0
          ? addressList.map((singleAddressItem) => (
              <AddressCard
              selectedId={selectedId}
              handleDeleteAddress={handleDeleteAddress}
              addressInfo={singleAddressItem}
              handleEditAddress={handleEditAddress}
              setCurrentSelectedAddress={setCurrentSelectedAddress}
  
              />
            ))
          : null}
      </div>
      <div className={styles.addressForm}>
      
        <h3 className='text-left'> {currentEditedId !== null ? "Edit Address" : "Add New Address"}</h3>
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={currentEditedId !== null ? "Edit" : "Add"}
          onSubmit={handleManageAddress}
          isBtnDisabled={!isFormValid()}
        />

      </div>
    </div>
  </section>
  )
}

export default Address;
