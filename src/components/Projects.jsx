import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Tennessee Statewide Land Use Dashboard",
      description:
        "Developed an interactive dashboard using R, Power BI, and GIS tools to visualize land usage, demographics, and economic data across Tennessee.",
      link: "https://github.com/JayaPrakash-Raavi/LandUse-Dashboard-in-R",
      image: "/land-use-dashboard.png",
    },
    {
      title: "Referral Management Database",
      description:
        "Designed a structured database for managing patient referrals, optimizing healthcare workflows using SQL and Python automation.",
      link: "https://github.com/JayaPrakash-Raavi/Refferral_database",
      image: "/referral-database.png",
    },
    {
      title: "Public Transport Visualization",
      description:
        "Built an analytical dashboard for visualizing real-time transit data using D3.js and Tableau, aiding transportation research.",
      link: "https://github.com/JayaPrakash-Raavi/Public-Transport-Preference-Tennessee",
      image: "/public-transport.png",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
