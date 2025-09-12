import React, { useEffect, useRef, useState } from "react";
import aboutImg1 from "../assets/about-img1.jpeg";
import aboutImg2 from "../assets/about-img2.jpeg";
import "../styles/About.css";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for About fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
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
    <section id="About" ref={sectionRef} className={isVisible ? "fade-in" : ""}>
      {/* About Section: Title + Paragraph + Images */}
      <div className="about-container">
        {/* Title */}
        <h2 className="about-title">About Kweens Trucking</h2>

        {/* Paragraph */}
        <div className="about-text">
          <p>
            At Kweens Trucking, we were born out of necessity and driven by
            purpose. During the early days of the pandemic in 2020, we
            experienced firsthand the vital role logistics plays in keeping
            America moving and recognized the urgent need for dependable
            transportation. We stepped up to ensure that businesses across the
            country received their shipments on time. What started as a
            commitment to service quickly became a passion. We take immense
            pride in delivering not just freight, but also trust, reliability,
            and efficiency to every client we serve. Whether it is a single
            pallet or a full truckload, our team is dedicated to handling every
            shipment with the utmost care and professionalism.
          </p>
          <p>
            As an EDWOSB-certified business, we are proud to bring diversity,
            innovation, and a fresh perspective to the industry. At Kweens
            Trucking, we believe that strong business relationships are built on
            integrity, dependability, and a personal touch. We are more than
            just a trucking company—we are a partner in your supply chain,
            ensuring that your business keeps moving forward.
          </p>
          <p className="accent">Join us on the road to excellence.</p>
        </div>

        {/* Stacked Images */}
        <div className="about-images stacked">
          <img src={aboutImg1} alt="Truck 1" />
          <img src={aboutImg2} alt="Truck 2" />
        </div>
      </div>
    </section>
  );
};

export default About;
