import React from "react";
import "../styles/ProductPage.css";
const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Product Details</h1>
      <p>Description of the product goes here.</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};
export default ProductPage;
