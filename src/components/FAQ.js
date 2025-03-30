import React, { useState } from "react";
import "../styles/Support.css"; // Ensure CSS is properly linked

const faqs = [
  { 
    question: "How do I track my order?", 
    answer: "Go to 'My Orders' and enter your order ID to track your shipment." 
  },
  { 
    question: "What is the return policy?", 
    answer: "You can return items within 7 days. Visit our return policy page for more details." 
  },
  { 
    question: "How can I contact customer support?", 
    answer: "You can reach us through the contact form below or use the live chat option." 
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle logic
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
          </button>
          <div className="faq-answer" style={{ display: openIndex === index ? "block" : "none" }}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
