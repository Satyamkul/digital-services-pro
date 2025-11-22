import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const subs = JSON.parse(localStorage.getItem("subscriptions") || "[]");
    if (subs.includes(email)) {
      alert("Already subscribed!");
    } else {
      subs.push(email);
      localStorage.setItem("subscriptions", JSON.stringify(subs));
      alert("Subscription successful!");
      setEmail("");
    }
  };

  return (
    <section className="section newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get updates on latest projects and exclusive offers</p>
      <form className="newsletter-form" onSubmit={handleSubscribe}>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
