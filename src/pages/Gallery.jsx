import React from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    url: "/assets/common/focus-coaching-classes-nashik-2.jpg",
    title: "Gangapur Road Campus"
  },
  {
    url: "/assets/common/coaching-for-cbse-in-nashik-2.jpg-2.jpg-2.png",
    title: "CBSE Interactive Batch"
  },
  {
    url: "/assets/common/neet-coaching-classes-in-gangapur-road-nashik-2.jpg-2.jpg-3.png",
    title: "NEET Medical Preparation Wing"
  },
  {
    url: "/assets/common/tutorials-in-nashik-2.jpg",
    title: "Study Material Library"
  },
  {
    url: "/assets/common/focus-coaching-classes-banner-1-2.jpg-2.png",
    title: "Admissions Open Banner"
  }
];

export default function Gallery() {
  return (
    <div>
      {/* Breadcrumb banner */}
      <div className="breadcrumb-banner">
        <div className="container">
          <h2>Gallery</h2>
          <ul className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item active">Gallery</li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Focus Coaching Classes Gallery</h2>
          <p className="section-subtitle">
            Take a look inside our campus classrooms, batch structures, science study centers, and seminar galleries.
          </p>

          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="gallery-item">
                <img src={img.url} alt={img.title} />
                <div className="gallery-item-overlay">
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
