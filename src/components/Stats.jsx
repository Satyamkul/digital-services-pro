import React, { useEffect, useState } from "react";
import statsData from "../data/stats";
import "./Stats.css";

const Stats = () => {
  const [counts, setCounts] = useState(
    statsData.map(() => 0)
  );

  useEffect(() => {
    let start = 0;
    const endCounts = statsData.map(stat => stat.count);
    let interval = null;

    const incrementCounts = () => {
      setCounts((prev) =>
        prev.map((num, idx) =>
          num < endCounts[idx] ? num + Math.ceil(endCounts[idx] / 50) : endCounts[idx]
        )
      );

      if (counts.every((count, idx) => count >= endCounts[idx])) {
        clearInterval(interval);
      }
    };

    interval = setInterval(incrementCounts, 20);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section stats">
      <div className="stats-grid">
        {statsData.map((stat, idx) => (
          <div key={idx} className="stat-box">
            <div className="stat-icon" role="img" aria-label="icon">{stat.icon}</div>
            <div className="stat-count">{counts[idx] >= stat.count ? stat.count : counts[idx]}{stat.suffix}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
