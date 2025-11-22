import React from "react";
import services from "../data/services";
import "./Services.css";

const Services = () => (
  <section id="services" className="section services">
    <h2>Our Services</h2>
    <p className="subtitle">Comprehensive digital solutions for your business</p>
    <div className="services-grid">
      {services.map((service, idx) => (
        <div key={idx} className="service-card">
          <div className="card-front">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <div className="card-back">
            <h3>{service.title}</h3>
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
