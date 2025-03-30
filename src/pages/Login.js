import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // Import Auth Context
import "../styles/Login.css"; 

const Login = () => {
  const { login } = useAuth(); // Get login function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy User Data
    const userData = {
      name: "John Doe",
      email,
      avatar: "/assets/user-avatar.png",
    };

    login(userData); // Store user in context
    if (rememberMe) {
      localStorage.setItem("user", JSON.stringify(userData)); // Save in localStorage
    }
    navigate("/"); // Redirect to home
  };

  const handleGoogleLogin = () => {
    const googleUserData = {
      name: "Google User",
      email: "googleuser@gmail.com",
      avatar: "/assets/google-avatar.png",
    };

    login(googleUserData);
    localStorage.setItem("user", JSON.stringify(googleUserData)); // Store in localStorage
    navigate("/");
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
              required
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
                required
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
          <button type="submit" className="login-btn">Sign in</button>
        </form>

        <div className="divider">Or, sign in with Google</div>

        {/* Google Sign-In Button with Image */}
        <button className="google-btn" onClick={handleGoogleLogin}>
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
