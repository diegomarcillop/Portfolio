import React from 'react';
import './Skill.css'

function Skill({progress, title}){
    return(
        <>
        <div className="progress-content">
            <h2>{title}</h2>
           <div className="progress">
               <div className="progress-done" style={{ 
                   background: "linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)" ,
                   fontFamily: "Lato, sans-serif" ,
                   fontSize: "2.0vh",
                   borderRadius: '20px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   height: "100%",
                   width: `${progress}%`,
                   color: "white"
               }}> 
               </div>
           </div>
        </div>
        </>
    )
}
export default Skill;