import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from './../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const PageWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Container fluid className={isDarkMode ? 'dark-mode' : 'light-mode'} id="top">
      <Menu isDarkMode={isDarkMode} handleToggle={handleToggle} />
      {children}
    </Container>
  );
};

export default PageWrapper;