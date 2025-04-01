import React, { useEffect } from "react";
import "../styles/Contact.css";
import location from "../images/location.svg";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".contact-title", {
      scrollTrigger: ".contact-title",
      y: 0,
      opacity: 1,
      ease: "power1",
    });

    gsap.to(".contact", {
      scrollTrigger: ".contact",
      opacity: 1,
      duration: 1,
    });
  });
  return (
    <div id="contact-section" className="contact">
      <div className="container">
        <div className="content">
          <p className="contact-title">
            {" "}
            <strong>Contact </strong>me
          </p>
          <div className="contact-content">
            <div className="contact-first">
              <div className="phone">
                <div>+48 577 925 729</div>
              </div>
              <div className="email">
                <div> dkllamff@gmail.com </div>
              </div>
              <div className="location">
                <div className="location-address">Warsaw, Poland</div>
              </div>
            </div>
            <div className="social">
              {" "}
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/darya-kaspiarovich-2777382a0/"
                  target="_blank"
                >
                  <img src={linkedin} className="linkedin" width={20}></img>
                </a>
              </div>
              <div className="github">
                <a href="https://github.com/dkaspiarovich" target="_blank">
                  <img src={github} className="github" width={20}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
