import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
