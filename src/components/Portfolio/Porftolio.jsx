import React from "react";
import Project from "../Project/Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <h2>Portfolio</h2>
        <br />
        <div className="projects">
          <Project url="/cat-view.png" title="'Know your cat'" />
          <Project url="/duvo2.png" title="'Duvo'" />
           <Project url="/imageS.jpg" /> 
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
export default Portfolio;
