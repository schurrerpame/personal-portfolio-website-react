import React from 'react';

const ThemeToggle = ({ handleToggle, isDarkMode }) => {
  const handleClick = (event) => {
    event.stopPropagation(); // Detener la propagación del evento
    handleToggle();
  };

  return (
    <div className={`box-switch ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="switch" onClick={handleClick}>
        <div className="image dark-image"></div>
        <div className="image light-image"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;