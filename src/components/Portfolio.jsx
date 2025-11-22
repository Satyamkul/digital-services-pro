import React, { useState } from "react";
import portfolio from "../data/portfolio";
import "./Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "app", "design", "content"];

  const filteredPortfolio =
    filter === "all" ? portfolio : portfolio.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="section portfolio">
      <h2>Our Work</h2>
      <p className="subtitle">Projects that showcase our expertise</p>
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredPortfolio.map((item, i) => (
          <div key={i} className="portfolio-item">
            <div
              className="portfolio-image"
              style={{ background: item.gradient }}
              title={item.title}
            >
              <span className="portfolio-icon" role="img" aria-label={item.category}>
                {item.icon}
              </span>
            </div>
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="portfolio-tag">{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
