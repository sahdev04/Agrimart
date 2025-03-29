import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
   const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart ({cart.length} items)</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {/* Left Side: Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />

                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>

                  {/* Quantity Controls */}
                  <div className="cart-item-controls">
                    <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span className="cart-item-quantity">{item.quantity}</span>
                    <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                    <p className="cart-item-price">₹{item.price * item.quantity}</p>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Cart Summary */}
          <div className="cart-summary">
            <p className="summary-item">Subtotal: <span>₹{calculateTotal()}</span></p>
            <p className="summary-item">Sales Tax: <span>₹0.00</span></p>
            <p className="summary-total">Grand Total: <span>₹{calculateTotal()}</span></p>

            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
        ✔ Check out
      </button>
          </div>
        </div>
      )}

      {/* Extra Info */}
      <div className="cart-info">
        <div className="info-item">✔ 100% Safe & Secure Payments</div>
        <div className="info-item">✔ Easy returns and replacements</div>
        <div className="info-item">✔ Trusted Shipping</div>
      </div>
    </div>
  );
};

export default Cart;
