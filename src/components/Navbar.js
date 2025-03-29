import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { CartContext } from "../context/CartContext"; // ✅ Import Cart Context
import "../styles/Navbar.css"; 
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // ✅ Current page का path पता करने के लिए
  const { cart } = useContext(CartContext); // ✅ Cart items को लाने के लिए
  const navigate = useNavigate();

  return (
    <nav className="navbar">
     <div className="logo-container">
        <img src="assets/logo.png" alt="Agrimart Logo" className="navbar-logo" />
      </div>

      {/* Center - Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
        <li><Link to="/support" className={location.pathname === "/support" ? "active" : ""}>Support</Link></li>
      </ul>

      {/* Right - Search bar & Icons */}
      <div className="navbar-right">
        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn"><FaSearch /></button>
        </div>

        {/* Cart Icon with Dynamic Count */}
        <Link to="/cart" className="icon cart-icon">
          <FaShoppingCart />
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>

        {/* Profile Icon */}
        <Link to="/profile" className="icon"><FaUser /></Link>

        {/* Login Button */}
        <button className="login-btn" onClick={() => navigate("/login")}>
        Login
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
