function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p>05 / PROJECTS</p>

        <h2>Things I've built.</h2>
      </div>

      <div className="project-grid">

        {/* ================= INTELLIDESK AI ================= */}
        <div className="project-card featured-project">

          <div className="project-number">
            01
          </div>

          <div className="project-label">
            FULL STACK • AI
          </div>

          <h3>
            IntelliDesk AI
          </h3>

          <p>
            A full-stack task management application with an AI assistant.
            The application allows users to create, update, delete and
            track tasks while AI analysis provides task priority,
            estimated time, complexity, recommended steps and basic advice.
          </p>

          <div className="tags">
            <span>React.js</span>
            <span>JavaScript</span>
            <span>Python</span>
            <span>FastAPI</span>
            <span>SQLite</span>
            <span>Ollama</span>
            <span>Gemma</span>
          </div>

          <div className="project-features">
            <span>AI Task Analysis</span>
            <span>REST API</span>
            <span>CRUD Operations</span>
            <span>Task Dashboard</span>
          </div>

          <a
            href="https://github.com/rameshreddyeedula/IntelliDesk-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="project-github"
          >
            View IntelliDesk AI on GitHub ↗
          </a>

        </div>


        {/* ================= DEFECT DETECTION ================= */}
        <div className="project-card">

          <div className="project-number">
            02
          </div>

          <div className="project-label">
            COMPUTER VISION
          </div>

          <h3>
            Computer Vision-Based
            <br />
            Defect Detection
          </h3>

          <p>
            A Python and OpenCV-based computer vision system developed
            to detect and classify defects from images. Image-processing
            techniques were combined with Arduino-based alerts to support
            automated monitoring and response.
          </p>

          <div className="tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>Computer Vision</span>
            <span>Arduino</span>
            <span>IoT</span>
          </div>

          <div className="project-note">
            FINAL YEAR PROJECT
          </div>

          <a
            href="https://www.linkedin.com/posts/ramesh-reddy-eedulakanti-090259294_computervision-opencv-python-activity-7452878567413071872-dI0j"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Final Year Project on LinkedIn ↗
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;