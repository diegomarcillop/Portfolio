import React from "react";
import Contact from "./components/Contact/Contact";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Porftolio";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ButtonScroll from './components/ButtonScroll/ButtonScroll'
import Home from "./components/Home/Home";
 
function App() {
  return (
    <div className="App">
      <div className="profile">
        <NavBar />
        <Home/>
        <Skills />
        <Portfolio />
        <About />
        <Contact />
        <ButtonScroll/>
      </div>
    </div>
  );
}

export default App;
