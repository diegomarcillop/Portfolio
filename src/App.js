import React from "react";
 import "./App.css";
import NavBar from "./components/NavBar/NavBar";
    import Home from "./components/Home/Home";
 
function App() {
  return (
    <div className="App">
      <div className="profile">
        <Home/>
        <NavBar /> 
       </div>
    </div>
  );
}

export default App;
