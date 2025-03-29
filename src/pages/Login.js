import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css"; // Ensure this file is linked
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for password toggle
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password, rememberMe);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in to your account</h2>
        <p className="subtext">Login to your account for a faster checkout.</p>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="input-group">
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input with Show/Hide Icon */}
          <div className="input-group password-group">
            <label>Your Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Keep me signed in</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </div>

          {/* Sign in Button */}
          <button type="submit" className="login-btn" onClick={() => navigate("/Home")}>Sign in</button>
        </form>

        <div className="divider">Or, sign in with Google</div>

        {/* Google Sign-In Button with Image */}
        <button className="google-btn">
        <img src="/assets/google.png" alt="Google" className="google-logo" />
          Sign in with Google
        </button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
