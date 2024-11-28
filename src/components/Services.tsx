import { useTranslation } from 'react-i18next';
import { serviceIcons } from '../components/icons'; // Archivo con la definición de íconos
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const services = t('servicesList', { returnObjects: true }) as Array<{
    iconKey: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{t('servicesTitle')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.iconKey];
            const handleClick = () => {
                if (service.title === "Agricultura Inteligente" || service.title === "Smart Agriculture") {
                navigate('/sensor-dashboard');
              }
            };

            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-colors group cursor-pointer"
                onClick={handleClick}
              >
                {Icon && <Icon className="w-12 h-12 text-blue-500 mb-4 group-hover:text-blue-400 transition-colors" />}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
