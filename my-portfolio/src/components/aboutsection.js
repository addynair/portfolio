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
        I’m Aditi Nair, and I’m just starting out in the world of UI/UX design. I love crafting designs that are both easy to use and visually appealing. For me, design is all about bringing creativity, empathy, and some tech skills together to make things work better for people.
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-6">
        Each project I work on teaches me something new, especially about understanding what people actually need and turning that into designs that feel natural. I’m learning my way through everything from initial ideas to simple prototypes, with the goal of making each interaction feel meaningful.
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