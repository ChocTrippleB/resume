import type { Route } from "./+types/home";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SectionRoadmap from "../components/SectionRoadmap";
import FloatingSkills from "../components/FloatingSkills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bantu Bethu Beya | Software Developer" },
    { name: "description", content: "Full-stack developer specializing in ASP.NET Core, React, and modern web technologies. Building scalable solutions and exceptional digital experiences." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <SectionRoadmap />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
