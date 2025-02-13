import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>Software Engineer | Data Analyst | Web Developer</p>
      <a href="#projects" className="button">View Projects</a>
    </section>
  );
}

export default Hero;
