// Orders.js
import React from "react";
import "../styles/Orders.css";
const Orders = () => {
  return (
    <div className="orders">
      <h1>My Orders</h1>
      <p>View your past and current orders here.</p>
      <ul>
        <li>Order #1234 - Delivered</li>
        <li>Order #5678 - In Transit</li>
        <li>Order #9101 - Processing</li>
      </ul>
    </div>
  );
};
export default Orders;