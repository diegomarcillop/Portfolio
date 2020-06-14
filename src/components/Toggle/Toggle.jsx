import React from "react";
import './Toggle.css';
import Theme from "../../common/LocalStorage/Theme";

export default function Toggle() {

  const onCheck = () => { 
    const element = document.body; 
    element.classList.toggle("dark");
    Theme.setMode();
}


  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onClick={onCheck} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
