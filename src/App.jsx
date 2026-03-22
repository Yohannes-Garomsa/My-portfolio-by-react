import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutIntro from "./components/AboutIntro";
import TechnicalSkills from "./components/TechnicalSkills";
import ExperienceSection from "./components/ExperienceSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <AboutIntro />
      <TechnicalSkills />
      <ExperienceSection />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
