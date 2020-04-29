import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="img-about">
          <img
            src="/about-2.png"
            alt="about-img"
            style={{
              width: "64vh",
              borderRadius: '30%',
              opacity: '0.98'
            }}
          />
        </div>
        <div className="content-about">
          <div className="title">
          <h2>About Me</h2>
          </div>
            <div className="description">
                <p>I am someone who loves to create new things, I like photography and software development, I am very faithful to constant learning and I adapt well to changes. I am good at working as a team, I assume my responsibilities in the corresponding role and I like to take on great challenges.</p>
            </div>
        </div>
      </div>
    </>
  );
}
export default About;
