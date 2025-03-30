import React from "react";
import "../styles/Blog.css";
import BlogCard from "../components/BlogCard";

const blogData = [
  {
    id: 1,
    title: "The Future of Organic Farming",
    excerpt: "Discover how organic farming is changing the world with sustainable methods...",
    image: "/assets/organic.jpg",
  },
  {
    id: 2,
    title: "Best Practices for High-Yield Crops",
    excerpt: "Learn about effective strategies to maximize your agricultural productivity...",
    image: "/assets/organic.jpg",
  },
  {
    id: 3,
    title: "How to Choose the Right Fertilizer?",
    excerpt: "Choosing the right fertilizer can make a huge difference in plant growth...",
    image: "/assets/organic.jpg",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Hero Section */}
      <div className="blog-hero">
        <h1>Welcome to Our Agriculture Blog</h1>
        <p>Latest insights, tips, and trends in modern farming.</p>
      </div>

      {/* Blog Section */}
      <div className="blog-list">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
