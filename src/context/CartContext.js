import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";  // ✅ Import Toast Notifications
import "react-toastify/dist/ReactToastify.css";  // ✅ Import Toast Styles

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🚀 Load Cart from Local Storage on App Start
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // 📌 Save Cart to Local Storage on Update
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🛒 Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    toast.success(`${product.name} added to cart! 🛒`, { autoClose: 2000 });
  };

  // 🔍 Check if Item is in Cart
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // ➕ Increase Quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.info("Quantity increased! ✅", { autoClose: 1500 });
  };

  // ➖ Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
        )
    );
    toast.info("Quantity decreased! ⚡", { autoClose: 1500 });
  };

  // ❌ Remove from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.error("Item removed from cart ❌", { autoClose: 2000 });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
