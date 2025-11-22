import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-col">
        <h4>DigitalHub</h4>
        <p>Transform your digital presence with professional services</p>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="#services">Web Development</a></li>
          <li><a href="#services">App Development</a></li>
          <li><a href="#services">Content Writing</a></li>
          <li><a href="#services">Logo Design</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Connect</h4>
        <ul>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 DigitalHub. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
