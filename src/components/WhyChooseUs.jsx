import React from "react";
import "./WhyChooseUs.css";

const features = [
  { icon: "⚡", title: "Lightning Fast", desc: "Quick turnaround without compromising quality" },
  { icon: "💎", title: "Premium Quality", desc: "Industry-leading standards in every project" },
  { icon: "🎯", title: "Result Oriented", desc: "Focus on measurable business outcomes" },
  { icon: "🤝", title: "24/7 Support", desc: "Always here when you need us" },
];

const WhyChooseUs = () => (
  <section className="why-choose section">
    <h2>Why Choose Us</h2>
    <div className="features-grid">
      {features.map((f, i) => (
        <div key={i} className="feature-item">
          <div className="feature-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;

