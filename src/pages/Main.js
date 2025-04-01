import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import gsap from "gsap";
import arrow from "../images/arrow-down.svg";
import { Link } from "react-scroll";

const Main = () => {
  useEffect(() => {
    gsap.to(".arrow-img", {
      y: 10,
      ease: "power1",
      repeat: -1,
      duration: 0.5,
      yoyo: true,
    });

    gsap.to(".about-about", {
      y: 0,
      ease: "power1",
      duration: 0.7,
    });

    gsap.from(".blurred-spot-1", {
      width: "1000px",
      height: "1000px",
      ease: "power1",
      duration: 0.5,
    });

    gsap.from(".blurred-spot-2", {
      width: "400px",
      height: "400px",
      ease: "power1",
      duration: 0.5,
    });

    gsap.to(".about-button", {
      delay: 0.6,
      y: 0,
      ease: "power1",
      duration: 0.7,
      opacity: 1,
    });
  }, []);

  return (
    <div id="main-section" className="main">
      <div className="container">
        <div className="content">
          <div className="about-about">
            <p>I'm</p>
            <p>
              Web-developer <strong>Darya Kaspiarovich</strong>
            </p>
            <p>A final year student of computer sience</p>
          </div>
          <div className="about-button">
            <div className="arrow">
              <img
                src={arrow}
                className="arrow-img"
                width={20}
                alt="arrow"
              ></img>
            </div>
            <Link
              to="project-section"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <button>check on my projects</button>
            </Link>
          </div>
        </div>
        <div className="blurred-spot-1"></div>
        <div className="blurred-spot-2"></div>
      </div>
    </div>
  );
};

export default Main;
