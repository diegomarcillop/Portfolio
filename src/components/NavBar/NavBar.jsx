import React, { createRef } from "react";
import Social from "../Social/Social";
import "./NavBar.css";
import Profile from "../Profile/Profile";

function NavBar() {
  const navbar = createRef();
  const menu = ["home", "skills", "portfolio", "about", "contact"];

  const onClick = () => {
    navbar.current.classList.toggle("change");
  };

  const menuAction = async (evt) => {
    let page = await menu[evt.target.id];
    page = page !== undefined ? page : "home";
    document.getElementById(page).scrollIntoView({ behavior: "smooth" });
    onClick();
  };

  return (
    <nav className="navbar" ref={navbar}>
      <div className="hamburger-menu" onClick={onClick}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
      <ul className="nav-list">
        <li className="nav-item" id="0" onClick={menuAction}>
          <a href="/">
          <i className="fas fa-home"></i>
            <span> Home</span>
           </a>
        </li>
        <li className="nav-item" id="1" onClick={menuAction}>
          <a href="/">
          <i className="fas fa-brain"></i>
            <span> Skills</span>
           </a>
        </li>
        <li className="nav-item" id="2" onClick={menuAction}>
          <a href="/">
          <i className="fas fa-code"></i>
            <span> Portfolio</span>
           </a>
        </li>

        <li className="nav-item" id="3" onClick={menuAction}>
          <a href="/">
          <i className="far fa-address-card"></i>
            <span> About Me</span>
           </a>
        </li>
        <li className="nav-item" id="4" onClick={menuAction}>
          <a href="/">
          <i className="far fa-envelope-open"></i>
            <span> Contact</span>
           </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
