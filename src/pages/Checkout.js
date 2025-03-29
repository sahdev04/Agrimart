import React, { useState } from "react";
import "../styles/Checkout.css";
import OrderPlacedPopup from "../components/OrderPlacedPopup";

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("Cash on Delivery");
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // Popup State
  const [showCouponField, setShowCouponField] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    alternateMobile: "",
    pincode: "",
    address: "",
    locality: "",
    landmark: "",
    city: "",
    state: "",
    addressType: "Home"
  });

  // Toggle Address Form
  const toggleAddressForm = () => {
    setShowAddressForm(!showAddressForm);
    setEditIndex(null);
    setNewAddress({
      name: "",
      mobile: "",
      alternateMobile: "",
      pincode: "",
      address: "",
      locality: "",
      landmark: "",
      city: "",
      state: "",
      addressType: "Home"
    });
  };

  // Handle Input Change
  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // Save or Update Address
  const saveAddress = () => {
    if (!newAddress.name || !newAddress.mobile || !newAddress.address || !newAddress.pincode || !newAddress.city || !newAddress.state) {
      alert("Please fill all required fields!");
      return;
    }

    if (editIndex !== null) {
      let updatedAddresses = [...addresses];
      updatedAddresses[editIndex] = newAddress;
      setAddresses(updatedAddresses);
    } else {
      setAddresses([...addresses, newAddress]);
    }

    toggleAddressForm();
  };

  // Edit Address
  const editAddress = (index) => {
    setEditIndex(index);
    setNewAddress(addresses[index]);
    setShowAddressForm(true);
  };

  // Delete Address
  const deleteAddress = (index) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      let updatedAddresses = addresses.filter((_, i) => i !== index);
      setAddresses(updatedAddresses);
    }
  };
  const handlePayment = () => {
    setShowPopup(true); // Show Popup on Click
  };


  return (
    <div className="checkout-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <span className="step active">✔ Address</span>
        <span className="step">Payment Details</span>
      </div>

      <div className="checkout-content">
        {/* Left Section - Address */}
        <div className="checkout-left">
          <h2>Select Address</h2>

          {/* Address List */}
          {addresses.length === 0 ? (
            <p className="no-address">No addresses found, please add a new address...</p>
          ) : (
            addresses.map((addr, index) => (
              <div key={index} className="saved-address">
                <p><strong>{addr.name}</strong> ({addr.addressType})</p>
                <p>{addr.address}, {addr.locality}, {addr.city}, {addr.state} - {addr.pincode}</p>
                <p>📞 {addr.mobile} {addr.alternateMobile && ` | 📞 ${addr.alternateMobile}`}</p>

                {/* Edit & Delete Buttons */}
                <div className="address-actions">
                  <button className="edit-btn" onClick={() => editAddress(index)}>✏ Edit</button>
                  <button className="delete-btn" onClick={() => deleteAddress(index)}>🗑 Delete</button>
                </div>
                <hr />
              </div>
            ))
          )}

          {/* Add New Address Button */}
          <button className="add-address" onClick={toggleAddressForm}>
            {showAddressForm ? "✖ Cancel" : "+ Add New Address"}
          </button>

          {/* Address Form */}
          {showAddressForm && (
            <div className="address-form">
              <h3>{editIndex !== null ? "Edit Address" : "Add Delivery Address"}</h3>
              <input type="text" name="name" placeholder="Name *" value={newAddress.name} onChange={handleChange} required />

              <div className="input-group">
                <input type="text" name="mobile" placeholder="Mobile Number *" value={newAddress.mobile} onChange={handleChange} required />
                <input type="text" name="alternateMobile" placeholder="Alternate Mobile (Optional)" value={newAddress.alternateMobile} onChange={handleChange} />
              </div>

              <input type="text" name="pincode" placeholder="Pincode *" value={newAddress.pincode} onChange={handleChange} required />
              <input type="text" name="address" placeholder="Address *" value={newAddress.address} onChange={handleChange} required />

              <div className="input-group">
                <input type="text" name="locality" placeholder="Locality *" value={newAddress.locality} onChange={handleChange} />
                <input type="text" name="landmark" placeholder="Landmark (Optional)" value={newAddress.landmark} onChange={handleChange} />
              </div>

              <div className="input-group">
                <input type="text" name="city" placeholder="City *" value={newAddress.city} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State *" value={newAddress.state} onChange={handleChange} required />
              </div>

              <div className="address-actions">
                <button className="cancel-btn" onClick={toggleAddressForm}>Cancel</button>
                <button className="save-btn" onClick={saveAddress}>{editIndex !== null ? "Update Address" : "Save Address"}</button>
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Order Summary */}
        <div className="checkout-right">
          <h2>Order Details</h2>
          <div className="order-item">
          <img src="/assets/fertilizer.png" alt="Product" />
            <div className="order-info">
              <p className="product-name">Flowering Pots</p>
              <p className="product-price">₹60</p>
            </div>
          </div>

          <div className="price-breakdown">
            <p>Products Total: <span>₹60</span></p>
            <p>Tax (18%): <span>₹10.80</span></p>
            <p>Shipping Charges: <span className="free">Free</span></p>
          </div>

          {/* Payment Section */}
          <div className="payment-section">
            <p><strong>Payment Mode</strong></p>
            <select className="payment-select" onChange={(e) => setSelectedPayment(e.target.value)}>
              <option value="Cash on Delivery">💵 Cash on Delivery</option>
              <option value="UPI">📱 UPI Payment</option>
              <option value="Credit Card">💳 Credit/Debit Card</option>
            </select>
          </div>

          <div className="total-amount">
            <p>Total Amount: <span>₹70.80</span></p>
          </div>

          {/* Disabled if No Address */}
          <button className="checkout-btn" onClick={handlePayment}>
          Proceed To Payment
        </button>
        <div className="secure-payment">
    <div className="secure-item">
        <img src="/assets/safe.png" alt="Safe Payments" className="secure-icon" />
        <p>100% Safe & Secure Payments</p>
    </div>
    <div className="secure-item">
        <img src="/assets/exchange.png" alt="Easy Return" className="secure-icon" />
        <p>Easy return and replacements</p>
    </div>
    <div className="secure-item">
        <img src="/assets/trusted.png" alt="Trusted Shipping" className="secure-icon" />
        <p>Trusted Shipping</p>
    </div>
</div>
        </div>
        {showPopup && <OrderPlacedPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default Checkout;
