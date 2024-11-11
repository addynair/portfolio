import React from 'react';
import medimate1 from '../assets/homepage.png';
import medimate2 from '../assets/welcome.png';

const WorkSection = ({ onViewProject }) => {
  const projects = [
    { title: 'MediMate', description: 'This mental health app is designed to support users on their journey to well-being with daily check-ins, a personal journal, helpful reminders, and a friendly chatbot. It provides a safe space for users to express themselves, access mental health resources, and build healthy habits—all in a gentle, user-centered experience.', 
      img1: medimate1, img2: medimate2, tag: '#HEALTHTRACKING' },
  ];

  return (
    <section id="work" className="px-0 py-12 mx-auto my-0 max-w-7xl">
      <h2 className="text-5xl font-bold mb-10 text-left">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start bg-gray-100 border border-gray-300 shadow-xl p-8 rounded-lg"
          >
            <span className="text-sm font-semibold text-gray-600 mb-2 px-3 py-1 bg-white rounded-full">
              {project.tag}
            </span>
            <div className="flex justify-center mb-4 space-x-4">
              <img
                src={project.img1}
                alt={`${project.title}`}
                className="w-1/3 h-auto object-contain rounded-md"
              />
              <img
                src={project.img2}
                alt={`${project.title}`}
                className="w-1/3 h-auto object-contain rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <div className="flex mt-6">
              <button 
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 w-full"
                onClick={() => onViewProject(project)} 
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;