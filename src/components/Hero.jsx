function Hero() {
  return (
    <section className="hero" id="home">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="hero-text">

        <div className="availability">
          <span></span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <p className="hello">
          HELLO, I'M
        </p>

        <h1>
          Ramesh
          <span>Reddy.</span>
        </h1>

        <h2>
          Full Stack Developer
        </h2>

        <p className="description">
          B.Tech graduate in Electronics and Communication Engineering
          passionate about building practical software applications,
          solving real-world problems and continuously improving my
          development skills.
        </p>

        <div className="location">
          📍 Hyderabad, Telangana, India
        </div>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="main-btn"
          >
            View My Work →
          </a>

          <a
            href="/Ramesh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            Resume ↓
          </a>

        </div>

        <div className="hero-socials">

          <a
            href="https://linkedin.com/in/ramesh-reddy-eedulakanti-090259294"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://leetcode.com/u/eedulakantiramesh/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode ↗
          </a>

        </div>

      </div>

      <div className="photo-area">

        

        <div className="photo-ring">

          <img
            src="/images/Ramesh_profile.png"
            alt="Ramesh Reddy Eedulakanti"
          />

        </div>

        <div className="photo-label bottom">
          FULL STACK DEVELOPER 
        </div>

      </div>

    </section>
  );
}

export default Hero;