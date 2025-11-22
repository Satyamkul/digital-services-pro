import React from "react";
import pricing from "../data/pricing";
import "./Pricing.css";

const Pricing = () => (
  <section className="section pricing" id="pricing">
    <h2>Pricing Plans</h2>
    <p className="subtitle">Choose the perfect plan for your needs</p>
    <div className="pricing-grid">
      {pricing.map((plan, index) => (
        <div
          key={index}
          className={`pricing-card ${plan.featured ? "featured" : ""}`}
        >
          {plan.featured && <div className="badge">Most Popular</div>}
          <div className="pricing-header">
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">{plan.price.toLocaleString()}</span>
              <span className="period">{plan.period}</span>
            </div>
          </div>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className={`btn ${plan.featured ? "btn-primary" : "btn-outline"}`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
