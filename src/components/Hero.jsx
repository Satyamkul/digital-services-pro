import React from "react";
import "./Hero.css";

const Hero = () => {
  const rotatingTexts = [
    "Transform Your Digital Presence",
    "Web & App Development",
    "Creative Content & Branding"
  ];

  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      let fullText = rotatingTexts[currentTextIndex];
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length <= 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % rotatingTexts.length);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length === fullText.length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearInterval(interval);
  }, [displayText, isDeleting, currentTextIndex, rotatingTexts]);

  return (
    <section id="home" className="hero">
      <div className="particle-bg"></div>
      <div className="hero-content">
        <h1>{displayText}<span className="cursor">|</span></h1>
        <p>We provide expert digital solutions including website and app development, content writing, logo design, and customized YouTube templates that drive growth and engagement.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get Started</a>
          <a href="#portfolio" className="btn btn-secondary">View Portfolio</a>
        </div>
        <div className="hero-stats">
          <div>
            <h3>150+</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>80+</h3>
            <p>Clients</p>
          </div>
          <div>
            <h3>5.0</h3>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
