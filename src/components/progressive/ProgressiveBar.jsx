import React from "react";
import "./Progressive.scss";

const skills = [
  { name: "HTML", level: 90, icon: "fab fa-html5", category: "frontend" },
  { name: "CSS", level: 85, icon: "fab fa-css3-alt", category: "frontend" },
  { name: "JavaScript", level: 80, icon: "fab fa-js", category: "frontend" },
  {
    name: "Vanilla JS",
    level: 90,
    icon: "fab fa-js",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    level: 90,
    icon: "fab fa-bootstrap",
    category: "frontend",
  },
  {
    name: "Tailwind",
    level: 80,
    icon: "fab fa-css3-alt",
    category: "frontend",
  },
  { name: "SCSS", level: 80, icon: "fab fa-sass", category: "frontend" },
  { name: "Redux", level: 60, icon: "fab fa-react", category: "frontend" },
  { name: "React", level: 85, icon: "fab fa-react", category: "frontend" },
  { name: "Node.js", level: 40, icon: "fab fa-node-js", category: "backend" },
  { name: "Express", level: 55, icon: "fas fa-server", category: "backend" },
  { name: "FireBase", level: 50, icon: "fas fa-database", category: "backend" },
  { name: "Rest Api", level: 45, icon: "fas fa-database", category: "backend" },
  { name: "MongoDB", level: 50, icon: "fas fa-database", category: "backend" },
  // Add more skills if needed
];

const ProgressiveBar = ({ showFrontend = true }) => {
  return (
    <section id="Skills" className="skills-section">
      <div className="skills-grid">
        {skills
          .filter(
            (skill) =>
              (showFrontend && skill.category === "frontend") ||
              (!showFrontend && skill.category === "backend")
          )
          .map((skill) => (
            <div key={skill.name} className="skill-card">
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
                <p
                  style={{
                    color: "lightgray",
                    marginTop: "5px",
                    paddingBottom: "15px",
                  }}
                >
                  {skill.level}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProgressiveBar;
