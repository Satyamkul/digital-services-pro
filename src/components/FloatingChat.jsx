import React from "react";
import "./FloatingChat.css";

const FloatingChat = () => {
  const handleClick = () => {
    alert("This would open a live chat window or redirect.");
  };

  return (
    <button
      className="floating-chat"
      onClick={handleClick}
      aria-label="Chat with us"
      title="Chat with us"
    >
      💬
    </button>
  );
};

export default FloatingChat;
