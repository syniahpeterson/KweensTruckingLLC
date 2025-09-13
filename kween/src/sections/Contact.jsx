import React, { useRef, useState, useEffect } from "react";
import { FaCrown } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  // Fade in animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_024tphq",
        "template_4zwognf",
        formRef.current,
        "iYK7fNva_5p_snMW5"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  // Button text based on status
  const getButtonText = () => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "success":
        return "Message Sent";
      case "error":
        return "Error. Try Again";
      default:
        return "Send Message";
    }
  };

  return (
    <section
      id="Contact"
      ref={sectionRef}
      className={`contact-section ${isVisible ? "visible" : ""}`}
    >
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">
        Have questions or need a quote? Fill out the form below.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            autoComplete="name"
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="user_phone"
            id="phone"
            required
            autoComplete="tel"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            autoComplete="email"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            autoComplete="off"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className={`cta-button ${status}`}
          disabled={status === "sending"}
        >
          <FaCrown className="crown-icon" />
          {status === "idle" && "Send Message"}
          {status === "sending" && "Sending..."}
          {status === "success" && "Message Sent!"}
          {status === "error" && "Try Again"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
