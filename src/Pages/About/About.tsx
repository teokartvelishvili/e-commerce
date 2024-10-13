// src/Pages/About/About.tsx
import React from 'react';
import { useTheme } from '../../Hooks/ThemeContext';
import { useLanguage } from '../../Hooks/LanguageContext';
import { TEXTS } from '../../Hooks/Languages';
import "./About.css";

const About: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`page ${theme}`}>
      <h2>{TEXTS[language].about}</h2>
    </div>
  );
};

export default About;
