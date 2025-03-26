import React from "react";
import "../styles/Checkout.css";
const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <p>Enter your details to complete the purchase.</p>
      <button className="confirm-order">Confirm Order</button>
    </div>
  );
};
export default Checkout;