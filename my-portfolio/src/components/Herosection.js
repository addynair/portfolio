import React from 'react';
import Wave from 'react-wavify';
import resume from '../assets/resume.pdf';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 overflow-hidden">

      
      <header className="absolute top-0 left-0 right-0 flex flex-wrap items-center justify-between px-4 md:px-8 py-4 text-sm md:text-base bg-white text-black z-10">
        <div className="font-bold text-lg">Aditi Nair</div>
        <nav className="flex space-x-4 md:space-x-6">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#about" className="hover:underline">About</a>
          <a href={resume} download className="hover:underline">Resume</a>
        </nav>
      </header>

     
      <Wave 
        fill='#FFFFFF' 
        paused={true}
        style={{ 
          position: 'absolute', 
          top: '0', 
          left: 0, 
          right: 0, 
          transform: 'rotate(180deg)' 
        }} 
        options={{
          height: 10, 
          amplitude: 50, 
          speed: 0.15, 
          points: 20 
        }}
      />

     
      <div className="text-center px-4 md:px-6 max-w-3xl mt-20 md:mt-24 lg:mt-32 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Creating Seamless and <br className="hidden sm:block" /> User-Centered Design Experiences
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-xl lg:max-w-2xl mx-auto">
          I’m Aditi Nair, a UI/UX designer with a passion for turning ideas into intuitive designs.
          My approach blends creativity and strategy, creating impactful user experiences that connect with people.
        </p>

        <button className="mt-10 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300">
          <a href="#work">Explore my work</a>
        </button>
      </div>

      
      <Wave 
        fill='#FFFFFF' 
        paused={true}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} 
        options={{
          height: 10,
          amplitude: 50,
          speed: 0.1,
          points: 20
        }}
      />
    </section>
  );
};

export default HeroSection;