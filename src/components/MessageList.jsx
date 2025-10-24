import React from "react";
import "./MessageList.css";

export default function MessageList({ messages = [] }) {
  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <p className="no-messages">No messages yet. Start chatting!</p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message-item ${
              index % 2 === 0 ? "user" : "bot"
            }`}
          >
            {msg}
          </div>
        ))
      )}
    </div>
  );
}

