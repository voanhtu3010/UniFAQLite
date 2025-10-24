export default function MessageList({ messages }) {
  if (!messages.length)
    return <p className="empty-text">No messages yet. Start chatting!</p>;

  return (
    <div className="message-list">
      {messages.map((msg, i) => (
        <div key={i} className={msg.fromUser ? "message user" : "message bot"}>
          {msg.text}
        </div>
      ))}
    </div>
  );
}
