import React, { useState } from "react";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import ChatBox from "../components/ChatBox"; // Import ChatBox
import "../styles/Support.css";

const Support = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="support-page">
      {/* Hero Section */}
      <header className="support-hero">
        <h1>How Can We Help You?</h1>
        <p>Find answers to common questions or reach out for support.</p>
      </header>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form */}
      <ContactForm />

      {/* Live Chat Button */}

      {/* Chat Box Modal */}
      {chatOpen && <ChatBox closeChat={() => setChatOpen(false)} />}
    </div>
  );
};

export default Support;
