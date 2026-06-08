import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { LocationIcon, PhoneIcon, EmailIcon, FacebookIcon, TwitterIcon, LinkedInIcon, WhatsAppIcon } from "../components/Icons";

export default function CourseDetail({ onBookDemoClick }) {
  const { slug } = useParams();
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const course = coursesData.find((c) => c.slug === slug) || coursesData[0]; // fallback to JEE if not found

  const toggleFaq = (idx) => {
    setActiveFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const handleShare = (platform) => {
    const pageUrl = window.location.href;
    const shareText = `Check out the ${course.title} at Focus Coaching Classes Nashik!`;
    
    let shareUrl = "";
    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + pageUrl)}`;
    }
    
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Breadcrumb banner */}
      <div className="breadcrumb-banner">
        <div className="container">
          <h2>{course.shortName}</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li>
              <Link to="/services">Courses</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">{course.shortName}</li>
          </ul>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <div className="detail-layout">
            <div className="detail-main">
              <div className="detail-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="detail-content">
                <h2>{course.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: course.description }}></div>
              </div>

              {/* Social Share Bar */}
              <div className="share-bar">
                <span className="share-title">Share Course:</span>
                <button className="share-btn share-fb" onClick={() => handleShare("facebook")} aria-label="Share on Facebook">
                  <FacebookIcon size={18} />
                </button>
                <button className="share-btn share-tw" onClick={() => handleShare("twitter")} aria-label="Share on Twitter">
                  <TwitterIcon size={18} />
                </button>
                <button className="share-btn share-ln" onClick={() => handleShare("linkedin")} aria-label="Share on LinkedIn">
                  <LinkedInIcon size={18} />
                </button>
                <button className="share-btn share-wa" onClick={() => handleShare("whatsapp")} aria-label="Share on WhatsApp">
                  <WhatsAppIcon size={18} />
                </button>
              </div>

              {/* FAQs Accordion */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="faqs-accordion">
                  <h3>Frequently Asked Questions</h3>
                  <p style={{ color: "var(--text-muted)", marginBottom: "25px", fontSize: "0.95rem" }}>
                    Find immediate answers regarding class structure, batches, study resources, and coaching fees.
                  </p>
                  
                  {course.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className={`accordion-item ${activeFaqIndex === idx ? "active" : ""}`}
                    >
                      <button className="accordion-header" onClick={() => toggleFaq(idx)}>
                        {faq.question}
                        <span className="accordion-icon">▼</span>
                      </button>
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar panel */}
            <div className="detail-sidebar">
              <div className="sidebar-panel">
                <h4>Admissions Open</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                  Book a demo seat for standard 9th/10th, JEE, NEET, or MHT-CET batches.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", marginBottom: "20px" }}
                  onClick={onBookDemoClick}
                >
                  Book Free Demo Class
                </button>

                <h4 style={{ marginTop: "30px" }}>Business Details</h4>
                <ul className="sidebar-contact-info">
                  <li>
                    <LocationIcon size={16} style={{ color: "var(--secondary-navy)", marginTop: "3px" }} />
                    <span>Shraddha Sankul, Gangapur Rd, Nashik, 422013</span>
                  </li>
                  <li>
                    <PhoneIcon size={16} style={{ color: "var(--secondary-navy)", marginTop: "3px" }} />
                    <span>
                      <a href="tel:09920506327" style={{ color: "var(--secondary-navy)", fontWeight: 600 }}>
                        09920506327
                      </a>
                    </span>
                  </li>
                  <li>
                    <EmailIcon size={16} style={{ color: "var(--secondary-navy)", marginTop: "3px" }} />
                    <span>info@focuscoachingclasses.in</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
