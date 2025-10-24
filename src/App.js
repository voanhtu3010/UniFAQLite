import React, { useState, useEffect } from "react";
import ChatWidget from "./components/ChatWidget";
import useFaqSearch from "./hooks/useFaqSearch";
import students from "./assets/students-illustration.png";
import "./App.css";

export default function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [relatedFAQs, setRelatedFAQs] = useState([]);

  const { searchFaq, getInitialFaqs } = useFaqSearch();

  useEffect(() => {
    if (showChat) {
      setRelatedFAQs(getInitialFaqs());
    }
  }, [showChat]);

  const handleSend = (text) => {
    const userMsg = { text, fromUser: true };
    setMessages((prev) => [...prev, userMsg]);

    const result = searchFaq(text);

    if (result.answer) {
      setMessages((prev) => [
        ...prev,
        { text: result.answer, fromUser: false },
      ]);
      setRelatedFAQs(result.related);
    } else {
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I don't have any information on this issue.", fromUser: false },
      ]);
      setRelatedFAQs(result.related);
    }
  };

  const handleSelectFAQ = (question) => {
    handleSend(question);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="logo">UniFAQ</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#how">How It Works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="get-started">Get Started</button>
      </header>

      <main className="hero">
        <div className="hero-text">
          <h1>Get Instant Answers to Your University Questions</h1>
          <p>UniFAQ helps students find answers in seconds with a clean and responsive platform.</p>
          <button onClick={() => setShowChat(true)}>Try UniFAQ Now</button>
        </div>
        <div className="hero-img">
          <img src={students} alt="Students reading" />
        </div>
      </main>

      {showChat && (
        <ChatWidget
          onClose={() => setShowChat(false)}
          onSend={handleSend}
          messages={messages}
          relatedFAQs={relatedFAQs}
          onSelectFAQ={handleSelectFAQ}
        />
      )}
    </div>
  );
}
