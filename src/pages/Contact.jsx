import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LocationIcon, PhoneIcon, EmailIcon, ClockIcon } from "../components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    contact: "",
    email: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.contact) {
      alert("Name and Contact Number are required fields.");
      return;
    }
    console.log("Contact submission:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: "", contact: "", email: "", notes: "" });
    }, 3000);
  };

  return (
    <div>
      {/* Breadcrumb banner */}
      <div className="breadcrumb-banner">
        <div className="container">
          <h2>Contact Us</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">Contact</li>
          </ul>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Business details */}
            <div className="contact-info-wrap">
              <h3>Focus Coaching Classes</h3>
              <p>
                Get in touch with our admissions center near Gangapur Road, Nashik. Feel free to walk in during business hours or schedule a consultation slot using the form.
              </p>

              <div className="contact-details-cards">
                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <LocationIcon size={20} style={{ color: "var(--secondary-navy)" }} />
                  </div>
                  <div className="contact-card-text">
                    <h5>Our Address</h5>
                    <p>Shraddha Sankul, Gangapur Rd, Shreerang Nagar, Nashik, Maharashtra 422013</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <PhoneIcon size={20} style={{ color: "var(--secondary-navy)" }} />
                  </div>
                  <div className="contact-card-text">
                    <h5>Call/WhatsApp Us</h5>
                    <p>
                      <a href="tel:09920506327" style={{ color: "var(--secondary-navy)", fontWeight: 600 }}>
                        09920506327
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <EmailIcon size={20} style={{ color: "var(--secondary-navy)" }} />
                  </div>
                  <div className="contact-card-text">
                    <h5>Email Us</h5>
                    <p>
                      <a href="mailto:info@focuscoachingclasses.in">info@focuscoachingclasses.in</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-card-icon">
                    <ClockIcon size={20} style={{ color: "var(--secondary-navy)" }} />
                  </div>
                  <div className="contact-card-text">
                    <h5>Office Hours</h5>
                    <p>08:30 AM - 06:30 PM (Daily)</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="contact-actions">
                <a
                  href="https://www.google.com/maps?q=20.0075775,73.7688687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&origin=Current+Location&destination=20.0075775,73.7688687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ color: "var(--primary-navy)", borderColor: "var(--primary-navy)" }}
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="contact-form-wrap">
              <h3>Talk to us</h3>
              {isSubmitted ? (
                <div className="form-success-alert">
                  Thank you! Your message has been successfully sent. Our counseling desk will contact you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Number *</label>
                    <input
                      type="tel"
                      name="contact"
                      id="contact"
                      className="form-control"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message</label>
                    <textarea
                      name="notes"
                      id="notes"
                      className="form-control"
                      placeholder="Please write your questions here..."
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn save-btn">
                    Submit Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section reveal-on-scroll">
        <div className="container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.910077976722!2d73.7662967!3d20.0075775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb6387063d89%3A0x6b4efd5cf3c9f1a0!2sFocus%20Coaching%20Classes!5e0!3m2!1sen!2sin!4v1717845000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Focus Coaching Classes Nashik Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
