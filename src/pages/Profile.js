import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
import { FaBoxOpen } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "dau saab",
    email: "dausaab1@gmail.com",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <div className="profile-header">
          <img src="/assets/girl.png" alt="User Avatar" className="avatar" />
          <h3>Hello, {user.name}</h3>
        </div>

        <nav className="profile-nav">
          <ul>
            <li>
            <Link to="/orders" className="orders-link">
  <FaBoxOpen className="orders-icon" />
  <span className="orders-text">My Orders</span>
</Link>
            </li>
            <li className="nav-title">⚙ Account Settings</li>
            <li>
              <Link to="/profile" className="active">Profile Information</Link>
            </li>
            <li>
              <Link to="/addresses">Manage Addresses</Link>
            </li>
            <li className="nav-title">🎁 My Stuff</li>
            <li>
              <Link to="/coupons">My Coupons</Link>
            </li>
            <li>
              <Link to="/reviews">My Reviews & Ratings</Link>
            </li>
            <li>
              <Link to="/wishlist">My Wishlist</Link>
            </li>
          </ul>
        </nav>

        <button className="logout-btn">🚪 Logout</button>
      </aside>

      {/* Profile Information Section */}
      <main className="profile-content">
        <h2>Personal Information</h2>

        <div className="input-group">
          <label>User Name</label>
          <input
            type="text"
            name="name"
            value={isEditing ? updatedUser.name : user.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={isEditing ? updatedUser.email : user.email}
            onChange={handleChange}
            disabled
          />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={isEditing ? updatedUser.phone : user.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>
            Save Changes
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
      </main>
    </div>
  );
};

export default Profile;
