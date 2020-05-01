import React from "react";
import Project from "../Project/Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <br/>
        <div className="projects">
          <Project url="/View.png" />
          <Project url="/View.png" />
          <Project url="/View.png" />
          <Project url="/imageS.jpg" />
        </div>
      </div>
    </>
  );
}
export default Portfolio;