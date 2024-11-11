import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">Connect with Me</h2>
      <div className="flex justify-center space-x-6">
        <a 
          href="https://github.com/addynair" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faGithub} 
            className="text-black text-3xl hover:text-gray-600" 
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/justaddy" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faLinkedin} 
            className="text-black text-3xl hover:text-gray-600" 
          />
        </a>
        <a 
          href="https://twitter.com/justaddy_" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon 
            icon={faTwitter} 
            className="text-black text-3xl hover:text-gray-600" 
          />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
