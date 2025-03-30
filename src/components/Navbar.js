import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext"; 
import { useAuth } from "../context/AuthContext"; 
import "../styles/Navbar.css"; 

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { user, logout } = useAuth(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".user-avatar")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src="/assets/logo.png" alt="Agrimart Logo" className="navbar-logo" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
        <li><Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
        <li><Link to="/support" className={location.pathname === "/support" ? "active" : ""}>Support</Link></li>
      </ul>

      {/* Right Section */}
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

        {/* If User is Logged In → Show Avatar */}
        {user ? (
          <div className="user-avatar" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src="/assets/girl.png" alt="User Avatar" className="avatar" />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile"> Profile</Link>
                <Link to="/orders">My Orders</Link>
                <button onClick={() => {
                  logout();
                  setDropdownOpen(false);
                  navigate("/login");
                }}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
