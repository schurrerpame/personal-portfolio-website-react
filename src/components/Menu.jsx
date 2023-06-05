import React from 'react';
import { LanguageSelector } from './../container';
import { ThemeToggle } from './../components';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import dataEn from '../i18n/en/data';
import dataEs from './../i18n/es/data.json';
import { images } from './../assets/images';

const Menu = ({ isDarkMode, handleToggle }) => {
  const { i18n } = useTranslation();
  const data = i18n.language === 'en' ? dataEn : dataEs;

  return (

    <Container fluid className={isDarkMode ? 'dark-mode' : 'light-mode'}>

      <Navbar expand="lg" className="justify-content-between">
        <Container>
          <Navbar.Brand href="/">
            <img src={images.logo} className="logo" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              {data.menu.map(({ link, text }, index) => (
                <Nav.Link
                  href={link} key={index}>{text}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <div className="items-menu">
            <LanguageSelector />
            <ThemeToggle handleToggle={handleToggle} isDarkMode={isDarkMode} />
          </div>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Menu;

