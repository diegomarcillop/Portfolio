import React from "react";
import Contact from "./components/Contact/Contact";
import "./App.css";
import NavBar from "./components/NavBar/NavBar"; 
import Portfolio from "./components/Portfolio/Porftolio";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="profile">
        <NavBar /> 
        <Skills/>
        <Portfolio/>
        <About/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
