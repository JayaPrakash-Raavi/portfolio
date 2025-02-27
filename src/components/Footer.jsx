import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/jayaprakashraavi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/JayaPrakash-Raavi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="mailto:jpn9121@gmail.com">
            <FaEnvelope className="social-icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jaya Prakash Raavi | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
