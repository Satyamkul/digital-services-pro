import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <p className="subtitle">Let's discuss your project</p>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>📧 info@digitalhub.com</p>
          <p>📱 +91 98765 43210</p>
          <p>📍 Mumbai, India</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="GitHub">💻</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select Service</option>
            <option value="web">Website Development</option>
            <option value="app">App Development</option>
            <option value="content">Content Writing</option>
            <option value="logo">Logo Design</option>
            <option value="youtube">YouTube Templates</option>
            <option value="marketing">Digital Marketing</option>
          </select>
          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
          <button type="submit" className="btn btn-primary btn-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
