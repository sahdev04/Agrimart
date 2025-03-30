import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Blog.css";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <div className="blog-content">
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
        <button onClick={() => navigate(`/blog/${blog.id}`)}>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
