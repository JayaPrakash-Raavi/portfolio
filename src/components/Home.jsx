import React from "react";
import "./Home.css";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-container">
      <section className="home">
        <div className="container">
          <div className="text-content">
            <h1 className="title">Jaya Prakash Raavi</h1>
            <p className="gradient-text">
              <span>Data Engineer</span> | <span>Data Analyst</span> |{" "}
              <span>Business Intelligence Developer</span>
            </p>

            <p className="summary">
              Passionate **Data Engineer & Analyst** with expertise in **Big Data Processing, 
              Cloud Data Engineering, SQL Optimization, and Data Warehousing**. 
              I specialize in **designing scalable data pipelines, real-time data processing, and advanced analytics** 
              to transform raw datasets into actionable business insights.
            </p>

            <p className="summary">
              My expertise includes working with **SQL, Python, Apache Spark, Kafka, Airflow, and Power BI** 
              to build robust **ETL workflows, predictive analytics models, and automated data pipelines**.
              I thrive in **data-driven environments**, ensuring **data quality, governance, and efficient reporting**.
            </p>

            <div className="buttons">
              <a href="/Resume.pdf" download className="button primary">Download Resume</a>
              <Link to="/contact" className="button secondary">Let's Connect</Link>
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

      {/* Include About, Experience, and Skills Sections */}
      <About />
      <Skills />
    </div>
  );
}

export default Home;
