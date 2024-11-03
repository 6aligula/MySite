import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();
    const aboutSections = t('aboutSection.sections', { returnObjects: true }) as Array<{ title: string, text: string }>;
// ... existing code ...
    return (
      <div className="container mx-auto px-6 py-12">
        <br />
        <br />
        <br />
        <h1 className="text-4xl font-bold mb-8 text-center">{t('aboutSection.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutSections.map((section: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-600 mb-4">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default About;
