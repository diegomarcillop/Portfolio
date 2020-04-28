import React from "react";
import Contact from "./components/Contact/Contact";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="profile">
        <NavBar />
        <Contact />
      </div>
    </div>
  );
}

export default App;
