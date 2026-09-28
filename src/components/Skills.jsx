import React from "react";

function Skills() {
  const skills = [
    "Python",
    "JavaScript",
    "React.js",
    "HTML5",
    "CSS3",
    "SQL",
    "Git & GitHub",
    "AWS Fundamentals",
    "IoT",
    "Manual Testing",
  ];

  return (
    <section className="section" id="skills">

      <div className="section-heading">
        <p>MY TOOLKIT</p>

        <h2>
          Technical
          <br />
          Toolkit
        </h2>

        <div className="section-intro">
          Technologies and tools I use while learning,
          building and solving practical problems.
        </div>
      </div>

      <div className="skills">

        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={skill}
            style={{
              animationDelay: `${index * 0.08}s`,
            }}
          >
            <span className="skill-dot"></span>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;