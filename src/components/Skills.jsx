import React from "react";
import "./Skills.css";

const skills = [
  { category: "Programming", list: ["Python", "R", "JavaScript", "SQL/MySQL", "Node.js", "MongoDB", "React.js"] },
  { category: "Data & Analytics", list: ["Data Analysis", "Data Visualization", "Data Science", "Big Data Analytics", "Microsoft Power BI", "DAX"] },
  { category: "Machine Learning & AI", list: ["Deep Learning", "Convolutional Neural Networks (CNN)", "Artificial Intelligence (AI)", "Transfer Learning", "Inception V3"] },
  { category: "Web Development", list: ["HTML5", "CSS", "Bootstrap", "Angular", "Angular Material", "Web Applications"] },
  { category: "Software & Tools", list: ["GitHub", "GitHub Copilot", "Alteryx", "Figma", "PTV Vissim", "GIS Applications"] },
  { category: "Soft Skills", list: ["Problem-Solving", "Collaboration", "Teaching & Mentorship", "Time Management", "Communication", "Project Management"] }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div className="skill-category" key={index}>
            <h3>{skillGroup.category}</h3>
            <ul>
              {skillGroup.list.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
