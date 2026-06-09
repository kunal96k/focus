import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound({ 
  code = "404", 
  title = "Page Not Found", 
  message = "Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable." 
}) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${code} - ${title} | Focus Coaching Classes`;
  }, [code, title]);

  return (
    <div className="error-page-wrapper">
      <div className="error-container">
        <div className="error-code">{code}</div>
        <h2 className="error-title">{title}</h2>
        <p className="error-message">{message}</p>
        
        <div className="error-actions">
          <Link to="/" className="btn error-btn error-btn-accent">
            Go Back Home
          </Link>
          <button 
            onClick={() => navigate(-1)} 
            className="btn error-btn error-btn-outline"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
