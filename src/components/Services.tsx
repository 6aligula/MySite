import React from 'react';
import { 
  Cpu, 
  Code, 
  Cloud, 
  Leaf, 
  ShoppingCart, 
  GraduationCap, 
  Shield, 
  Network, 
  RefreshCcw, 
  Home, 
  Youtube, 
  Brain 
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'IoT Projects',
    description: 'End-to-end IoT solutions for smart infrastructure and industrial applications'
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business needs'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure management and DevOps automation services'
  },
  {
    icon: Leaf,
    title: 'Smart Agriculture',
    description: 'Technology solutions for modern farming and agricultural optimization'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Complete e-commerce solutions from development to strategy'
  },
  {
    icon: GraduationCap,
    title: 'Technical Training',
    description: 'Comprehensive technical education and skill development programs'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets'
  },
  {
    icon: Network,
    title: 'APIs & Microservices',
    description: 'Scalable API development and microservices architecture'
  },
  {
    icon: RefreshCcw,
    title: 'App Modernization',
    description: 'Legacy system upgrades and application modernization services'
  },
  {
    icon: Home,
    title: 'Home Automation',
    description: 'Smart home solutions and automation systems'
  },
  {
    icon: Youtube,
    title: 'Content Monetization',
    description: 'YouTube strategy and content monetization consulting'
  },
  {
    icon: Brain,
    title: 'AI & ML Projects',
    description: 'Artificial Intelligence and Machine Learning solutions'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-colors group"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}