import React from "react";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";

const AllSections = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center w-full">
      <section id="home" className="w-full"><Home /></section>
      <section id="about" className="w-full"><About /></section>
      <section id="education" className="w-full"><Education /></section>
      <section id="skills" className="w-full"><Skills /></section>
      <section id="experience" className="w-full"><Experience /></section>
      <section id="projects" className="w-full"><Projects /></section>
      <section id="certifications" className="w-full"><Certifications /></section>
      <section id="contact" className="w-full"><Contact /></section>
    </main>
  );
};

export default AllSections;
