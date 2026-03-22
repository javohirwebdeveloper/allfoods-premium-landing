"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  t: typeof translations.uz;
  tx: <T extends React.ReactNode>(content: {uz: T; ru: T}) => T;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname() || '/';
  const router = useRouter();
  
  // Determine language from URL
  const getLangFromPath = (path: string): Language => {
    if (path.startsWith('/ru')) return 'ru';
    return 'uz';
  };

  const [language, setLanguageState] = useState<Language>(getLangFromPath(pathname));

  useEffect(() => {
    const lang = getLangFromPath(pathname);
    setLanguageState(lang);
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    const currentPath = pathname;
    let newPath = currentPath;
    
    if (lang === 'ru') {
      if (!currentPath.startsWith('/ru')) {
        newPath = `/ru${currentPath === '/' ? '' : currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/ru')) {
        newPath = currentPath.replace('/ru', '') || '/';
      }
    }
    
    router.push(newPath);
  };

  const t = translations[language];
  const tx = <T extends React.ReactNode>(content: {uz: T; ru: T}) => content[language];

  return (
    <LanguageContext.Provider value={{ language, t, tx, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
