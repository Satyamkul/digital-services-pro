import React, { useState, useEffect } from "react";
import "./Toast.css";

let globalAddToast;

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    globalAddToast = (msg, type = "success") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, msg, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };
  }, []);

  return (
    <div className="toast-container" role="alert" aria-live="assertive">
      {toasts.map(({ id, msg, type }) => (
        <div key={id} className={`toast toast-${type}`}>
          {type === "error" ? "❌" : "✅"} {msg}
        </div>
      ))}
    </div>
  );
};

export const addToast = (msg, type) => {
  if (globalAddToast) globalAddToast(msg, type);
};

export default Toast;
