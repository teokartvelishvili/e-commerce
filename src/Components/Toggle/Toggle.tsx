import React from 'react';
import "./Toggle.css";

// Props ტიპების განსაზღვრა
interface ToggleSwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void; // ვარაუდობს რომ შეიძლება იყოს არარსებული
  image: string;
  image2: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, onClick, image, image2 }) => {
  const sliderStyle = {
    backgroundImage: checked ? `url(${image})` : `url(${image2})`,
    backgroundSize: 'cover',
  };

  return (
    <label className="switch" onClick={onClick}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round" style={sliderStyle}></span>
    </label>
  );
};

export default ToggleSwitch;
