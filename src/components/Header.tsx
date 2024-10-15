import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Home, Briefcase, BookOpen, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Code size={24} />
            <span className="text-xl font-bold">Vinicio Naranjo</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" icon={<Home size={18} />} text="Home" />
            <NavLink to="/services" icon={<Briefcase size={18} />} text="Services" />
            <NavLink to="/portfolio" icon={<Code size={18} />} text="Portfolio" />
            <NavLink to="/blog" icon={<BookOpen size={18} />} text="Blog" />
            <NavLink to="/contact" icon={<Mail size={18} />} text="Contact" />
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200">
    {icon}
    <span>{text}</span>
  </Link>
);

export default Header;