import React from 'react';

const OrderList = () => {
  return (
    <div className="order-list">
      <h2>Order List</h2>
      <div className="order-item">
        <p>Order 1</p>
        <button className="cancel-button">Cancel</button>
      </div>
      <div className="order-item">
        <p>Order 2</p>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default OrderList;

