// src/Pages/Contact/Contact.tsx
import React from 'react';
import { useTheme } from '../../Hooks/ThemeContext';
import { useLanguage } from '../../Hooks/LanguageContext';
import { TEXTS } from '../../Hooks/Languages';
import "./Contact.css";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`page ${theme}`}>
      <h2>{TEXTS[language].contact}</h2>
    </div>
  );
};

export default Contact;
