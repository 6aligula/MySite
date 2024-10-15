import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ThreeDObject from '../components/ThreeDObject';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <ThreeDObject />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Freelance Software Engineer</h1>
        <p className="text-xl mb-8">Transforming ideas into innovative solutions</p>
        <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors duration-200">
          Get in touch <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {['Automation & IoT', 'Backend & Frontend', 'Data Analysis', 'AI Applications'].map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2">{service}</h3>
            <p className="text-gray-600">Expert solutions tailored to your needs.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;