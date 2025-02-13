import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope, FaFileAlt } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar for Large Screens */}
      <header className="header">
        <div className="container-fluid d-flex align-items-center">
          <Link className="navbar-brand" to="/">Jaya Prakash Raavi</Link>

          <nav className="navbar-nav d-none d-lg-flex">
            <ul className="d-flex">
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Menu Button for Small Screens */}
          <button className="menu-btn d-lg-none" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* Sidebar Navigation for Small Screens */}
      <nav className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <img src="/profile.jpg" alt="Jaya Prakash Raavi" className="profile-pic" />
          <h3>Jaya Prakash Raavi</h3>
        </div>

        <ul className="sidebar-menu">
          <li><Link to="/" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}><FaUser /> About</Link></li>
          <li><Link to="/resume" onClick={() => setMenuOpen(false)}><FaFileAlt /> Resume</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}><FaBriefcase /> Services</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}><FaEnvelope /> Contact</Link></li>
        </ul>

        <div className="sidebar-footer">
          <p>Copyright © 2024</p>
        </div>
      </nav>
    </>
  );
}

export default Header;
