import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../src/Styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [diagramMenuOpen, setDiagramMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Para hamburguesa

  const profileRef = useRef(null);
  const diagramRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Cerrar submenús si clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
      if (diagramRef.current && !diagramRef.current.contains(event.target)) {
        setDiagramMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Botón hamburguesa (solo visible en mobile) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">Inicio</Link></li>


          <li className="menu-item" ref={profileRef}>
            <span
              onClick={() => {
                setProfileMenuOpen(!profileMenuOpen);
                setDiagramMenuOpen(false);
              }}
            >
              Galeria ▾
            </span>
            {profileMenuOpen && (
              <ul className="submenu">
                <li><Link to="/">Kangue</Link></li>
                <li><Link to="/">Jaimei</Link></li>
                <li><Link to="/">Hoviu</Link></li>
              </ul>
            )}
          </li>

          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
