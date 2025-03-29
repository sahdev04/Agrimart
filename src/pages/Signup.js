import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../styles/Signup.css";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create your account</h2>
        <p className="subtitle">It's totally free and super easy</p>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label>Your Email</label>
            <input type="email" placeholder="Enter your Email" />
          </div>

          <div className="input-group password-field">
            <label>Your Password</label>
            <input 
              type={passwordVisible ? "text" : "password"} 
              placeholder="Enter your Password" 
            />
            <span 
              className="password-toggle"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By creating an account, you agree to the 
              <span className="terms"> Terms and Conditions </span> 
              and our <span className="privacy">Privacy Policy</span>.
            </label>
          </div>

          <button className="signup-btn">Sign Up</button>
        </form>

        <div className="separator">
          <div className="line"></div>
          <span>Or, register with Google</span>
          <div className="line"></div>
        </div>

        <button className="google-signup-btn">
          <img src="/assets/google.png" alt="Google Logo" className="google-logo" />
          Sign in with Google
        </button>

        <p className="login-link">
          Already User? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
