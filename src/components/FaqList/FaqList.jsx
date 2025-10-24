export default function FaqList({ faqs }) {
  if (!faqs.length) return null;

  return (
    <div className="faq-list">
      <h4>Top 3 Related FAQs:</h4>
      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <strong>{faq.question}</strong>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
