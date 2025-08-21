import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [t, setT] = useState(translations.es);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setT(translations[newLanguage]);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  useEffect(() => {
    // Intentar recuperar el idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      setT(translations[savedLanguage]);
    }
  }, []);

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 