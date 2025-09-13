// src/components/Testimonials.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import client1 from "../assets/client1.jpg";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for fade-in
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

  const testimonials = [
    {
      name: "Monaye Robinson, The Grief Path",
      text: "Efficient and highly reliable service!!",
      image: client1,
    },
    {
      name: "Kareem Pringle, Pj Protectioon and Consulting",
      text: "Excellent company. We highly recommend them!",
    },
    {
      name: "David Clark, Clark Financial Service LLC",
      text: "From start to finish, the service was smooth and dependable. Highly recommend their team!",
    },
  ];

  return (
    <section
      id="Testimonials"
      className={`testimonials-section ${isVisible ? "fade-in" : ""}`}
      ref={sectionRef}
    >
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="testimonials-slider"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="testimonial-card">
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            )}
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
