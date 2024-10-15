import React from 'react';

const projects = [
  {
    title: 'Smart Garden Automation',
    description: 'Developed an IoT system for automated watering and monitoring of a home garden.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['IoT', 'Automation', 'Python']
  },
  {
    title: 'E-commerce Platform',
    description: 'Built a scalable e-commerce platform using React and Django with a hexagonal architecture.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Django', 'E-commerce']
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'Created a comprehensive dashboard for visualizing and analyzing large datasets using AWS and D3.js.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Data Analysis', 'AWS', 'D3.js']
  },
  {
    title: 'AI-powered Chatbot',
    description: 'Developed an AI chatbot for customer service using natural language processing and machine learning.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['AI', 'NLP', 'Python']
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;