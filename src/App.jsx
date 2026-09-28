import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Education />

      <Experience />

      <Projects />

      <Certificates />

      <Contact />

      <footer>
        © {new Date().getFullYear()} Ramesh Reddy Eedulakanti
      </footer>

    </div>
  );
}

export default App;