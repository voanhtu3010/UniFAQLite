import React, { useState } from "react";
import ChatWidget from "./components/ChatWidget";
import "./App.css";
import students from "./assets/students-illustration.png"; // ảnh minh họa

export default function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]); // ✅ lưu tin nhắn

  // ✅ Hàm xử lý khi người dùng gửi tin
  const handleSend = (text) => {
    const newMessage = { text, fromUser: true };
    setMessages((prev) => [...prev, newMessage]);

    // Giả lập phản hồi từ hệ thống
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your question! 😊", fromUser: false },
      ]);
    }, 800);
  };

  return (
    <div className="landing-page">
      {/* ===== HEADER ===== */}
      <header className="header">
        <h1 className="logo">UniFAQ</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="get-started">Get Started</button>
      </header>

      {/* ===== HERO SECTION ===== */}
      <main className="hero">
        <div className="hero-text">
          <h1>Get Instant Answers to Your University Questions</h1>
          <p>
            UniFAQ helps students find answers in seconds with a clean and
            responsive platform.
          </p>
          <button onClick={() => setShowChat(true)}>Try UniFAQ Now</button>
        </div>
        <div className="hero-img">
          <img src={students} alt="Students reading" />
        </div>
      </main>

      {/* ===== CHAT WIDGET ===== */}
      {showChat && (
        <ChatWidget
          onClose={() => setShowChat(false)}
          onSend={handleSend} // ✅ thêm dòng này
          messages={messages} // ✅ truyền danh sách tin nhắn
        />
      )}
    </div>
  );
}
