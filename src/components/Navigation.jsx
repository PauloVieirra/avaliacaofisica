import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-menu">
        
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="theme-switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
     
     
      <ul className={isMenuOpen ? 'open' : ''}>
       
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/avaliacao" onClick={toggleMenu}>Avaliação Física</Link></li>
        <li><Link to="/treinos" onClick={toggleMenu}>Treinos</Link></li>
        <li><Link to="/agendamento" onClick={toggleMenu}>Agendamento</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;