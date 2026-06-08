import React from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../data/coursesData";

export default function Courses() {
  return (
    <div>
      {/* Breadcrumb banner */}
      <div className="breadcrumb-banner">
        <div className="container">
          <h2>Our Courses</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">Courses</li>
          </ul>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Academic & Entrance Programs</h2>
          <p className="section-subtitle">
            We offer specialized tutoring programs targeting CBSE, SSC boards, JEE, NEET, and CET competitive entries.
          </p>

          <div className="courses-grid">
            {coursesData.map((course) => (
              <div key={course.slug} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-content">
                  <h4>{course.title}</h4>
                  <p>{course.shortDescription}</p>
                  <Link to={`/services/${course.slug}`} className="course-link">
                    Explore Course details ➔
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
