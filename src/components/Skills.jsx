import React from "react";
import "./Skills.css";

const skills = [
  { 
    category: "Programming & Scripting", 
    list: ["Python", "SQL", "R", "JavaScript", "Shell Scripting", "Node.js", "TypeScript"] 
  },
  { 
    category: "Data Engineering & Databases", 
    list: ["MySQL", "PostgreSQL", "MongoDB", "Apache Kafka", "Spark", "Hadoop", "AWS RDS", "BigQuery"] 
  },
  { 
    category: "Data Analytics & BI Tools", 
    list: ["Power BI", "Tableau", "Looker", "Microsoft Excel (Advanced)", "DAX", "Google Data Studio", "ETL Pipelines"] 
  },
  { 
    category: "Machine Learning & AI", 
    list: ["Pandas", "Scikit-Learn", "TensorFlow", "PyTorch", "Deep Learning", "Convolutional Neural Networks (CNN)"] 
  },
  { 
    category: "Data Processing & Cloud Platforms", 
    list: ["AWS (S3, Lambda, EC2, Glue)", "GCP (BigQuery, Dataflow)", "Azure Data Factory", "Snowflake", "Databricks"] 
  },
  { 
    category: "Big Data & Streaming", 
    list: ["Apache Spark", "Kafka Streams", "Data Lakes", "Data Warehousing", "Airflow", "Delta Lake"] 
  },
  { 
    category: "Web & API Development", 
    list: ["REST APIs", "GraphQL", "Flask", "Django", "FastAPI", "Express.js", "Serverless Architecture"] 
  },
  { 
    category: "Software & DevOps", 
    list: ["GitHub", "GitLab CI/CD", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux System Administration"] 
  },
  { 
    category: "Soft Skills", 
    list: ["Problem-Solving", "Collaboration", "Agile & Scrum", "Project Management", "Teaching & Mentorship"] 
  }
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
