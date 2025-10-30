// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./themes/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./styles/globals.css";

<div className="min-h-screen flex flex-col overflow-visible">
  <main className="flex-grow">
    <Routes>
      {/* routes */}
    </Routes>
  </main>
  <Footer />
</div>
export default function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* fixed nav always visible */}
        <nav
          className="fixed top-0 left-0 w-full h-16
                     flex justify-center items-center gap-6
                     bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow z-50"
        >
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/education" className="hover:text-blue-600 transition">Education</Link>
          <Link to="/skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link to="/experience" className="hover:text-blue-600 transition">Experience</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/certifications" className="hover:text-blue-600 transition">Certifications</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* theme toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* the scrolling area */}
        <div className="pt-16 min-h-screen flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}