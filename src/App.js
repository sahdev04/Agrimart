import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";  // ✅ Import ToastContainer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderPage from "./pages/OrderPage";
import Profile from "./pages/Profile";
import "./styles/global.css";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import BlogDetail from "./pages/BlogDetails";
import Support from "./pages/Support";
import ChatBox from "./components/ChatBox";
import { AuthProvider } from "./context/AuthContext";



function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={2000} />  {/* ✅ ToastContainer */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/support" element={<Support />} /> 
        </Routes>
        <ChatBox />
        <Footer />
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
