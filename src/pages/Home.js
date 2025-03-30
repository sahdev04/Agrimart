import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/getintouch";
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

  // Products data with unique names and images
  const featuredProducts = [
    { id: 1, name: "Premium Fertilizer", price: 500, image: "/assets/fertilizer.png" },
    { id: 2, name: "Organic Seeds", price: 600, image: "/assets/seed.png" },
    { id: 3, name: "Garden Tools Set", price: 700, image: "/assets/equipment.png" },
    { id: 4, name: "Decorative Pots", price: 800, image: "/assets/pot.png" }
  ];

  const bestsellerProducts = [
    { id: 5, name: "Advanced Fertilizer", price: 900, image: "/assets/117745_2.jpeg" },
    { id: 6, name: "Flowering Seeds", price: 1000, image: "/assets/BalsamRed.png" },
    { id: 7, name: "Handheld Sprayer", price: 1100, image: "/assets/spray.jpg" },
    { id: 8, name: "Premium Garden Tools", price: 1200, image: "/assets/111.png" }
  ];

    const categories = [
      { name: "Fertilizers", image: "/assets/fertilize.png", route: "/category/fertilizers" },
      { name: "Seeds", image: "/assets/seeds1.png", route: "/category/seeds" },
      { name: "Equipments", image: "/assets/shovel.png", route: "/category/equipments" },
      { name: "Pots", image: "/assets/flower-pot.png", route: "/category/pots" },
      { name: "Pesticides", image: "/assets/pesticide.png", route: "/category/pesticides" },
      { name: "Herbicides", image: "/assets/weed.png", route: "/category/herbicides" },
  ];
  

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
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

      </div>

      {/* 🔥 Search by Category */}
      <h2 className="section-title">Search by Category</h2>
        <div id="categories" className="scroll-content">
          {categories.map((category, index) => (
            <div
              className="category"
              key={index}
              onClick={() => handleCategoryClick(category.name)} // Navigate to category page
            >
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      

      {/* 🔥 Featured Products */}
      <h2 className="section-title">Featured Products</h2>
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

      {/* 🔥 Bestseller Products */}
      <h2 className="section-title">Bestseller Products</h2>
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


      {/* 🔥 Today's Deal */}
      <h2 className="section-title">Today's Deal</h2>
      <div className="deal-container">
        <div className="product-card">
          <img src="/assets/pot.png" alt="Deal Product" />
          <h3>Exclusive Deal</h3>
          <p>Price: <strike>₹1200</strike> ₹899</p>
          <p>⭐ 4.8/5</p>
          <button className="view-details">Grab Now</button>
        </div>
      </div>

     {/* 🌿 About Us Section */}
<div className="about-us">
  <div className="about-image">
    <img src="/assets/AboutUs.webp" alt="About Agrimart" />
  </div>
  <div className="about-content">
    <h4 className="about-title">ABOUT US</h4>
    <h2 className="about-heading">Empowering Farmers, Growing Together</h2>
    <p className="about-text">
      At <strong>Agrimart</strong>, we are committed to revolutionizing agriculture by providing high-quality 
      farming equipment, organic seeds, and eco-friendly solutions. Our mission is to support farmers and 
      gardeners with sustainable products that enhance productivity and preserve the environment.
    </p>
    <p className="about-text">
      We believe in innovation and excellence, ensuring that our customers get the best tools and resources 
      to succeed. Whether you're a professional farmer or a home gardener, Agrimart is your trusted partner 
      in cultivating a greener future.
    </p>
    <button className="learn-more">Learn More →</button>
  </div>
</div>

<div className="features-section">
  <div className="feature">
    <img src="/assets/EcoFriendly.webp" alt="Eco Friendly" />
    <h3>Eco Friendly</h3>
    <p>We are committed to protecting the environment.</p>
  </div>

  <div className="feature">
    <img src="/assets/AffordabalePrice.webp" alt="Affordable Pricing" />
    <h3>Affordable Pricing</h3>
    <p>Giving the best value for your money with our competitive pricing.</p>
  </div>

  <div className="feature">
    <img src="/assets/PremiumQuality.webp" alt="Premium Quality" />
    <h3>Premium Quality</h3>
    <p>Consistently providing high-quality results you can count on.</p>
  </div>

  <div className="feature">
    <img src="/assets/Reliablity.webp" alt="Professionalism" />
    <h3>Professionalism</h3>
    <p>Our team is dedicated to delivering reliable, high-quality solutions.</p>
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
        <div className="faq-item">
          <strong>What is the estimated delivery time?</strong>
          <p> Orders are usually delivered within 3-7 business days, depending on your location.</p>
        </div>
        <div className="faq-item">
          <strong>Do you offer free shipping?</strong>
          <p>Yes, we offer free shipping on orders above ₹999.</p>
        </div>
      </div>
      <Testimonials />
      <GetInTouch/>
    </div>
  );
};

export default Home;
