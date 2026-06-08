import React, { useState } from "react";

export default function QueryModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter your contact number.");
      return;
    }
    // Simulate API call
    console.log("Submitted query contact:", phone);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setPhone("");
      onClose();
    }, 2500);
  };

  const handleCallNow = () => {
    window.location.href = "tel:09920506327";
  };

  return (
    <div className="new-modal-backdrop" onClick={onClose}>
      <div className="new-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="new-modal-close-btn" onClick={onClose} aria-label="Close dialog">
          &times;
        </button>
        <h3 className="new-modal-title">Focus Coaching Classes</h3>
        <p className="new-modal-subtitle">Share your query for personalized assistance.</p>

        {isSubmitted ? (
          <div className="new-form-success-alert">
            Thank you! We have received your number. Our counselor will call you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="new-modal-card">
              <input
                type="tel"
                name="phone"
                className="new-modal-input"
                placeholder="Enter your contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <div className="new-modal-btn-group">
                <button type="button" className="new-modal-btn btn-call" onClick={handleCallNow}>
                  Call Now
                </button>
                <button type="submit" className="new-modal-btn btn-request">
                  Request A Call
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

