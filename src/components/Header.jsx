import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/logo/image.png";

export default function Header({ onBookDemoClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownHover = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown("");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                src={logoImage}
                alt="Focus Coaching Classes"
              />
            </Link>
          </div>

          <div className="nav-menu">
            <ul className="nav-list">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-item-link ${isActive ? "active" : ""}`}>
                  Home
                </NavLink>
              </li>

              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => handleDropdownHover("about")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-toggle">
                  About <span style={{ fontSize: "0.8rem" }}>▼</span>
                </div>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </li>

              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => handleDropdownHover("courses")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-toggle">
                  Courses <span style={{ fontSize: "0.8rem" }}>▼</span>
                </div>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/services">All Courses</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/services/best-jee-coaching-classes-in-gangapur-road-focus-coaching-classes">JEE Classes</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/services/neet-classes">NEET Classes</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/services/mht-cet-classes-in-gangapur-road-nashik">MHT CET Classes</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/services/10th-cbse-coaching-classes-in-nashik">10th CBSE Classes</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/services/10th-ssc-classes-in-nashik">10th SSC Classes</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/services/9th-cbse-coaching-classes-in-nashik">9th CBSE Classes</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/services/9th-ssc-classes-in-gangapur-road-nashik">9th SSC Classes</Link>
                  </li>
                </ul>
              </li>

              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => handleDropdownHover("resources")}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-toggle">
                  Resources <span style={{ fontSize: "0.8rem" }}>▼</span>
                </div>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/latest-update">Latest Updates</Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-item-link ${isActive ? "active" : ""}`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-menu">
            <ul className="rightNav">
              <li>
                <button className="btn btn-primary" onClick={onBookDemoClick}>
                  Book Demo Class
                </button>
              </li>
              <li>
                <a href="tel:09920506327" className="phone-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#95c6d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>09920506327</span>
                </a>
              </li>
            </ul>
          </div>

          <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </div>
    </header>

    {/* Mobile Menu Side Drawer Backdrop and Drawer */}
    {isMobileMenuOpen && (
        <>
          <div className="mobile-nav-backdrop" onClick={closeMobileMenu} />
          <div className="mobile-nav-overlay">
            <div className="mobile-nav-header">
              <div className="mobile-logo">
                <img
                  src={logoImage}
                  alt="Focus Coaching Classes"
                />
              </div>
              <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="mobile-nav-list">
              <li>
                <Link to="/" className="mobile-nav-item" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="mobile-nav-item" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="mobile-dropdown">
                <span 
                  className="mobile-nav-item" 
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                  style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
                >
                  <span>Courses</span>
                  <span style={{ fontSize: "0.8rem", transform: isMobileCoursesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
                </span>
                {isMobileCoursesOpen && (
                  <ul className="mobile-dropdown-menu">
                    <li>
                      <Link to="/services" onClick={closeMobileMenu}>
                        All Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/best-jee-coaching-classes-in-gangapur-road-focus-coaching-classes" onClick={closeMobileMenu}>
                        JEE Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/neet-classes" onClick={closeMobileMenu}>
                        NEET Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/mht-cet-classes-in-gangapur-road-nashik" onClick={closeMobileMenu}>
                        MHT CET Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/10th-cbse-coaching-classes-in-nashik" onClick={closeMobileMenu}>
                        10th CBSE Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/10th-ssc-classes-in-nashik" onClick={closeMobileMenu}>
                        10th SSC Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/9th-cbse-coaching-classes-in-nashik" onClick={closeMobileMenu}>
                        9th CBSE Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/9th-ssc-classes-in-gangapur-road-nashik" onClick={closeMobileMenu}>
                        9th SSC Classes
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="mobile-dropdown">
                <span 
                  className="mobile-nav-item" 
                  onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                  style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
                >
                  <span>Resources</span>
                  <span style={{ fontSize: "0.8rem", transform: isMobileResourcesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
                </span>
                {isMobileResourcesOpen && (
                  <ul className="mobile-dropdown-menu">
                    <li>
                      <Link to="/blogs" onClick={closeMobileMenu}>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery" onClick={closeMobileMenu}>
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/latest-update" onClick={closeMobileMenu}>
                        Latest Updates
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/contact" className="mobile-nav-item" onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mobile-nav-drawer-footer">
              <a href="tel:09920506327" className="mobile-nav-phone-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle" }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span> 09920506327</span>
              </a>
              <button
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "12px" }}
                onClick={() => {
                  closeMobileMenu();
                  onBookDemoClick();
                }}
              >
                Book Demo Class
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
