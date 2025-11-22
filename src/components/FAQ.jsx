import React, { useState } from "react";
import faqs from "../data/faqs";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <h2>Frequently Asked Questions</h2>
      <p className="subtitle">Got questions? We have answers</p>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-icon">{openIndex === index ? "✕" : "+"}</span>
            </button>
            <div className="faq-answer">{openIndex === index && <p>{item.answer}</p>}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
