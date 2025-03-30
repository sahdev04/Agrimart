import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Blog.css";

const blogData = [
  {
    id: 1,
    title: "The Future of Organic Farming",
    content: `Organic farming is gaining popularity due to its sustainable approach...
      This method avoids synthetic fertilizers and promotes healthy soil.`,
    image: "/assets/organic.jpg",
  },
  {
    id: 2,
    title: "Best Practices for High-Yield Crops",
    content: `Farmers can improve their yield by using advanced irrigation techniques, 
      high-quality seeds, and proper fertilization methods.`,
    image: "/assets/organic.jpg",
  },
  {
    id: 3,
    title: "How to Choose the Right Fertilizer?",
    content: `Choosing the right fertilizer depends on the type of crop and soil.
      Organic and synthetic fertilizers each have their benefits.`,
    image: "/assets/organic.jpg",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-detail-container">
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
