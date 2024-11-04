import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Vinicio Naranjo. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/6aligula" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/vinicio-alejandro-naranjo-mosquera-a83017122/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;