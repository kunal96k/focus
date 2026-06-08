import React from "react";
import { Link } from "react-router-dom";
import { updatesData } from "../data/updatesData";

export default function LatestUpdates() {
  return (
    <div>
      {/* Breadcrumb banner */}
      <div className="breadcrumb-banner">
        <div className="container">
          <h2>Latest Updates</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">Latest Updates</li>
          </ul>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Latest Announcements & Updates</h2>
          <p className="section-subtitle">
            Stay up to date with new class details, batch schedules, exam dates, and medical entrance updates.
          </p>

          <div className="blogs-grid">
            {updatesData.map((update) => (
              <div key={update.slug} className="blog-card">
                <div className="blog-image">
                  <img src={update.image} alt={update.title} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">{update.date}</span>
                  <h4>{update.title}</h4>
                  <p>{update.excerpt}</p>
                  <Link to={`/latest-update/${update.slug}`} className="blog-link">
                    Read Update ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
