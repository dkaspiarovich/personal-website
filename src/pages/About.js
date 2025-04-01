import React, { useState, useEffect } from "react";
import "../styles/About.css";
import image from "../images/me.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const [activeContent, setActiveContent] = useState("profile"); // Стейт для активного контента

  const handleButtonClick = (content) => {
    setActiveContent(content); // Изменение активного контента
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".about-text", {
      scrollTrigger: ".about-text",
      y: 0,
      ease: "power1",
      opacity: 1,
    });

    gsap.to(".content.visible", {
      scrollTrigger: ".content.visible",
      y: 0,
      ease: "power1",
      opacity: 1,
      visibility: "visible",
      delay: 0.3,
    });

    gsap.to(".content.invisible", {
      scrollTrigger: ".content.invisible",
      y: 100,
      ease: "power1",
      opacity: 0,
      delay: 0.3,
    });

    gsap.to(".buttons", {
      scrollTrigger: ".buttons",
      y: 0,
      ease: "power1",
      opacity: 1,
      delay: 1,
    });
  });

  return (
    <div id="about-section" className="about">
      <p className="about-text">
        <strong>About </strong> me
      </p>
      <div className="container">
        <div className="content-wrapper">
          {/* Контент для каждого раздела */}
          <div
            className={`content-all content profile ${
              activeContent === "profile" ? "visible" : "invisible"
            }`}
          >
            <div className="text">
              <h2>Profile</h2>
              <p>
                I am a Computer Science graduate. I have the ability to quickly
                learn new tools and approaches. I am seeking opportunities for
                professional growth and am eager to work on interesting
                challenges within dynamic and innovative teams. I’m always open
                to new opportunities and am willing to relocate to any country
                or city.
              </p>
            </div>
            <div className="profile-image">
              <img src={image} width={250} alt="Profile" />
            </div>
          </div>

          <div
            className={`content-all content education ${
              activeContent === "education" ? "visible" : "invisible"
            }`}
          >
            <div className="text">
              <h2>Education</h2>
              <p>Engineer’s Degree, Vistula University, Warsaw</p>
              <br />
              <p>Computer Science</p>
              <br />
              <p>October 2021 - March 2025</p>
            </div>
          </div>

          <div
            className={`content-all content skills ${
              activeContent === "skills" ? "visible" : "invisible"
            }`}
          >
            <div className="text">
              <h2>Skills</h2>
              <p>
                <strong>Frontend:</strong> HTML, CSS, SASS, JavaScript,
                TypeScript, jQuery, React, Vue.js
              </p>
              <br />
              <p>
                <strong>Backend:</strong> Node.js, REST API, PHP, Java, Python,
                Databases: MySQL, MongoDB
              </p>
              <br />
              <p>
                <strong>Tools and platforms:</strong> Git, GitHub, Power BI,
                npm, Docker, Linux, PowerShell, Figma, Postman
              </p>
            </div>
          </div>

          <div
            className={`content-all content courses ${
              activeContent === "courses" ? "visible" : "invisible"
            }`}
          >
            <div className="text">
              <h2>Courses</h2>
              Udemy | The Complete JavaScript Course <br />
              <br /> <br />
              Cisco | CCNAv7: Wprowadzenie do sieci <br />
              <br />
            </div>
          </div>
        </div>

        {/* Кнопки для переключения контента */}
      </div>
      <div className="buttons">
        <button className="button" onClick={() => handleButtonClick("profile")}>
          Profile
        </button>
        <button
          className="button"
          onClick={() => handleButtonClick("education")}
        >
          Education
        </button>
        <button className="button" onClick={() => handleButtonClick("skills")}>
          Skills
        </button>
        <button className="button" onClick={() => handleButtonClick("courses")}>
          Courses
        </button>
      </div>
    </div>
  );
};

export default About;
