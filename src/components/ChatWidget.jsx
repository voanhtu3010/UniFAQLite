import React from "react";
import "./ChatWidget.css";

export default function ChatWidget({ onClose, messages = [], onSend }) {
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="chat-widget">
      <div className="chat-header">
        <h3>UniFAQ Chat</h3>
        <button onClick={onClose}>×</button>
      </div>

      <div className={`message-list ${messages.length === 0 ? "empty" : ""}`}>
        {messages.length === 0 ? (
          <p>No messages yet. Start chatting!</p>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`message ${msg.fromUser ? "user" : "bot"}`}>
              {msg.text}
            </div>
          ))
        )}
      </div>

      <div className="input-bar">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
