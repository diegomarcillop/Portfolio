import React from 'react';
import './Project.css'

function Project({url}){
    return(
        <>
        <div className="project">
             <img src={url} alt="project" style={{
              width: '34vh'
             }}/>
        </div>
        </>
    )
}
export default Project;