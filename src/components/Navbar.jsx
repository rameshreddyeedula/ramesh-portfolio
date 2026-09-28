function Navbar() {
  return (
    <nav className="navbar">
      {/* NAME */}
      <a href="#home" className="navbar-brand">
        <span>RAMESH</span>
        <span className="brand-accent">REDDY</span>
      </a>

      {/* NAVIGATION */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>

        
      </div>
    </nav>
  );
}

export default Navbar;