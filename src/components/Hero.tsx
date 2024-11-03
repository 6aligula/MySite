import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ThreeDObject from './ThreeDObject';

export default function Hero() {
  const { t } = useTranslation(); // Importar hook de traducción

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center">
        <ThreeDObject />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        {t('hero.title')} {/* Clave de traducción para el primer texto */}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t('hero.digitalReality')} {/* Clave de traducción para 'Digital Reality' */}
        </span>
        </h1>

          <p className="text-xl text-gray-300 mb-8">
            {t('hero.subtitle')} {/* Usa la clave de traducción */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-lg"
            >
              {t('buttons.exploreServices')} {/* Texto del botón traducido */}
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 hover:border-white/40 text-white rounded-lg transition-colors text-lg"
            >
              {t('buttons.getInTouch')} {/* Otro texto de botón traducido */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
