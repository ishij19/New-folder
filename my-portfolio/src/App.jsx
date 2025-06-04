import React from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import ToolsSection from "./components/ToolsSection";
import ProficiencySection from "./components/ProficiencySection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="bg-[#2e2e2e] text-white min-h-screen p-4 space-y-6 max-w-6xl mx-auto">
      <Header />
      <ProfileSection />
      <ToolsSection />
      <ProficiencySection />
      <ProjectsSection />
      <ContactSection />
      <AboutSection />
    </div>
  );
}

export default App;
