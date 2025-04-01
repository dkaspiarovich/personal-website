import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../styles/Project.css";

const Project = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".card-1", {
      scrollTrigger: ".card-1",
      x: 0,
      ease: "power1",
      duration: 1,
      opacity: 1,
    });

    gsap.to(".card-2", {
      scrollTrigger: ".card-2",
      x: 0,
      ease: "power1",
      duration: 1,
      opacity: 1,
    });

    gsap.to(".card-3", {
      scrollTrigger: ".card-3",
      x: 0,
      ease: "power1",
      duration: 1,
      opacity: 1,
    });

    gsap.to(".project-about p", {
      ease: "back.in",
      duration: 1.5,
      opacity: 1,
    });

    gsap.to(".project-title", {
      scrollTrigger: ".project-title",
      y: 0,
      ease: "power1",
      opacity: 1,
    });
  }, []);
  return (
    <div id="project-section" className="project">
      <div className="container">
        <div className="content">
          <p className="project-title">
            Check on <strong>my projects</strong>
          </p>
          <div className="card card-1">
            <div className="project-about">
              <p>Bank app</p>
              <p>
                Important Note: This application is a simulated bank application
                and does not manage real money or connect to real banking
                systems. It is intended for educational and demonstration
                purposes only.
              </p>
            </div>
          </div>
          <button className="button">
            <a href="https://github.com/dkaspiarovich/bank-app" target="_blank">
              Link to github
            </a>
          </button>

          <div className="card card-2">
            <div className="project-about">
              <p>Pig Dice Game</p>
              <p>
                A simple implementation of the <strong>Pig Dice Game</strong>{" "}
                designed for two players. The goal is to be the first player to
                reach 100 points. Players take turns rolling a dice. Each time a
                player rolls a die they decide to 'hold' to add the points from
                'current score' to 'total score' or risk to see if you can win
                more. A playear is losing their current score if they roll a 1
                and the turn passes to another player.
              </p>
            </div>
          </div>
          <button className="button">
            <a
              href="https://github.com/dkaspiarovich/pig-dice-game"
              target="_blank"
            >
              Link to github
            </a>
          </button>

          <div className="card card-3">
            <div className="project-about">
              <p>Timer</p>
              <p>
                {" "}
                The <strong>timer application</strong> designed with a modern
                dark interface that contains all basic functions. Perfect for
                managing your time while workout, a cooking session, or any
                other activities.
              </p>
            </div>
          </div>
          <button className="button">
            <a
              href="https://github.com/dkaspiarovich/dark-mode-timer"
              target="_blank"
            >
              Link to github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
