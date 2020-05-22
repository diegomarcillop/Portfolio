import React from "react";
import Project from "../Project/Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <br />
        <div className="projects">
          <Project imageLarge="img/cat-view.png" imageSmall="img/cat-view-small.png"  title="'Know your cat'" />
          <Project imageLarge="img/duvo2.png" imageSmall="img/duvo2-small.png" title="'Duvo'" /> 
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
export default Portfolio;
