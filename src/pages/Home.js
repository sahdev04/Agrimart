import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Home.css";


const Home = () => {
  const { addToCart, isInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const scrollLeft = (id) => {
    document.getElementById(id).scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (id) => {
    document.getElementById(id).scrollBy({ left: 300, behavior: "smooth" });
  };

  // Products data with unique names and images
  const featuredProducts = [
    { id: 1, name: "Premium Fertilizer", price: 500, image: "/assets/fertilizers.png" },
    { id: 2, name: "Organic Seeds", price: 600, image: "/assets/seeds.png" },
    { id: 3, name: "Garden Tools Set", price: 700, image: "/assets/equipments.png" },
    { id: 4, name: "Decorative Pots", price: 800, image: "/assets/pots.png" }
  ];

  const bestsellerProducts = [
    { id: 5, name: "Advanced Fertilizer", price: 900, image: "/assets/117745_2.jpeg" },
    { id: 6, name: "Flowering Seeds", price: 1000, image: "/assets/flowering.webp" },
    { id: 7, name: "Handheld Sprayer", price: 1100, image: "/assets/spray.jpg" },
    { id: 8, name: "Premium Garden Tools", price: 1200, image: "/assets/gardeningtool.jpg" }
  ];

    const categories = [
      { name: "Fertilizers", image: "/assets/fertilizers.png", route: "/category/fertilizers" },
      { name: "Seeds", image: "/assets/seeds.png", route: "/category/seeds" },
      { name: "Equipments", image: "/assets/equipments.png", route: "/category/equipments" },
      { name: "Pots", image: "/assets/pots.png", route: "/category/pots" }
  ];

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  return (
    <div className="home-container">
      {/* 🔥 Carousel */}
      <div className="carousel-container">
        <Slider {...settings}>
          {["agriculturecarousel.jpg", "agriculturecarousel1.jpg", "greencarousel.jpg", "greencarousel1.jpg"].map((img, index) => (
            <div className="carousel-slide" key={index}>
              <img src={`/assets/${img}`} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>

        {/* 🔎 Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button>Search</button>
        </div>
      </div>

      {/* 🔥 Search by Category */}
      <h2 className="section-title">Search by Category</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scrollLeft("categories")}>&lt;</button>
        <div id="categories" className="scroll-content">
          {categories.map((category, index) => (
            <div
              className="category"
              key={index}
              onClick={() => handleCategoryClick(category.route)} // Navigate to category page
            >
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollRight("categories")}>&gt;</button>
      </div>

      {/* 🔥 Featured Products */}
      <h2 className="section-title">Featured Products</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scrollLeft("featured-products")}>&lt;</button>
        <div id="featured-products" className="scroll-content">
          {featuredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>⭐ {4 + Math.random().toFixed(1)}/5</p>
              <div className="button-group">
                <button className="view-details" onClick={() => navigate(`/product/${product.id}`)}>
                  View Details
                </button>
                {isInCart(product.id) ? (
                  <button className="go-to-cart" onClick={() => navigate("/cart")}>Go to Cart </button>
                ) : (
                  <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollRight("featured-products")}>&gt;</button>
      </div>

      {/* 🔥 Bestseller Products */}
      <h2 className="section-title">Bestseller Products</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scrollLeft("bestseller-products")}>&lt;</button>
        <div id="bestseller-products" className="scroll-content">
          {bestsellerProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>⭐ {4.5 + Math.random().toFixed(1)}/5</p>
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
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollRight("bestseller-products")}>&gt;</button>
      </div>

      {/* 🔥 Customer Testimonials */}
      <h2 className="section-title">Customer Testimonials</h2>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={() => scrollLeft("testimonials")}>&lt;</button>
        <div id="testimonials" className="scroll-content testimonials-content">
          {[1, 2, 3, 4].map((id) => (
            <div className="testimonial-card" key={id}>
              <img src="/assets/divya1.jpg" alt="Customer" />
              <p>"Amazing quality and service! Highly recommended."</p>
              <strong>- Customer {id}</strong>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollRight("testimonials")}>&gt;</button>
      </div>

      {/* 🔥 Today's Deal */}
      <h2 className="section-title">Today's Deal</h2>
      <div className="deal-container">
        <div className="product-card">
          <img src="/assets/pots.png" alt="Deal Product" />
          <h3>Exclusive Deal</h3>
          <p>Price: <strike>₹1200</strike> ₹899</p>
          <p>⭐ 4.8/5</p>
          <button className="view-details">Grab Now</button>
        </div>
      </div>

      {/* 🔥 FAQ Section */}
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq">
        <div className="faq-item">
          <strong>How can I order?</strong>
          <p>Simply add the product to your cart and proceed to checkout.</p>
        </div>
        <div className="faq-item">
          <strong>What payment methods are available?</strong>
          <p>We accept UPI, Net Banking, and COD.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
