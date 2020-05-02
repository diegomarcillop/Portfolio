import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <>
      <div className="skills" id="skills">
        <div className="skills-1">
          <Skill title="HTML" progress="80" />
          <Skill title="JavaScript" progress="80" />
          <Skill title="NodeJS" progress="60" />
          <Skill title="React Native" progress="10" />
        </div>
        <div className="skills-1">
          <Skill title="CSS" progress="70" />
          <Skill title="NestJS" progress="40" />
          <Skill title="ReactJS" progress="70" />
          <Skill title="Vue" progress="5" />
        </div>
      </div>
    </>
  );
}
export default Skills;
