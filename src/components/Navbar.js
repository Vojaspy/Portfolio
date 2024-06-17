import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const imgStyles = {
  width: '150px',
  height: 'auto',
};

const aStyles = {
  fontSize: '24px',
  margin: '0 30px',
  hover: 'underline',
  color: 'purple',
};

const sectionStyles = {
    backgroundColor : 'green',
};


const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleLinkClick = () => {
    // Close the navbar when a link is clicked
    setCollapsed(true);
  };

  return (
    <section id="mynavbar" >
      <nav className="navbar navbar-expand-lg navbar-light navbar fixed-top" style={sectionStyles}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#mynavbar">
            <img src={Logo} style={imgStyles} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!collapsed ? true : false}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#mynavbar"
                  style={aStyles}
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#education"
                  style={aStyles}
                  onClick={handleLinkClick}
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#projects"
                  style={aStyles}
                  onClick={handleLinkClick}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#skills"
                  style={aStyles}
                  onClick={handleLinkClick}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#achievements"
                  style={aStyles}
                  onClick={handleLinkClick}
                >
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#contact"
                  style={aStyles}
                  onClick={handleLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
