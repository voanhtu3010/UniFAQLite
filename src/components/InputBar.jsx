import React, { useState } from "react";
import "./InputBar.css";

export default function InputBar({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex p-3 bg-gray-200 rounded-b-lg">
      <input
        type="text"
        className="flex-1 p-2 border rounded-l-lg outline-none"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}
