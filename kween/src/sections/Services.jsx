import React, { useEffect, useRef, useState } from "react";
import "../styles/Services.css";

// Example images (replace with your real assets later)
import service1 from "../assets/service1.jpeg";
import service2 from "../assets/service2.jpeg";
import service3 from "../assets/service3.jpeg";
import service4 from "../assets/service4.jpeg";

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animation
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
      id="Services"
      className={`services-section ${isVisible ? "fade-in" : ""}`}
      ref={sectionRef}
    >
      {/* Section Title */}
      <h2 className="services-title">Our Services</h2>

      {/* Services Grid */}
      <div className="services-grid">
        <div className="service-card">
          <img src={service1} alt="Freight Shipping" />
          <h3>Expedited Freight</h3>
          <p>
            When time matters, our expedited service ensures fast, on-time
            delivery. Count on us for reliable shipping and peace of mind when
            every minute counts.
          </p>
        </div>

        <div className="service-card">
          <img src={service2} alt="Expedited Delivery" />
          <h3>Less Than Truckload (LTL)</h3>
          <p>
            Need to ship without a full truck? Our LTL service is a
            cost-effective, efficient option—now with expedited delivery for
            timely, secure arrivals.
          </p>
        </div>

        <div className="service-card">
          <img src={service3} alt="Logistics Management" />
          <h3>Full Truckload (FTL)</h3>
          <p>
            For large or urgent shipments, our FTL service offers a dedicated
            truck with direct delivery—ensuring faster transit and reduced risk
            of delays or damage.
          </p>
        </div>

        <div className="service-card">
          <img src={service4} alt="Dedicated Routes" />
          <h3>Local Deliveries and More</h3>
          <p>
            We offer fast, dependable local delivery. Whether it's a nearby stop
            or a quick turnaround, your shipments arrive safely and right on
            time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
