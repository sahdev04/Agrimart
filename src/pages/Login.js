import React from "react";
import "../styles/Login.css";
const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button className="login-btn">Login</button>
    </div>
  );
};
export default Login;