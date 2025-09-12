import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";
import heroImg from "../assets/hero-img.jpg";

const Home = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations every time
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="Home"
      className={`home-section ${isVisible ? "fade-in" : ""}`}
      ref={sectionRef}
    >
      {/* Hero Image + Overlay Text */}
      <div className="hero-image">
        <img src={heroImg} alt="Kweens Trucking" />
        <div className="hero-text">
          <h1 className="hero-title">Kweens Trucking</h1>
          <p className="hero-slogan">
            Delivering Excellence, One Mile at a Time
          </p>

          {/* CTA Button */}
          <a href="#Contact" className="cta-button">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
