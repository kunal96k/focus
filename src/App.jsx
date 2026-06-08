import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Shared Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import QueryModal from "./components/QueryModal";
import ScrollToTop from "./components/ScrollToTop";
import MobileBottomNav from "./components/MobileBottomNav";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import LatestUpdates from "./pages/LatestUpdates";
import LatestUpdateDetail from "./pages/LatestUpdateDetail";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function AppContent({ isDemoModalOpen, handleOpenDemoModal, handleCloseDemoModal }) {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Short delay to ensure the DOM elements are fully loaded and rendered
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      
      {/* Sticky Top Header */}
      <Header onBookDemoClick={handleOpenDemoModal} />

      <main key={location.pathname} className="page-transition" style={{ minHeight: "60vh" }}>
        <Routes>
          <Route path="/" element={<Home onBookDemoClick={handleOpenDemoModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Courses />} />
          <Route path="/services/:slug" element={<CourseDetail onBookDemoClick={handleOpenDemoModal} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail onBookDemoClick={handleOpenDemoModal} />} />
          <Route path="/latest-update" element={<LatestUpdates />} />
          <Route path="/latest-update/:slug" element={<LatestUpdateDetail onBookDemoClick={handleOpenDemoModal} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onBookDemoClick={handleOpenDemoModal} />} />
        </Routes>
      </main>

      {/* Footer layout */}
      <Footer />

      {/* WhatsApp chat widget */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Nav Bar */}
      <MobileBottomNav onBookDemoClick={handleOpenDemoModal} />

      {/* Demo Booking Query Modal */}
      <QueryModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </>
  );
}

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Timed popup to trigger lead capture modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const modalShown = sessionStorage.getItem("demoModalShown");
      if (!modalShown) {
        setIsDemoModalOpen(true);
        sessionStorage.setItem("demoModalShown", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <Router>
      <AppContent 
        isDemoModalOpen={isDemoModalOpen} 
        handleOpenDemoModal={handleOpenDemoModal} 
        handleCloseDemoModal={handleCloseDemoModal} 
      />
    </Router>
  );
}
