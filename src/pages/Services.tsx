import React from 'react';
import { Home, Server, Database, Brain, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Automation and IoT',
    description: 'Expertise in home automation projects and hardware/software control for IoT systems. Examples include automated gardens and smart home solutions.',
    icon: <Home size={40} />
  },
  {
    title: 'Backend and Frontend Development',
    description: 'Proficient in backend and frontend development using frameworks like FastAPI, Django, Flask, and React Native. Experience in e-commerce applications and hexagonal architectures.',
    icon: <Server size={40} />
  },
  {
    title: 'Data Analysis',
    description: 'Experienced in Data Science, covering areas such as data analysis, AWS data processing, and advanced training in Data Science (2nd and 3rd year).',
    icon: <Database size={40} />
  },
  {
    title: 'AI Application Development',
    description: 'Skilled in developing web applications with AI integration, utilizing Git, Docker, and Kubernetes for deployment. Proficient in setting up environments with AWS.',
    icon: <Brain size={40} />
  },
  {
    title: 'Teaching and Consulting',
    description: 'Experienced instructor in programming and mobile app development with React Native. Advisor on technology projects.',
    icon: <GraduationCap size={40} />
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-center mb-4 text-blue-600">
              {service.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;