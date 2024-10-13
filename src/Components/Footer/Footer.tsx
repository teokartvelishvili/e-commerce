// Footer.tsx
import React from "react";
import { useTheme } from '../../Hooks/ThemeContext';
import "./Footer.css";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footerContainer ${theme}`}>
      <div className="footerContent">
        <div><p>&copy; 2024. All rights reserved.</p></div>
      </div>
    </footer>
  );
};

export default Footer;
