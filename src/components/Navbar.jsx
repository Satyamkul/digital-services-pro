import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import "./Navbar.css";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleMenu = () => setMenuOpen((open) => !open);

  // Close menu on link click (mobile)
  const handleNavClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          {/* Replace emoji below with img tag for real logo */}
          <span role="img" aria-label="rocket" className="logo-icon">🚀</span>
          {/* For image logo: <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="Logo" className="logo-img" /> */}
          <span>DigitalHub</span>
        </div>
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-menu${menuOpen ? " active" : ""}`}>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#services" onClick={handleNavClick}>Services</a></li>
          <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
          <li><a href="#pricing" onClick={handleNavClick}>Pricing</a></li>
          <li><a href="#testimonials" onClick={handleNavClick}>Reviews</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
