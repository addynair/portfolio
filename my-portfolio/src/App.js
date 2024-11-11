import React, { useState, useEffect } from 'react';
import HeroSection from './components/Herosection';
import WorkSection from './components/worksection';
import AboutSection from './components/aboutsection';
import SocialLinks from './components/sociallinks';
import ViewProject from './components/ViewProject';

function App() {
  const [selectedProject, setSelectedProject] = useState(null); 

  const handleViewProject = (project) => {
    setSelectedProject(project); 
  };

  const handleCloseProject = () => {
    setSelectedProject(null); 
  };

  
  useEffect(() => {
    document.title = selectedProject ? selectedProject.title : "Aditi Nair"; 
  }, [selectedProject]);

  return (
    <div className="App">
      {selectedProject ? (
        <ViewProject project={selectedProject} onClose={handleCloseProject} /> 
      ) : (
        <>
          <HeroSection />
          <WorkSection onViewProject={handleViewProject} /> 
          <AboutSection />
          <SocialLinks />
        </>
      )}
    </div>
  );
}

export default App;