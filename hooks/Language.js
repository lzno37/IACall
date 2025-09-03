"use client";
import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  useEffect(() => {
   
    const savedLang = localStorage.getItem('preferred-language') || "EN";
    setCurrentLanguage(savedLang);

    
    const handleLanguageChange = (event) => {
      setCurrentLanguage(event.detail.language);
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
    };
  }, []);

  return { currentLanguage };
};