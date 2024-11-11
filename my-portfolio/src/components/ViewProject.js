import React from 'react';
import mainImage1 from '../assets/welcome.png';
import mainImage2 from '../assets/gettingStarted.png';  
import mainImage3 from '../assets/homepage.png';  
import additionalImage1 from '../assets/Chatbot.png';   
import additionalImage2 from '../assets/Meditation.png';  
import additionalImage3 from '../assets/journal.png';   
import additionalImage4 from '../assets/Explore.png'; 

const ViewProject = () => {
  return (
    <section className="p-8 mx-auto max-w-4xl">
      
      <h1 className="text-4xl font-bold text-center mb-12">MediMate</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <img src={mainImage1} alt="Main Image 1" className="w-full h-auto bg-gray-200 rounded-lg object-cover" />
        <img src={mainImage2} alt="Main Image 2" className="w-full h-auto bg-gray-200 rounded-lg object-cover" />
        <img src={mainImage3} alt="Main Image 3" className="w-full h-auto bg-gray-200 rounded-lg object-cover" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-medium text-gray-600 mb-8">
        <div className="text-center mb-2 sm:mb-0">
          <p>Solo Project</p>
        </div>
        <div className="text-center mb-2 sm:mb-0">
          <p>Timeline</p>
          <p>March 2024 - April 2024</p>
        </div>
        <div className="text-center mb-2 sm:mb-0">
          <p>Tools</p>
          <p>Figma</p>
        </div>
        <div className="text-center">
          <p>My Role</p>
          <p>Product Design</p>
        </div>
      </div>

      <div className="text-gray-800 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Starting thoughts</h2>
        <p className="text-gray-700">
          Starting this project, I wanted to create something that makes mental health support more accessible and natural. 
          My goal was to design an app that feels like a gentle companion, with features that encourage users to take small, 
          positive steps for their well-being. From daily check-ins to personalized reminders,
          I aimed to make the experience feel intuitive and helpful, helping users stay connected with their mental health needs.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center">Features</h2>

      <div className="mb-12"> 
        
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center mb-12"> 
          <img src={additionalImage1} alt="Additional Image 1" className="w-full md:w-1/2 h-auto rounded-lg object-cover md:mr-4" />
          <div className="md:w-1/2 text-gray-800 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-2">Your AI Therapist</h3>
            <p>This feature includes a supportive chatbot, allowing users to share their thoughts and receive immediate, compassionate responses anytime they need.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row items-center mb-12"> 
          <div className="md:w-1/2 text-gray-800 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-2">Meditation</h3>
            <p>This feature includes guided meditations and mindfulness exercises to help users relax and refocus.</p>
          </div>
          <img src={additionalImage2} alt="Additional Image 2" className="w-full md:w-1/2 h-auto rounded-lg object-cover md:ml-4" />
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center mb-12"> 
          <img src={additionalImage3} alt="Additional Image 3" className="w-full md:w-1/2 h-auto rounded-lg object-cover md:mr-4" />
          <div className="md:w-1/2 text-gray-800 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-2">Personal Journal</h3>
            <p>This feature provides a personal journal, offering users a safe space to express their thoughts and track their emotional journey over time.</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col md:flex-row items-center mb-12"> 
          <div className="md:w-1/2 text-gray-800 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <p>This feature connects users with mental health resources, making it easier to find support when needed.</p>
          </div>
          <img src={additionalImage4} alt="Additional Image 4" className="w-full md:w-1/2 h-auto rounded-lg object-cover md:ml-4" />
        </div>
      </div>

      {/* What I Learned Section */}
      <h2 className="text-xl font-semibold mb-4 text-center">What I Learned</h2> 
      <ul className="list-disc list-inside text-gray-700 mb-8 mx-auto max-w-prose">
        {[
          "Intuitive Design: This project taught me about the importance of intuitive, empathetic design when dealing with sensitive topics like mental health. I had to consider how each feature would feel to users who might be going through a difficult time.",
          "User Experience Focus: I learned to ask questions like, “How can this design make someone feel heard or less alone?” This led me to create a calming, distraction-free experience where colors, fonts, and spacing worked together to create a safe space.",
          "Prioritization: I learned the art of prioritizing within the design process. Balancing ambition with simplicity was key—choosing features that truly enhanced user experience was essential.",
          "Less is More: This project reminded me that good design isn’t always about doing more; it’s often about understanding what serves users best and doing that well."
        ].map((item, index) => (
          <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
        ))}
      </ul>

    </section>
  );
};

export default ViewProject;