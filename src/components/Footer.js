import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ✅ Left Side - Logo & Tagline */}
        <div className="footer-brand">
          <h2 className="logo">
            <img src="/logo.png" alt="Agrimart" className="footer-logo" />
          </h2>
          <p className="tagline">
            “Small Steps Today, A Greener Tomorrow” <br />
            We believe in building trust, fostering long-term relationships, 
            and delivering results that exceed expectations.
          </p>
          {/* ✅ Social Icons */}
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* ✅ Useful Links */}
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        {/* ✅ Terms Section */}
        <div className="footer-links">
          <h3>Terms</h3>
          <ul>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Disclaimer</a></li>
          </ul>
        </div>

        {/* ✅ Support Section */}
        <div className="footer-links">
          <h3>Support & Help</h3>
          <ul>
            <li><a href="#">Logistics</a></li>
            <li><a href="#">Track Orders</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>

      {/* ✅ Copyright Text */}
      <div className="footer-bottom">
        <p>© Copyright 2025 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
