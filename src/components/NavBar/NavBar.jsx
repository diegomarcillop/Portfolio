import React, { createRef } from "react";
import "./NavBar.css";

function NavBar() {
  const navbar = createRef();

  const onClick = () => {
    navbar.current.classList.toggle("change");
  };

  return (
    <>
      <div className="container">
        <nav className="navbar" ref={navbar}>
          <div className="hamburger-menu" onClick={onClick}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>

          <ul className="nav-list">
            <div className="img-content">
              <img
                src="/profile.jpg"
                alt="profile"
                className="img-profile"
                style={{
                  width: "30vh",
                }}
              />
              <h1>Diego Marcillo</h1>
              <p>Software developer</p>
            </div>

            <li className="nav-item">
              <a href="/" className="nav-link">
                <span>Home</span>
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <span>About Me</span>
                <i className="far fa-address-card"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <span>Portfolio</span>
                <i className="fas fa-code"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <span>Contact</span>
                <i className="far fa-envelope-open"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
