import React, { useState } from "react";
import "./About.scss";
import ProgressiveBar from "../progressive/ProgressiveBar";

const About = () => {
  const [active, setActive] = useState("front");

  const handleChange = (content) => {
    setActive(content);
  };
  return (
    <div className="about">
      <div className="container">
        <div className="heading">
          <h1 className="about_heading">
            <span>About Us</span>
          </h1>
        </div>
        <div className="button_container">
          <button onClick={() => handleChange("front")}>Frontend Skill</button>
          <button onClick={() => handleChange("back")}>Backend Skill</button>
          <button onClick={() => handleChange("edu")}>My Education</button>
        </div>

        {/* Conditionally render content based on state */}
        {active === "front" && (
          <div className="frontend_section">
            <h2
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "30px",
                letterSpacing: "3px",
              }}
            >
              Frontend Skill
            </h2>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              I have over 2 years of experience and possess strong knowledge in
              frontend development.
            </p>
            <ProgressiveBar showFrontend={true} />
          </div>
        )}

        {active === "back" && (
          <div className="backend">
            <h2
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "40px",
              }}
            >
              Backend
            </h2>
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "20px",
              }}
            >
              I also Have some Experience in Backend Development
            </p>
            <ProgressiveBar showFrontend={false} />
          </div>
        )}

        {active === "edu" && (
          <>
            <h1
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "40px",
              }}
            >
              Education
            </h1>
            <div
              style={{
                //   textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="edu"
                style={{
                  padding: "50px",
                  background: "rebeccapurple",
                  width: "600px",
                  marginTop: "50px",
                  marginBottom: "220px",
                  textAlign: "center",
                }}
              >
                <h2>BS Software Engineering (2022 - 2026)</h2>
                <p
                  style={{
                    //   lineHeight: "23px",
                    marginTop: "10px",
                    fontSize: "20px",
                  }}
                >
                  I am pursuing a Bachelor’s in Software Engineering at the FSD
                  campus of GC University. The program equips me with skills in
                  programming, software development, and project management
                  through hands-on projects and internships. My studies focus on
                  applying theoretical knowledge to real-world problems,
                  preparing me for a career in technology.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
