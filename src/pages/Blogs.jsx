import React from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

export default function Blogs() {
  return (
    <div>
      {/* Breadcrumb banner */}
      <div className="breadcrumb-banner">
        <div className="container">
          <h2>Our Blogs</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">Blogs</li>
          </ul>
        </div>
      </div>

      {/* Main Grid Section */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Educational Guides & Articles</h2>
          <p className="section-subtitle">
            Expert academic checklists, competitive syllabus mapping, and concept guides written by Focus tutors.
          </p>

          <div className="blogs-grid">
            {blogsData.map((blog) => (
              <div key={blog.slug} className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">{blog.date}</span>
                  <h4>{blog.title}</h4>
                  <p>{blog.excerpt}</p>
                  <Link to={`/blogs/${blog.slug}`} className="blog-link">
                    Read Article ➔
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
