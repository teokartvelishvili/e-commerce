// Header.tsx
import React, { useState, useEffect } from "react";
import { useTheme } from '../../Hooks/ThemeContext';
import { useLanguage } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import ToggleSwitch from "../Toggle/Toggle";
import toggleStars from '../../Assets/stars.jpeg';
import toggleShine from '../../Assets/sunShine.jpeg';
import geoFlag from '../../Assets/geoFlag.png';
import engFlag from '../../Assets/engFlag.png';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isChecked, setIsChecked] = useState<boolean>(theme === "dark");

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  const handleChange = () => {
    toggleTheme();
  };

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage);
  };

  return (
    <div className={`header ${theme}`}>
      <div className="ThemeToggle">
        <div className={`toggles ${theme}`}>
          <ToggleSwitch 
            checked={isChecked} 
            onChange={handleChange} 
            image={toggleShine} 
            image2={toggleStars}
          />
          <div>
            <img
              className="lang"
              src={language === "ge" ? engFlag : geoFlag}
              alt="lang"
              onClick={handleLangClick}
            />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
