import React from "react";
import './Social.css'

function Social() {
  return (
    <>
      <div className="social-media">
        <ul className="social-media">
          <li>
           <a target="_black" href="https://www.linkedin.com/in/diegomarcillop/">
           <i className="fab fa-linkedin-in"/>
           </a>
          </li>

          <li>
          <a target="_black" href="https://github.com/diegomarcillop">
            <i className="fab fa-github"/>
            </a>
          </li>

          <li>
          <a target="_black" href="https://www.behance.net/dfmarcillopinzon">
            <i className="fab fa-behance"/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Social;
