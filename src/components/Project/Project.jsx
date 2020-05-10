import React from "react";
import "./Project.css";

function Project({ url, title }) {
  return (
    <>
      <div className="project">
        <div className="project-content">
          <img className="image" src={url} alt="img-project" />
  <h2 className="title-project">{title}</h2>
                <div className="overlay">
                    
                </div>
        </div>
      </div>
    </>
  );
}
export default Project;
