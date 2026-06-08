import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h5>Contact Details</h5>
            <ul className="footer-contact-list">
              <li>
                <strong>Focus Coaching Classes</strong>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <a href="mailto:info@focuscoachingclasses.in">info@focuscoachingclasses.in</a>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <a href="tel:09920506327">09920506327</a>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                08:30 am - 06:30 pm
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <span>Shraddha Sankul, Gangapur Rd, Shreerang Nagar, Nashik, Maharashtra 422013</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul className="footer-links-list">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/latest-update">Latest Updates</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Courses</h5>
            <ul className="footer-links-list">
              <li>
                <Link to="/services/10th-ssc-classes-in-nashik">10th SSC Classes</Link>
              </li>
              <li>
                <Link to="/services/10th-cbse-coaching-classes-in-nashik">10th CBSE Classes</Link>
              </li>
              <li>
                <Link to="/services/neet-classes">NEET Classes</Link>
              </li>
              <li>
                <Link to="/services/best-jee-coaching-classes-in-gangapur-road-focus-coaching-classes">JEE Classes</Link>
              </li>
              <li>
                <Link to="/services/mht-cet-classes-in-gangapur-road-nashik">CET Classes</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Focus Coaching</h5>
            <p style={{ color: "#bdc3c7", lineHeight: "1.5" }}>
              Providing academic excellence and top-tier foundation courses near Gangapur Road, Nashik for competitive entrance exams.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Focus Coaching Classes. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a href="https://www.technokraftservices.com/" target="_blank" rel="noopener noreferrer">
              Technokraft Services LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
