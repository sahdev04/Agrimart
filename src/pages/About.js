import React from "react";
import "../styles/About.css"; // Import CSS

const About = () => {
  return (
    <div className="about-page">
      {/* 🔥 Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Agriculture, Enriching Lives</h1>
          <p>Providing sustainable farming solutions for a greener and healthier future.</p>
          <a href="#mission" className="cta-button">Learn More</a>
        </div>
      </section>

      {/* 🔥 About Us Content */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          At <strong>AgriMart</strong>, we are committed to revolutionizing agriculture with **high-quality fertilizers, pesticides, herbicides, and farming tools**.
          Our vision is to **empower farmers and gardeners** by offering eco-friendly and innovative products that maximize productivity while preserving nature.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <img src="/assets/eco-friendly.png" alt="Eco Friendly" />
            <h3>Eco-Friendly</h3>
            <p>We provide sustainable farming solutions that protect the environment.</p>
          </div>
          <div className="about-card">
            <img src="/assets/high-quality.png" alt="High Quality" />
            <h3>Premium Quality</h3>
            <p>Our products undergo strict quality testing to ensure effectiveness.</p>
          </div>
          <div className="about-card">
            <img src="/assets/support.png" alt="Customer Support" />
            <h3>Expert Support</h3>
            <p>Our agriculture experts provide guidance to ensure your success.</p>
          </div>
        </div>
      </section>

      {/* 🔥 Mission Section */}
      <section id="mission" className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to **empower farmers and gardeners** with cost-effective and innovative agricultural products.
            We believe in **sustainability, efficiency, and affordability**, ensuring that every grower can achieve success with minimal environmental impact.
          </p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
        <img src="/assets/our-mission.png" alt="Our Mission" className="mission-image" />
      </section>

      {/* 🔥 Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose AgriMart?</h2>
        <div className="choose-grid">
          <div className="choose-item">
            <h3>🌍 Sustainable Farming</h3>
            <p>We focus on eco-friendly products that nourish the soil and reduce pollution.</p>
          </div>
          <div className="choose-item">
            <h3>⚡ Fast & Reliable Delivery</h3>
            <p>Get your farming essentials delivered quickly at your doorstep.</p>
          </div>
          <div className="choose-item">
            <h3>📞 24/7 Customer Support</h3>
            <p>We are here to help you with expert advice and quick resolutions.</p>
          </div>
        </div>
      </section>

      {/* 🔥 Contact Section */}
      <section className="contact-section">
        <h2>Let's Grow Together! 🌱</h2>
        <p>Need expert advice or have any queries? We’re here to assist you.</p>
        <a href="/contact" className="contact-btn">Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
