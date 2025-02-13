import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "The University of Memphis",
    duration: "Aug 2024 - Dec 2024 · 5 mos",
    location: "Memphis, Tennessee, United States · On-site",
    responsibilities: [
      "Providing support and guidance to students, clarifying complex concepts, and resolving doubts related to Data Mining methodologies and techniques.",
      "Taught Data Mining techniques, guiding students in using Python and SQL for large datasets.",
      "Contributing Rubrics for grading assignments and exams, ensuring fair and consistent evaluation throughout the course.",
    ],
    skills: ["Data Mining", "Python", "SQL", "+9 more"],
    logo: "/uofm-logo.png",
  },
  {
    role: "Software Engineer (Data Analyst)",
    company: "Herff College of Engineering",
    duration: "Nov 2023 - Oct 2024 · 1 yr",
    location: "Memphis, Tennessee, United States · On-site",
    responsibilities: [
      "Performed comprehensive data cleaning and preprocessing to ensure data accuracy and integrity, optimizing datasets for analysis.",
      "Analyzed complex datasets to identify patterns and trends, providing actionable insights that enhanced research project outcomes.",
      "Created interactive dashboards and visualizations using Power BI and Tableau, effectively communicating key findings to stakeholders.",
      "Automated data processing workflows using Python and MATLAB, increasing efficiency and reducing manual tasks.",
      "Employed VISSIM scripting for traffic data simulation and modeling, supporting transportation research with dynamic analysis.",
      "Collaborated with research teams to understand data requirements, translating them into insightful analytical reports that informed decision-making.",
    ],
    skills: ["Problem Solving", "Microsoft Power BI", "+10 more"],
    logo: "/herff-logo.png",
  },
  {
    role: "Business Intelligence Developer",
    company: "InnovaPath, INC.",
    duration: "Jan 2022 - Nov 2022 · 11 mos",
    location: "Hyderabad, Telangana, India · On-site",
    responsibilities: [
      "Created and maintained web-based dashboards using React.js, making sure they are cross-browser compatible.",
    ],
    skills: ["JavaScript", "MongoDB", "+7 more"],
    logo: "/images/innova-logo.png",
  },
  {
    role: "Business Intelligence Developer",
    company: "InnovaPath, INC. (Internship)",
    duration: "Jul 2021 - Jan 2022 · 7 mos",
    location: "Hybrid",
    responsibilities: [
      "Assisted in developing analytical dashboards and performing data transformation for business intelligence needs.",
    ],
    skills: ["Data Analysis", "React.js", "SQL"],
    logo: "/images/innova-logo.png",
  },
];

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
            </div>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-location">{exp.location}</p>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
            <p className="experience-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
