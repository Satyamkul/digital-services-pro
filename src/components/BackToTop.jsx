import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollUp}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
