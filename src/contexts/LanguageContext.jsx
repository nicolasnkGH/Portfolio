import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '../locales/en';
import pt from '../locales/pt';

const LanguageContext = createContext();

export const locales = { en, pt };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let val = locales[language];
    for (const k of keys) {
      if (val === undefined) break;
      val = val[k];
    }
    if (val === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return val;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
