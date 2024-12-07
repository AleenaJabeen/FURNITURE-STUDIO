import React,{useState} from 'react'
import '../../css/ShoppingCSS/orders.css';
import ShoppingOrderDetailsView from './orders-details';


function ShoppingOrders() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  return (
    <>
     <div className='container-fluid ordersSection'>
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
            <th className='d-none'>
              <span>Details</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>
            <button onClick={() => setShowModal(true)}>view details</button>
        {showModal && 
        <ShoppingOrderDetailsView closeModal={closeModal}/>}</td>
          </tr>
        </tbody>
      </table>
     </div>
    </>
  )
}

export default ShoppingOrders;
