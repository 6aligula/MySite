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
import { useTranslation } from 'react-i18next';

const services = [
  {
    icon: Cpu,
    titleKey: 'iotProjects.title',
    descriptionKey: 'iotProjects.description'
  },
  {
    icon: Code,
    titleKey: 'customSoftware.title',
    descriptionKey: 'customSoftware.description'
  },
  {
    icon: Cloud,
    titleKey: 'cloudDevOps.title',
    descriptionKey: 'cloudDevOps.description'
  },
  {
    icon: Leaf,
    titleKey: 'smartAgriculture.title',
    descriptionKey: 'smartAgriculture.description'
  },
  {
    icon: ShoppingCart,
    titleKey: 'ecommerce.title',
    descriptionKey: 'ecommerce.description'
  },
  {
    icon: GraduationCap,
    titleKey: 'technicalTraining.title',
    descriptionKey: 'technicalTraining.description'
  },
  {
    icon: Shield,
    titleKey: 'cybersecurity.title',
    descriptionKey: 'cybersecurity.description'
  },
  {
    icon: Network,
    titleKey: 'apisMicroservices.title',
    descriptionKey: 'apisMicroservices.description'
  },
  {
    icon: RefreshCcw,
    titleKey: 'appModernization.title',
    descriptionKey: 'appModernization.description'
  },
  {
    icon: Home,
    titleKey: 'homeAutomation.title',
    descriptionKey: 'homeAutomation.description'
  },
  {
    icon: Youtube,
    titleKey: 'contentMonetization.title',
    descriptionKey: 'contentMonetization.description'
  },
  {
    icon: Brain,
    titleKey: 'aiMLProjects.title',
    descriptionKey: 'aiMLProjects.description'
  }
];

export default function Services() {
  const { t } = useTranslation();

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
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 transition-colors group"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-400">
                {t(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
