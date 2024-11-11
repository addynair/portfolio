import React from 'react';
import Wave from 'react-wavify';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-black text-white py-44 px-6"> 
      
      
      <Wave 
        fill='#FFFFFF' 
        paused={true} 
        style={{ 
          position: 'absolute', 
          top: 0, 
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

      
      <div className="flex flex-col items-center text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          I’m Aditi Nair, a UI/UX designer who thrives on creating user-friendly and visually engaging designs. With a focus on blending creativity, empathy, and technical skills, I aim to bring impactful ideas to life through seamless user experiences.
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          My experience spans various projects, each teaching me the value of understanding users' needs and translating them into intuitive, accessible designs. From conceptualizing to prototyping, my goal is to make every interaction meaningful.
        </p>
        <p className="text-lg max-w-2xl mx-auto">
          Let's connect and explore how design can make a difference in the digital landscape.
        </p>
      </div>

      
      <Wave 
        fill='#FFFFFF' 
        paused={true} 
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} 
        options={{
          height: 10,
          amplitude: 50,
          speed: 0.15,
          points: 20
        }}
      />
    </section>
  );
};

export default AboutSection;