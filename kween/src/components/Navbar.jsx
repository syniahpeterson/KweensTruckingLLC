import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import navImg from "../assets/kweens-logo.jpeg";
import {
  FaBars,
  FaTimes,
  FaCrown,
  FaHome,
  FaTruckMoving,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const handleLinkClick = () => {
    toggleMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        if (isOpen) {
          toggleMenu();
        }
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav role="navigation" className={scrolled ? "scrolled" : ""}>
      {/* Brand */}
      <div className="nav-brand">
        <a href="#home">
          <img src={navImg} alt="Kweens Trucking Logo" />
        </a>
        <h2>Kweens Trucking</h2>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li>
          <a
            href="#Home"
            role="menuitem"
            className={activeSection === "Home" ? "active" : ""}
          >
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a
            href="#Services"
            role="menuitem"
            className={activeSection === "Services" ? "active" : ""}
          >
            <FaTruckMoving /> Services
          </a>
        </li>
        <li>
          <a
            href="#Testimonials"
            role="menuitem"
            className={activeSection === "Testimonials" ? "active" : ""}
          >
            <MdMessage /> Testimonials
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            role="menuitem"
            className={activeSection === "Contact" ? "active" : ""}
          >
            <FaPhoneAlt /> Contact
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
      <div className="theme-toggle-wrapper">
        <button
          className="theme-toggle"
          aria-label="Toggle Theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FaCrown className={`crown-icon ${theme}`} />
        </button>
        <span className="tooltip">
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </span>
      </div>

      {/* Hamburger Menu */}
      <button
        className={`menu-toggle ${theme}`}
        aria-label="Toggle Menu"
        ref={buttonRef}
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dropdown (Mobile) */}
      {isOpen && (
        <ul
          className={`dropdown-menu ${isClosing ? "closing" : "show"}`}
          ref={dropdownRef}
          role="menu"
        >
          <li>
            <a href="#Home" onClick={handleLinkClick} role="menuitem">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#Services" onClick={handleLinkClick} role="menuitem">
              <FaTruckMoving /> Services
            </a>
          </li>
          <li>
            <a href="#Testimonials" onClick={handleLinkClick} role="menuitem">
              <MdMessage /> Testimonials
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={handleLinkClick} role="menuitem">
              <FaPhoneAlt /> Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
