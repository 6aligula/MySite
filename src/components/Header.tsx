import React from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  const handleNavigationToServices = () => {
    // Navega a la página raíz y luego desplázate a la sección de servicios
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Un breve retraso para asegurar que la navegación haya terminado
  };

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <Link to="/" className="hover:underline">
              AIFINITY
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={handleNavigationToServices} className="text-gray-300 hover:text-white transition-colors">
              {t('services')}
            </button>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              {t('about')}
            </Link>
            <Link to="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button onClick={handleNavigationToServices} className="block text-gray-300 hover:text-white transition-colors">
              {t('services')}
            </button>
            <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
              {t('about')}
            </Link>
            <Link to="/contact" className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-center">
              {t('contact')}
            </Link>
          </div>
        )}

        {/* Language Switcher */}
        <div className="flex justify-end mt-2">
          <button onClick={() => changeLanguage('en')} className="text-gray-300 hover:text-white mr-2">
            EN
          </button>
          <button onClick={() => changeLanguage('es')} className="text-gray-300 hover:text-white">
            ES
          </button>
        </div>
      </nav>
    </header>
  );
}
