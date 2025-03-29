import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css";

const productData = {
  1: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
  2: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
  3: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
  4: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
  5: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
  6: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
  7: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
  8: {
    name: "Lice Neem Wood Comb",
    description:
      "Elevate your hair care routine with our Bamboo Hair Brush Stand...",
    price: 80,
    originalPrice: 80,
    discount: "0% OFF",
    image: "/assets/fertilizer.png",
    rating: 0,
    reviews: 0,
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData[id];
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem(`reviews-${id}`)) || []
  );

  const handleAddToCart = () => {
    setCartAdded(true);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ id, ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleReviewSubmit = () => {
    if (rating === 0 || reviewText.trim() === "") {
      alert("Please provide a rating and a review!");
      return;
    }

    const newReview = { rating, text: reviewText };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
    setRating(0);
    setReviewText("");
  };

  return (
    <div className="product-container">
      <div className="product-left">
        <img src={product.image} alt={product.name} className="main-image" />
        <button
          className={`cart-button ${cartAdded ? "go-to-cart" : ""}`}
          onClick={cartAdded ? () => navigate("/cart") : handleAddToCart}
        >
          {cartAdded ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>

      <div className="product-right">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <p className="price">
          <span className="current-price">₹{product.price}</span>
          <span className="discount">{product.discount}</span>
          <span className="original-price">₹{product.originalPrice}</span>
        </p>

        <div className="rating">
          ⭐ {product.rating} ({product.reviews} Reviews)
        </div>

        <div className="quantity">
          <span>Quantity:</span>
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <h3>Specifications</h3>

        <h3>Ratings & Reviews</h3>
        <p className="review-score">
          <span className="big-score">{reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : "0.0"}</span> 
          {reviews.length} Ratings & {reviews.length} Reviews
        </p>

        <div className="review-bars">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="review-bar">
              <span>{star} ★</span>
              <div className="bar"></div>
              <span>{reviews.filter((r) => r.rating === star).length}</span>
            </div>
          ))}
        </div>

        {reviews.length === 0 ? (
          <p className="no-reviews">
            No reviews yet. Be the first to review this product!
          </p>
        ) : (
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <div key={index} className="review-item">
                <span className="star-rating">{"⭐".repeat(review.rating)}</span>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* Review Section */}
        <div className="review-section">
          <h3>Rate & Review Product</h3>

          <div className="star-rating-input">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= rating ? "selected" : ""}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="Write your review here..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <button className="submit-review" onClick={handleReviewSubmit}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
