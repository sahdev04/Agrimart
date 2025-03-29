import React, { useEffect } from "react";
import "../styles/OrderPlacedPopup.css";
import { useNavigate } from "react-router-dom";

const OrderPlacedPopup = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 5 seconds बाद home page पर redirect करें
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="order-popup-overlay">
      <div className="order-popup">
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Thank you for shopping with us! Redirecting to home...</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default OrderPlacedPopup;
