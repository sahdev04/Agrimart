import React from "react";
import "../styles/Signup.css";
const Signup = () => {
  return (
    <div className="signup">
      <h1>Signup</h1>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="signup-btn">Signup</button>
    </div>
  );
};
export default Signup;
