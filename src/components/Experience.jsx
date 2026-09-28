import React from "react";

function Experience() {
  return (
    <section className="section" id="experience">

      <div className="section-heading">
        <p>EXPERIENCE</p>

        <h2>
          Learning by
          <br />
          building.
        </h2>

        <div className="section-intro">
          Practical experience gained through internships and
          hands-on software development projects.
        </div>
      </div>

      {/* PYTHON INTERNSHIP */}
      <div className="experience-card">

        <div className="experience-number">
          01
        </div>

        <div className="experience-content">

          <div className="experience-meta">
            INTERNSHIP · 2 MONTHS
          </div>

          <h3>
            Python Development Intern
          </h3>

          <h4>
            Infotact Solutions
            <span> · Remote</span>
          </h4>

          <p>
            Gained practical experience in Python development by
            working on application-oriented tasks and building
            small software solutions. Worked with application
            logic, data handling and backend development concepts.
          </p>

          <ul>
            <li>
              Developed a Python-based file automation script
              for organizing and automating file operations.
            </li>

            <li>
              Built a Flask-based ToDo web application to
              practice backend routing, application logic and
              data handling.
            </li>

            <li>
              Applied Python programming concepts while
              developing and testing application functionality.
            </li>
          </ul>

          <div className="experience-tags">
            <span>Python</span>
            <span>Flask</span>
            <span>SQL</span>
            <span>Git</span>
          </div>

        </div>

      </div>


      {/* INTELLIDESK */}
      <div className="experience-card">

        <div className="experience-number">
          02
        </div>

        <div className="experience-content">

          <div className="experience-meta">
            PROJECT EXPERIENCE
          </div>

          <h3>
            IntelliDesk AI
          </h3>

          <h4>
            Frontend / AI Application Development
          </h4>

          <p>
            Worked on an AI-powered application with a focus on
            developing modern frontend interfaces and connecting
            application components with AI functionality.
          </p>

          <ul>
            <li>
              Developed and structured user interface components
              using React.js.
            </li>

            <li>
              Worked with JavaScript to implement frontend
              application functionality and interactions.
            </li>

            <li>
              Integrated frontend components with AI-powered
              application workflows.
            </li>

            <li>
              Explored local AI workflows using Ollama and
              Gemma-based models.
            </li>

            <li>
              Worked with frontend-to-backend communication while
              developing application features.
            </li>
          </ul>

          <div className="experience-tags">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>AI</span>
            <span>Ollama</span>
            <span>Gemma</span>
          </div>

          <a
  href="https://github.com/rameshreddyeedula/IntelliDesk-AI"
  target="_blank"
  rel="noopener noreferrer"
  className="project-github"
>
  View IntelliDesk on GitHub ↗
</a>

        </div>

      </div>

    </section>
  );
}

export default Experience;