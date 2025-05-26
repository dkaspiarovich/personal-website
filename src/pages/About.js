import React, { useState, useEffect } from "react";
import "../styles/About.css";
import image from "../images/me.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const [activeContent, setActiveContent] = useState("profile");

  const handleButtonClick = (content) => {
    setActiveContent(content);
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
                I’m a passionate <strong>Frontend Developer</strong> with a
                background in Computer Science, creating modern, user-friendly,
                and responsive web applications. I enjoy turning ideas into
                functional, visually appealing interfaces. <br />
                I’ve worked on several{" "}
                <strong>frontend development projects</strong>, where I applied
                my skills in <strong>JavaScript, React, and UI design</strong>.
                These projects involved{" "}
                <strong>collaborating with teams</strong> to implement features,{" "}
                <strong>debug issues</strong>, and{" "}
                <strong>ensure clean, maintainable code</strong>. During my{" "}
                <strong>frontend internship</strong>, I gained practical
                experience working with modern tools and frameworks, enhancing
                both my technical and teamwork abilities.
              </p>
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
                TypeScript, React, Vue.js
              </p>
              <br />
              <p>
                <strong>Backend:</strong> Python, Java, Node.js, REST API, PHP
              </p>
              <br />
              <p>
                <strong>Databases:</strong> MySQL, MongoDB
              </p>
              <br />
              <p>
                <strong>Tools and platforms:</strong> Git, GitHub, npm, Docker,
                Linux, PowerShell, Figma, Postman
              </p>
            </div>
          </div>

          <div
            className={`content-all content courses ${
              activeContent === "courses" ? "visible" : "invisible"
            }`}
          >
            <div className="text">
              <h2>Certificates</h2>
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
          Certificates
        </button>
      </div>
    </div>
  );
};

export default About;
