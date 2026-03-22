import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { motion } from 'motion/react';

export const Navigation: React.FC = () => {
  const { language, setLanguage, tx } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="AllFoods Logo" width={159} height={70} className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex space-x-8">
          <a className="nav-link nav-link-primary" href="#">
            {tx({ uz: "Biz haqimizda", ru: "О нас" })}
          </a>

          <a className="nav-link nav-link-secondary" href="#">
            {tx({ uz: "Qanday ishlaydi", ru: "Как это работает" })}
          </a>

          <a className="nav-link nav-link-secondary" href="#">
            {tx({ uz: "Xizmatlar", ru: "Услуги" })}
          </a>

          <a className="nav-link nav-link-secondary" href="#">
            {tx({ uz: "Aloqa", ru: "Контакты" })}
          </a>
        </div>
        <button 
          onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-sans text-sm font-[450] tracking-[0.3px] text-zinc-800">
            {language === 'uz' ? 'UZ' : 'RU'}
          </span>
        </button>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  const { tx } = useTranslation();

  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <img src="/logo.png" alt="AllFoods Logo" width={159} height={70} className="h-10 w-auto opacity-90 grayscale contrast-200 hover:grayscale-0 transition-all duration-300" />
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          <a className="font-sans text-xs tracking-wide uppercase text-zinc-500 hover:underline decoration-zinc-300 underline-offset-4 transition ease-in-out duration-200" href="#">{tx({uz: "Maxfiylik siyosati", ru: "Политика конфиденциальности"})}</a>
          <a className="font-sans text-xs tracking-wide uppercase text-zinc-500 hover:underline decoration-zinc-300 underline-offset-4 transition ease-in-out duration-200" href="#">{tx({uz: "Foydalanish shartlari", ru: "Условия использования"})}</a>
          <a className="font-sans text-xs tracking-wide uppercase text-zinc-500 hover:underline decoration-zinc-300 underline-offset-4 transition ease-in-out duration-200" href="#">LinkedIn</a>
          <a className="font-sans text-xs tracking-wide uppercase text-zinc-500 hover:underline decoration-zinc-300 underline-offset-4 transition ease-in-out duration-200" href="#">Instagram</a>
        </div>
        <div className="font-sans text-xs tracking-wide uppercase text-zinc-500">{tx({uz: "© 2026 AllFoods. Barcha huquqlar himoyalangan.", ru: "© 2026 AllFoods. Все права защищены."})}</div>
      </div>
    </footer>
  );
};
