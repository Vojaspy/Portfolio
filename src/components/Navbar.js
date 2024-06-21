import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import Resume from '../assets/VojasGonnadeResume.pdf';
import {Download} from 'react-bootstrap-icons';

const imgStyles = {
  width: '125px',
  height: 'auto',
};

const aStyles = {
  fontSize: '24px',
  margin: '0 30px',
  hover: 'underline',
  color: 'brown',
};

const navStyles = {
    // backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent background
  backdropFilter: 'blur(1px)', // Blur effect
    height : '15%',
    // filter: 'brightness(1.1)',
    border : 'rounded',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.00006)', // Subtle shadow for depth
    backdropFilter : 'brightness(98%)',
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
    <section id="mynavbar">
      <nav className="navbar navbar-expand-lg navbar-light navbar fixed-top" style={navStyles}>
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={Resume}
                  style={aStyles}
                  onClick={handleLinkClick}
                  download
                >
                  Resume <Download/>
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

