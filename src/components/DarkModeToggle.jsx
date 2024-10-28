import React, { useContext } from 'react';
import { DarkModeContext } from '../common/DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleToggleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <span className="darkmode-toggle-text">Dark Mode</span>
      <input checked={darkMode} onChange={handleToggleChange} type="checkbox" id="dark-mode" className="toggle-checkbox"/>
      <label htmlFor="dark-mode" className="toggle-label" aria-label="Dark mode toggle button"></label>
    </div>
  );
};

export default DarkModeToggle;