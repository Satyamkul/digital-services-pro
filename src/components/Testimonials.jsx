import React, { useState, useEffect } from "react";
import testimonials from "../data/testimonials";
import "./Testimonials.css";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section testimonials">
      <h2>Client Reviews</h2>
      <p className="subtitle">What our clients say about us</p>
      <div className="testimonial-carousel">
        <button onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}>
          ‹
        </button>
        <div className="testimonial-card">
          <div className="testimonial-avatar">{testimonials[current].avatar}</div>
          <div className="testimonial-rating">
            {"⭐".repeat(testimonials[current].rating)}
          </div>
          <p>{`"${testimonials[current].text}"`}</p>
          <h4>{testimonials[current].name}</h4>
          <small>{testimonials[current].role}</small>
        </div>
        <button onClick={() => setCurrent((current + 1) % testimonials.length)}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
