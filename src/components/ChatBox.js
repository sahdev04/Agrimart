import React, { useState } from "react";
import "../styles/ChatBox.css";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "🤖 Thank you for reaching out! Our team will assist you soon.",
            sender: "bot",
          },
        ]);
      }, 1500);
    }
  };

  return (
    <>
      {/* Floating Chat Image Button */}
      <div className="chat-icon-container" onClick={toggleChat}>
        <img src="/assets/chat-icon.png" alt="Chat" className="chat-image" />
      </div>

      {/* Chat Box UI */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>🔵 Live Support</h4>
            <button className="close-btn" onClick={toggleChat}>✖</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
