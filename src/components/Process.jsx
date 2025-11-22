import React from "react";
import "./Process.css";

const steps = [
  { number: 1, title: "Discovery", desc: "We understand your goals, audience, and requirements" },
  { number: 2, title: "Planning", desc: "Strategic roadmap and detailed project timeline" },
  { number: 3, title: "Design", desc: "Creative concepts and user-centric designs" },
  { number: 4, title: "Development", desc: "Building with cutting-edge technologies" },
  { number: 5, title: "Launch", desc: "Deployment and ongoing support" }
];

const Process = () => (
  <section className="section process">
    <h2>Our Process</h2>
    <p className="subtitle">How we bring your ideas to life</p>
    <div className="process-timeline">
      {steps.map((step) => (
        <div key={step.number} className="process-step">
          <div className="step-number">{step.number}</div>
          <div className="step-content">
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Process;
