import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Text Content */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="summary">
            I am a <strong>Data Analyst & Web Developer</strong> passionate about 
            transforming data into actionable insights and building modern, 
            scalable applications. With expertise in <strong>Power BI, Tableau, SQL, 
            Python, and GIS tools</strong>, I specialize in <strong>interactive dashboards, 
            automation, and predictive analytics</strong> to drive data-driven 
            decision-making.
          </p>

          <p className="summary">
            As a <strong>Web Developer</strong>, I create <strong>efficient, responsive, and 
            scalable applications</strong> using <strong>React, Next.js, Node.js, and 
            MongoDB</strong>. My experience includes <strong>REST API development, 
            authentication, and database optimization</strong>, ensuring seamless user 
            experiences and high-performance applications.
          </p>

          <p className="summary">
            By combining <strong>data analytics</strong> and <strong>web development</strong>, I develop 
            <strong>full-stack solutions</strong> that not only visualize complex data 
            effectively but also empower businesses with <strong>intelligent, 
            interactive applications</strong>.
          </p>
        </div>

        {/* Animated SVG Illustration */}
        <div className="about-svg">
          <svg
            className="svg-animation"
            width="400"
            height="400"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Developer's Desk */}
            <rect x="80" y="280" width="340" height="120" rx="15" fill="#2C3E50" />

            {/* Laptop */}
            <rect x="180" y="200" width="140" height="80" rx="8" fill="#1ABC9C" />
            <rect x="190" y="210" width="120" height="60" rx="5" fill="white" />

            {/* Animated Circles for "Data Flow" */}
            <circle className="circle1" cx="120" cy="150" r="12" fill="#F1C40F" />
            <circle className="circle2" cx="250" cy="100" r="10" fill="#E74C3C" />
            <circle className="circle3" cx="380" cy="150" r="12" fill="#3498DB" />

            {/* Animated Developer Icon */}
            <circle cx="250" cy="280" r="50" fill="#ECF0F1" />
            <rect x="220" y="320" width="60" height="40" rx="5" fill="#E67E22" />
          </svg>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator"></div>
    </section>
  );
}

export default About;
