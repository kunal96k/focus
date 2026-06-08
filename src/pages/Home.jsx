import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../data/coursesData";
import { blogsData } from "../data/blogsData";

const heroSlides = [
  {
    image: "/assets/common/focus-coaching-classes-banner-1-2.jpg-2.png",
    title: "Best Coaching Classes in Gangapur Road, Nashik",
    subtitle: "Unmatched Academic Preparation for CBSE, SSC, NEET, JEE & MHT CET with Nashik's Expert Faculty! Call 09920506327."
  },
  {
    image: "/assets/common/neet-coaching-classes-in-gangapur-road-nashik-2.jpg-2.jpg-3.png",
    title: "Top NEET, JEE & MHT CET Coaching in Nashik",
    subtitle: "Excel in medical & engineering entrance exams with result-oriented study patterns, test series, and mentorship near Gangapur Road."
  },
  {
    image: "/assets/common/coaching-for-cbse-in-nashik-2.jpg-2.jpg-2.png",
    title: "9th & 10th CBSE Coaching near Canada Corner, Nashik",
    subtitle: "Strengthen Physics, Chemistry, Biology & Math concepts to score above 95% in your school board foundations."
  },
  {
    image: "/assets/common/tutorials-in-nashik-2.jpg",
    title: "9th & 10th SSC Board Coaching Classes in Nashik",
    subtitle: "Join Canada Corner & College Road's premier tutorials with experienced faculty and complete syllabus revisions."
  }
];

const testimonials = [
  {
    name: "Pooja Desai",
    text: "I owe my NEET success to the amazing team at Focus Coaching Classes. The study material, test series, and doubt-solving sessions were excellent.",
    image: "/assets/testimonial/pooja-desai-2.png",
    role: "NEET Candidate (MBBS Aspirant)"
  },
  {
    name: "Aarav Joshi",
    text: "Focus Coaching Classes is truly a game-changer for anyone aiming to crack competitive exams. The IIT Foundation course strengthened my concepts.",
    image: "/assets/testimonial/aarav-joshi-2.jpg",
    role: "JEE Candidate"
  },
  {
    name: "Kunal Patil",
    text: "The 10th CBSE and foundation classes here are exceptionally structured. The teachers pay attention to every single concept in math and science, making learning very straightforward.",
    image: "/assets/testimonial/aarav-joshi-2.jpg",
    role: "10th CBSE Student"
  },
  {
    name: "Ankush Pandit",
    text: "As a JEE candidate, I found the test analysis and shortcut methods taught by Focus Coaching Classes highly beneficial. It boosted my confidence significantly.",
    image: "/assets/testimonial/aarav-joshi-2.jpg",
    role: "JEE Aspirant"
  },
  {
    name: "Nikita Patil",
    text: "The small batch size at Focus is a big advantage. It allowed me to clear my doubts immediately without hesitation. Excellent coaching for board exams!",
    image: "/assets/testimonial/pooja-desai-2.png",
    role: "10th SSC Student"
  }
];

export default function Home({ onBookDemoClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialTimer);
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get the specific two courses featured on the live site homepage
  const featuredCourses = coursesData.filter(c =>
    c.slug === "cbse-10th-standard" || c.slug === "neet-classes"
  );
  // Get first 3 blogs for Home grid
  const featuredBlogs = blogsData.slice(0, 3);

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? "active" : ""}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: idx === currentSlide ? 0.45 : 0,
                zIndex: idx === currentSlide ? 1 : 0
              }}
            ></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div key={currentSlide} className="hero-content">
            <div className="hero-floating-wrapper">
              <h1>{heroSlides[currentSlide].title}</h1>
              <p>{heroSlides[currentSlide].subtitle}</p>
              <div className="hero-actions">
                <Link to="/contact" className="homepage-btn" style={{ backgroundColor: "var(--accent-gold)", color: "var(--primary-navy)" }}>
                  Contact Us
                </Link>
                <button className="homepage-btn" onClick={onBookDemoClick} style={{ backgroundColor: "transparent", border: "2px solid var(--primary-light)", color: "var(--primary-light)" }}>
                  Get Free Counselling
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <ul className="slick-dots" style={{ display: "block", position: "absolute", bottom: "25px", left: "50%", transform: "translateX(-50%)", zIndex: 10, listStyle: "none", padding: 0, margin: 0 }}>
          {heroSlides.map((_, idx) => (
            <li key={idx} className={idx === currentSlide ? "slick-active" : ""} style={{ display: "inline-block", margin: "0 6px" }}>
              <button
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: idx === currentSlide ? "var(--primary-light)" : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  padding: 0,
                  fontSize: 0,
                  transition: "var(--transition-smooth)"
                }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {idx + 1}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 1: About Us / Welcome */}
      <section className="about-us-section section reveal-on-scroll">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="fw-bold display-6" style={{ color: "var(--primary-navy)", marginBottom: "15px" }}>
              Focus Coaching Classes, Nashik Call 09920506327
            </h1>
          </div>
          <div className="row justify-content-center mx-auto" style={{ maxWidth: "850px", textAlign: "center" }}>
            <div className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-dark)" }}>
              <p style={{ marginBottom: "20px" }}>
                <strong>Join The Best Coaching Classes in Nashik for Unmatched Academic Excellence!</strong>
              </p>
              <p style={{ marginBottom: "20px" }}>
                At <strong>Focus Coaching Classes</strong>, we believe that every student has the potential to achieve greatness with the right guidance and support. Located at Gangapur Road, Nashik, we are committed to providing top-notch coaching for students aiming to excel in academics and competitive exams.
              </p>
              <p style={{ marginBottom: "20px" }}>
                Whether you’re striving for better grades or preparing for entrance exams, Focus Coaching Classes is the best coaching in Gangapur Road, designed to meet your needs.
              </p>
              <p style={{ marginBottom: "20px" }}>
                <strong>Achieve greatness in your exams with Focus Coaching Classes Nashik!</strong>
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to="/about" className="homepage-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Us (Split Section) */}
      <section className="split-layout-section homeHeroSec reveal-on-scroll">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start">
              <h3 className="display-4 fw-bold">Why Choose Focus Coaching Classes?</h3>
              <div className="mb-4">
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "15px", position: "relative", paddingLeft: "25px", fontSize: "1.05rem" }}>
                    <strong>Experienced Faculty:</strong> Learn from educators with years of experience in their respective subjects.
                  </li>
                  <li style={{ marginBottom: "15px", position: "relative", paddingLeft: "25px", fontSize: "1.05rem" }}>
                    <strong>Interactive Learning Environment:</strong> We encourage discussions, critical thinking, and student engagement.
                  </li>
                  <li style={{ marginBottom: "15px", position: "relative", paddingLeft: "25px", fontSize: "1.05rem" }}>
                    <strong>Comprehensive Study Material:</strong> Access well-researched and easy-to-understand study materials for every subject.
                  </li>
                  <li style={{ marginBottom: "15px", position: "relative", paddingLeft: "25px", fontSize: "1.05rem" }}>
                    <strong>Regular Assessments:</strong> Stay on track with weekly tests, progress reports, and performance analysis.
                  </li>
                  <li style={{ marginBottom: "15px", position: "relative", paddingLeft: "25px", fontSize: "1.05rem" }}>
                    <strong>Small Batch Sizes:</strong> Personalized attention and customized teaching methods to suit individual learning styles.
                  </li>
                </ul>
              </div>
              <div className="d-flex" style={{ gap: "15px" }}>
                <Link className="homepage-btn" to="/contact">Contact Us</Link>
                <button className="homepage-btn" onClick={onBookDemoClick}>Get Free Counselling</button>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <img
                src="/assets/common/focus-coaching-classes-nashik-2.jpg"
                alt="Why Choose Focus Coaching Classes?"
                className="img-fluid rounded shadow"
                style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "4px solid var(--primary-light)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Services */}
      <section className="featured-products section reveal-on-scroll">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold display-5">Featured Services</h3>
          </div>
          <div className="row mx-auto">
            {featuredCourses.map((course, idx) => (
              <div key={course.slug} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className={`product-card h-100`}>
                  <div className="imgWrap" style={{ padding: "0px" }}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="product-image img-fluid"
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="dataWrap">
                    <h3 className="product-name">
                      <Link className="button" to={`/services/${course.slug}`}>
                        {course.shortName}
                      </Link>
                    </h3>
                    <p className="product-description">{course.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: What Our Clients Say */}
      <section className="section bg-light reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from successful aspirants who achieved medical, engineering, and board distinction.
          </p>

          <div className="testimonial-slider-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", gap: "20px", maxWidth: "900px", margin: "0 auto" }}>
            <button
              className="carousel-arrow prev-arrow"
              onClick={handlePrevTestimonial}
              aria-label="Previous testimonial"
              style={{ background: "rgba(13, 35, 58, 0.6)", border: "none", color: "white", width: "45px", height: "45px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "var(--transition-smooth)", fontSize: "1.2rem", flexShrink: 0 }}
            >
              ❮
            </button>

            <div className="testimonial-card-centered" style={{ flexGrow: 1, padding: "20px", textAlign: "center" }}>
              <div className="testimonial-avatar-wrapper" style={{ marginBottom: "20px" }}>
                <img
                  src={testimonials[activeTestimonialIndex].image}
                  alt={testimonials[activeTestimonialIndex].name}
                  style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", margin: "0 auto", border: "4px solid var(--primary-light)", boxShadow: "var(--shadow-md)" }}
                />
              </div>
              <h5 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "4px", color: "var(--primary-navy)", fontFamily: "Outfit, sans-serif" }}>
                {testimonials[activeTestimonialIndex].name}
              </h5>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "20px", fontWeight: "500" }}>
                {testimonials[activeTestimonialIndex].role}
              </span>
              <p className="testimonial-text" style={{ fontSize: "1.1rem", fontStyle: "normal", color: "var(--text-dark)", maxWidth: "700px", margin: "0 auto 20px auto", lineHeight: "1.6" }}>
                "{testimonials[activeTestimonialIndex].text}"
              </p>
              <div className="testimonial-stars" style={{ color: "var(--accent-gold)", fontSize: "1.4rem", letterSpacing: "2px" }}>
                ★★★★★
              </div>
            </div>

            <button
              className="carousel-arrow next-arrow"
              onClick={handleNextTestimonial}
              aria-label="Next testimonial"
              style={{ background: "rgba(13, 35, 58, 0.6)", border: "none", color: "white", width: "45px", height: "45px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "var(--transition-smooth)", fontSize: "1.2rem", flexShrink: 0 }}
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Blogs Section preview */}
      <section className="section reveal-on-scroll">
        <div className="container">
          <h2 className="section-title">Featured Blogs</h2>
          <p className="section-subtitle">
            Stay updated with the latest trends.
          </p>

          <div className="blogs-grid">
            {featuredBlogs.map((blog) => (
              <div key={blog.slug} className="blog-card">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">{blog.date}</span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", lineHeight: "1.4", marginBottom: "12px" }}>
                    <Link to={`/blogs/${blog.slug}`} style={{ color: "var(--primary-navy)" }}>
                      {blog.title}
                    </Link>
                  </h4>
                  <p>{blog.excerpt}</p>
                  <Link to={`/blogs/${blog.slug}`} className="blog-link">
                    Read Article ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link to="/blogs" className="btn btn-primary">
              Read All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Join the Focus Coaching Classes (Split Section) */}
      <section className="split-layout-section section reveal-on-scroll" style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-start">
              <h3 className="display-4 fw-bold">Join the Focus Coaching Classes</h3>
              <div className="mb-4">
                <p>
                  Experience the perfect blend of quality education, personalized attention, and result-oriented preparation. Let us help you pave the way to your dream career!<br /><br />
                  With our team of <strong>experienced faculty</strong>, innovative teaching methods, and a commitment to personalized attention, we are proud to be a beacon of quality education in Nashik.
                </p>
              </div>
              <div className="d-flex" style={{ gap: "15px" }}>
                <Link to="/services" className="homepage-btn">
                  Courses We Offer
                </Link>
                <Link to="/contact" className="homepage-btn" style={{ backgroundColor: "transparent", border: "2px solid var(--primary-light)", color: "var(--primary-navy)" }}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <img
                src="/assets/common/tutorials-in-nashik-2.jpg"
                alt="Join the Focus Coaching Classes"
                className="img-fluid rounded shadow"
                style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "4px solid var(--primary-light)" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
