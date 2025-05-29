import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  // Update class di <body> saat darkMode berubah
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          AgitNutriKids
        </Link>

        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu} end>
            Home
          </NavLink>
          <NavLink to="/input" className="nav-link" onClick={closeMenu}>
            Kalkulator
          </NavLink>
          <NavLink to="/info" className="nav-link" onClick={closeMenu}>
            Info
          </NavLink>

          <button
            className="darkmode-toggle"
            onClick={() => {
              toggleDarkMode();
              closeMenu();
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <>
                <span role="img" aria-label="light mode">
                  🌞
                </span>{' '}
                Light Mode
              </>
            ) : (
              <>
                <span role="img" aria-label="dark mode">
                  🌙
                </span>{' '}
                Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
