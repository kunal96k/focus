import React from "react";
import { Link } from "react-router-dom";
import { StarIcon, TargetIcon, ShieldIcon } from "../components/Icons";

export default function About() {
  return (
    <div>
      {/* Breadcrumb banner */}
      <div className="breadcrumb-banner">
        <div className="container">
          <h2>About Us</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">About</li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <div className="about-intro-grid" style={{ marginBottom: "60px" }}>
            <div className="about-intro-content">
              <h3>Focus Coaching Classes, Nashik</h3>
              <p style={{ fontSize: "1.1rem", color: "var(--primary-navy)", fontWeight: 500 }}>
                A legacy of academic commitment, expert tutoring, and outstanding student performances near Gangapur Road.
              </p>
              <p>
                Founded on the principles of thorough concept mapping and persistent practice, <strong>Focus Coaching Classes</strong> has established itself as Nashik's premier educational wing. We prepare students for state boards (SSC), national boards (CBSE), and highly competitive medical/engineering entrances (NEET, JEE, CET).
              </p>
              <p>
                We believe in starting early, which is why our integrated 9th and 10th foundation courses are designed to transition students seamlessly into the analytical framework required for engineering and medical entrances.
              </p>
            </div>
            <div className="about-intro-image">
              <img
                src="/assets/common/focus-coaching-classes-nashik-2.jpg"
                alt="Focus coaching campus"
              />
            </div>
          </div>

          {/* Highlights & Features */}
          <div className="features-grid" style={{ marginTop: "40px" }}>
            <div className="feature-card">
              <h4>Expert Faculty</h4>
              <p>Our faculty panel features teachers with over a decade of board and competitive test training experience.</p>
            </div>
            <div className="feature-card">
              <h4>Detailed Materials</h4>
              <p>Chapter-wise worksheets, formula guides, and board mock registers developed by subject leads.</p>
            </div>
            <div className="feature-card">
              <h4>Modern Setup</h4>
              <p>Comfortable batch classrooms equipped with learning aids and digital testing infrastructure.</p>
            </div>
            <div className="feature-card">
              <h4>Performance Check</h4>
              <p>Timely test review maps and updates shared with parents to coordinate improvements.</p>
            </div>
          </div>

          {/* Vision, Mission, Goals Cards */}
          <div className="vision-mission-grid reveal-on-scroll">
            <div className="vision-card">
              <h4>
                <StarIcon size={20} style={{ color: "var(--accent-gold)", marginRight: "8px" }} />
                Our Vision
              </h4>
              <p>
                To raise Nashik's educational benchmark by building a generation of logically consistent, confident, and academically sound students who excel in standard boards and national competitive exams.
              </p>
            </div>
            <div className="vision-card">
              <h4>
                <TargetIcon size={20} style={{ color: "var(--secondary-navy)", marginRight: "8px" }} />
                Our Mission
              </h4>
              <p>
                To provide quality education through micro-structured schedules, highly interactive classrooms, and rigorous analysis. We seek to simplify science and mathematics learning, eliminating the traditional fear of numericals and proofs.
              </p>
            </div>
            <div className="vision-card">
              <h4>
                <ShieldIcon size={20} style={{ color: "var(--primary-light)", marginRight: "8px" }} />
                Our Core Goals
              </h4>
              <p>
                Restricting batch numbers to focus on individual weak zones, maintaining a positive environment, providing consistent support, and working hand-in-hand with parents for student success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
