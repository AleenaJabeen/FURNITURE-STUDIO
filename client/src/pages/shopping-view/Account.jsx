import React,{useState} from 'react';
import Banner from '../../components/ui/AboutPage/Banner';
import { accountBanner } from '../../assets';
import styles from '../../css/ShoppingCSS/Account.module.css';
import Orders from '../../components/shopping-view/Orders';
import Address from '../../components/shopping-view/Address';

function Account() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleButtonClick = (component) => {
      setSelectedComponent(component);
      console.log(selectedComponent)
    };

    

  return (
    <>
    <Banner image={accountBanner} title="My Account"/>
    <div className={`container-fluid ${styles.accountSection} p-5`}>
    <div style={{ textAlign: 'center' }} className='row'>
      <div onClick={() => handleButtonClick("orders")} className={`${selectedComponent==="orders"?styles.parentBoxActive:""} ${styles.parentBox} col-md-2 me-2`}>Orders</div>
      <div onClick={() => handleButtonClick("address") } className={`${selectedComponent==="address"?styles.parentBoxActive:""} ${styles.parentBox} col-md-2 ms-2`}>Address</div>

      <div>
        {selectedComponent === "orders" && <Orders />}
        {selectedComponent === "address" && <Address />}
      </div>
    </div>
            </div>
        
    </>
  )



}


export default Account;
