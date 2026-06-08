import React from "react";
import { useParams, Link } from "react-router-dom";
import { updatesData } from "../data/updatesData";
import { CalendarIcon, PhoneIcon, EmailIcon, LocationIcon, FacebookIcon, TwitterIcon, LinkedInIcon, WhatsAppIcon } from "../components/Icons";

export default function LatestUpdateDetail({ onBookDemoClick }) {
  const { slug } = useParams();

  const update = updatesData.find((u) => u.slug === slug) || updatesData[0]; // fallback to first update if not found

  const handleShare = (platform) => {
    const pageUrl = window.location.href;
    const shareText = `Check out this update: "${update.title}" by Focus Coaching Classes Nashik!`;
    
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
          <h2 style={{ fontSize: "1.5rem" }}>{update.title}</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li>
              <Link to="/latest-update">Latest Updates</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">Update Details</li>
          </ul>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <div className="detail-layout">
            <div className="detail-main">
              <span className="blog-date" style={{ fontSize: "1rem", marginBottom: "15px", display: "flex", alignItems: "center", gap: "6px" }}>
                <CalendarIcon size={16} style={{ color: "var(--primary-light)" }} /> Announced on {update.date}
              </span>
              <div className="detail-image" style={{ marginTop: "10px" }}>
                <img src={update.image} alt={update.title} />
              </div>
              <div className="detail-content">
                <h2>{update.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: update.content }}></div>
              </div>

              {/* Social Share Bar */}
              <div className="share-bar">
                <span className="share-title">Share Announcement:</span>
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
            </div>

            {/* Sidebar panel */}
            <div className="detail-sidebar">
              <div className="sidebar-panel">
                <h4>Admissions Alert</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                  Admissions for NEET, JEE, MHT-CET, CBSE, and SSC classes are currently active.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ width: "100%", marginBottom: "20px" }}
                  onClick={onBookDemoClick}
                >
                  Book Free Demo Class
                </button>

                <h4 style={{ marginTop: "30px" }}>Contact Info</h4>
                <ul className="sidebar-contact-info">
                  <li>
                    <PhoneIcon size={16} style={{ color: "var(--secondary-navy)", marginTop: "3px" }} />
                    <span>09920506327</span>
                  </li>
                  <li>
                    <EmailIcon size={16} style={{ color: "var(--secondary-navy)", marginTop: "3px" }} />
                    <span>info@focuscoachingclasses.in</span>
                  </li>
                  <li>
                    <LocationIcon size={16} style={{ color: "var(--secondary-navy)", marginTop: "3px" }} />
                    <span>Shraddha Sankul, Gangapur Rd, Nashik</span>
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
