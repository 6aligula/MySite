import React from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  // Función para cambiar el idioma y guardar en localStorage
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            <a href='/' className='hover:underline'>
              AIFINITY
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              {t('services')}
            </a>
            <a href="about" className="text-gray-300 hover:text-white transition-colors">
              {t('about')}
            </a>
            <a href="contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              {t('contact')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors">
              {t('services')}
            </a>
            <a href="about" className="block text-gray-300 hover:text-white transition-colors">
              {t('about')}
            </a>
            <a href="contact" className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-center">
              {t('contact')}
            </a>
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
