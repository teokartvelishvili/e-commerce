// src/Components/Navbar/Navbar.tsx
import "./Navbar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Hooks/ThemeContext';
import { useLanguage } from '../../Hooks/LanguageContext';
import { TEXTS } from '../../Hooks/Languages';

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`NavCont ${theme}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`burger ${isOpen ? 'open' : ''}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <ul className={`UlCont ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">{TEXTS[language].home}</Link></li>
        <li><Link to="/about">{TEXTS[language].about}</Link></li>
        <li><Link to="/contact">{TEXTS[language].contact}</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
