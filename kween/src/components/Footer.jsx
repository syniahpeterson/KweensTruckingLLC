import React from "react";
import { FaArrowUp, FaPhoneAlt, FaEnvelope, FaCrown } from "react-icons/fa";
import footerLogo from "../assets/kweens-logo.jpeg";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Left Side: Logo + Company Name + Slogan */}
      <div className="footer-brand">
        <img src={footerLogo} alt="Kweens Trucking Logo" />
        <div>
          <h3>Kweens Trucking</h3>
          <a href="#About"><p className="footer-slogan"><FaCrown /> Hauling with Royal Precision <FaCrown /></p></a>
        </div>
      </div>

      {/* Center: Contact Info */}
      <div className="footer-info">
        <p>
          <FaEnvelope className="icon" />
          <a href="mailto:Latrice@kweenstrucking.com">
            Latrice@kweenstrucking.com
          </a>
        </p>
        <p>
          <FaPhoneAlt className="icon" />
          <a href="tel:18432126774">(843) 212-6774</a>
        </p>
      </div>

      {/* Right Side: Back to Top */}
      <div className="footer-top">
        <button onClick={scrollToTop} aria-label="Back to Top">
          <FaArrowUp />
        </button>
      </div>

      {/* Bottom Divider */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Kweens Trucking. All Rights Reserved.{" "}
          <FaCrown className="crown" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
