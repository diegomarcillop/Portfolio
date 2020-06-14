import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Skills from './components/Skills/Skills'
import About from './components/About/About';
import Toggle from './components/Toggle/Toggle';
import Contact from './components/Contact/Contact';
import { useEffect } from "react";
import Theme from './common/LocalStorage/Theme';

function App() {
  useEffect(() => {
    const element = document.body;
    element.classList.toggle(Theme.getMode()); 
   })

  return (
    <div className="App">
      <div className="profile">
        <Home />
        <Toggle />
        <NavBar />
        <Skills />
        <About />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
