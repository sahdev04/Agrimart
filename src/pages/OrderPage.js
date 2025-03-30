import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderPage.css"; // CSS for styling

const OrderPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState([]);
  const [userOrders, setUserOrders] = useState([]);

  // Dummy Orders Data (Assume User ID: 1 is Logged In)
  const allOrders = [
    {
      id: 1,
      userId: 1, // Logged-in User ID
      image: "/assets/fertilizer.png",
      name: "Elevate your hair care routine...",
      quantity: 1,
      price: "₹60",
      status: "Processing",
      date: "3/30/2025",
    },
    {
      id: 2,
      userId: 2, // Another User's Order
      image: "/assets/fertilizer.png",
      name: "Organic Fertilizer for Plants",
      quantity: 2,
      price: "₹120",
      status: "Shipped",
      date: "3/25/2025",
    },
    {
      id: 3,
      userId: 1, // Logged-in User ID
      image: "/assets/product3.jpg",
      name: "Natural Farming Pesticide",
      quantity: 1,
      price: "₹80",
      status: "Delivered",
      date: "3/20/2025",
    },
  ];

  useEffect(() => {
    // Fetch Only Logged-in User's Orders
    const loggedInUserId = 1; // Change as per Auth Context
    setUserOrders(allOrders.filter((order) => order.userId === loggedInUserId));
  }, []);

  // Handle Filter Logic
  const handleFilterChange = (status) => {
    setFilter((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  // Filter Orders Based on Selection
  const filteredOrders =
    filter.length > 0 ? userOrders.filter((o) => filter.includes(o.status)) : userOrders;

  return (
    <div className="order-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        {/* Home Icon → Navigate to Home */}
        <span onClick={() => navigate("/")} className="breadcrumb-link">
          <img src="/assets/home.png" alt="Home" className="home-icon" />
        </span>

        <span> › </span>

        {/* Dashboard → Navigate to Profile Page */}
        <span onClick={() => navigate("/profile")} className="breadcrumb-link">
          Dashboard
        </span>

        <span> › My Orders</span>
      </div>

      <div className="order-container">
        {/* Sidebar Filters */}
        <div className="filters">
          <h3>Filters</h3>
          <p>Order Status</p>
          {["Processing", "Shipped", "Delivered", "Cancelled", "Pending"].map(
            (status) => (
              <div key={status} className="filter-option">
                <input
                  type="checkbox"
                  checked={filter.includes(status)}
                  onChange={() => handleFilterChange(status)}
                />
                <label>{status}</label>
              </div>
            )
          )}
        </div>

        {/* Order List */}
        <div className="order-list">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div key={order.id} className="order-card">
                <img src={order.image} alt={order.name} className="product-img" />
                <div className="order-info">
                  <h4>{order.name}</h4>
                  <p>Quantity: {order.quantity}</p>
                  <p className="price">{order.price}</p>
                </div>
                <div className="order-status">
                  <p className="status">{order.status}</p>
                  <p className="date">📅 {order.date}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-orders">You have no orders yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
