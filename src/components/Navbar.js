import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => {
    setClick(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="logo">Kaspiarovich</div>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#d3d3d3" }} />
            ) : (
              <FaBars size={30} style={{ color: "#d3d3d3" }} />
            )}
          </div>
          <ul className={`navbar-menu ${click ? "active" : ""}`}>
            <li className="navbar-link">
              <Link
                to="main-section"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
              >
                <button className="nav-button">Main</button>
              </Link>
            </li>
            <li className="navbar-link">
              <Link
                to="about-section"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
              >
                <button className="nav-button">About</button>
              </Link>
            </li>
            <li className="navbar-link">
              <Link
                to="project-section"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
              >
                <button className="nav-button">Work</button>
              </Link>
            </li>

            <li className="navbar-link">
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
              >
                <button className="nav-button">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
