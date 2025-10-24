import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your question..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => { onSend(text); setText(""); }}>Send</button>
    </div>
  );
}
