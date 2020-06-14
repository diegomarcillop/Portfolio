import React, { createRef } from "react";
import "./NavBar.css";

function NavBar() {
  const navbar = createRef();
  const menu = ["home", "skills", "portfolio", "about", "contact"];

  const onClick = () => {
    navbar.current.classList.toggle("change");
  };

  const menuAction = async (evt) => {
    console.log(evt.target)
     let page = await menu[evt.target.id];
    console.log(page);
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
          <i className="fas fa-home"/> Home 
        </li>
        <li className="nav-item" id="1" onClick={menuAction}>
        <i className="fas fa-user-ninja"/> Skills 
        </li>
        <li className="nav-item">
          <i className="fas fa-code"/> Portfolio 
        </li>
        <li className="nav-item"  id="3" onClick={menuAction}>
          <i className="far fa-address-card"/> About Me 
        </li>
        <li className="nav-item" id="4" onClick={menuAction} >
          <i  className="far fa-envelope-open"/> Contact 
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
