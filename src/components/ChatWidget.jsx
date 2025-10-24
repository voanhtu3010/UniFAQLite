import React, { useState } from "react";
import "./ChatWidget.css";

export default function ChatWidget({ onClose, onSend, messages, relatedFAQs, onSelectFAQ }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-widget">
      <div className="chat-header">
        <span>UniFAQ Chat</span>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      <div className="chat-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.fromUser ? "user" : "bot"}`}>
            {msg.text}
          </div>
        ))}

        {/* --- Luôn hiển thị 3 câu hỏi gợi ý --- */}
        {relatedFAQs?.length > 0 && (
          <div className="related-faqs">
            <p><strong>Top 3 Related FAQs:</strong></p>
            {relatedFAQs.map((faq, idx) => (
              <button
                key={idx}
                className="related-faq-btn"
                onClick={() => onSelectFAQ(faq.question)}
              >
                {faq.question}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
