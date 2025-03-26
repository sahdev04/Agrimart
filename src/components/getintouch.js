import React from "react";
import "../styles/getintouch.css"; // Ensure CSS is properly linked

const GetInTouch = () => {
  return (
    <div className="get-in-touch-container">
      <h2 className="title">Get in Touch</h2>
      <div className="content">
        
        {/* 🖼 Left Side - Social Media Illustration */}
        <div className="social-media-container">
          <img src="/assets/background.webp" alt="Social Media" className="social-image" />
        </div>

        {/* 📩 Right Side - Subscription Form */}
        <div className="subscription-form">
          <h2>Subscribe to receive future updates</h2>
          <p>Connect with us to get the latest updates on our products and services.</p>
          <input type="text" placeholder="Enter your name" className="input-field" />
          <input type="email" placeholder="Enter your email" className="input-field" />
          <button className="subscribe-button">Subscribe</button>
          <p className="no-spam-text">No spam guaranteed, so please don’t send any spam mail.</p>
        </div>

      </div>
    </div>
  );
};

export default GetInTouch;
