import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    changeLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-sm font-medium"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <FaGlobe className="text-purple-400" />
      <span className="text-neutral-300">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle; 