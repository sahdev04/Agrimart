import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // 🛒 Cart Context Import
import "../styles/CategoryPage.css";

// 🔥 Sample Products Data
const allProducts = [
  { id: 1, name: "Premium Fertilizer", price: 500, image: "/assets/fertilizer.png", category: "Fertilizers" },
  { id: 2, name: "Organic Seeds", price: 600, image: "/assets/seed.png", category: "Seeds" },
  { id: 3, name: "Garden Tools Set", price: 700, image: "/assets/equipment.png", category: "Equipments" },
  { id: 4, name: "Decorative Pots", price: 800, image: "/assets/pot.png", category: "Pots" },
  { id: 5, name: "Advanced Fertilizer", price: 900, image: "/assets/117745_2.jpeg", category: "Fertilizers" },
  { id: 6, name: "Flowering Seeds", price: 1000, image: "/assets/BalsamRed.png", category: "Seeds" },
];

const CategoryPage = () => {
  const { categoryName } = useParams(); // 🏷️ Get category name from URL
  const navigate = useNavigate();
  const { addToCart, isInCart } = useContext(CartContext); // 🛒 Cart Functions

  // 🔥 Filtered Products Based on Category
  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2 className="category-title">{categoryName}</h2>
      
      {/* 🔥 Products List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>⭐ {4 + Math.random().toFixed(1)}/5</p> {/* Random Rating */}

              <div className="button-group">
                <button className="view-details" onClick={() => navigate(`/product/${product.id}`)}>
                  View Details
                </button>

                {isInCart(product.id) ? (
                  <button className="go-to-cart" onClick={() => navigate("/cart")}>
                    Go to Cart
                  </button>
                ) : (
                  <button className="add-to-cart" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
