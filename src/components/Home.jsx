import React from "react";
import "./Home.css";
import About from "./About";

function Home() {
  return (
    <div className="home-container">
    <section className="home">
      <div className="container">
        <div className="text-content">
          <h1 className="title">Jaya Prakash Raavi</h1>
          <p className="gradient-text">
            <span>Software Engineer</span> | <span>Data Analyst</span> |{" "}
            <span>Web Developer</span>
          </p>
          <p className="summary">
            Welcome! I am a Data Engineer, Business Intelligence Developer, and
            Web Developer with expertise in Data Engineering, Analytics, Web
            Development, and Cloud Technologies. My work focuses on building
            scalable data solutions, automating workflows, and creating
            insightful visualizations to drive decision-making.
          </p>
          

          <div className="buttons">
            <a href="/resume.pdf" download className="button primary">Download Resume</a>
            <a href="#contact" className="button secondary">Hire Me</a>
          </div>
        </div>
        <div className="image-content">
          <img
            src="/profile.jpg"
            alt="Jaya Prakash Raavi"
            className="profile-image"
          />
        </div>
      </div>
    </section>


   <About />

    </div>
  );
}

export default Home;
