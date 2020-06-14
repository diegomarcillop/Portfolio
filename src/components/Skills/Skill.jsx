import React from 'react';
import './Skill.css'

function Skill({progress, title}){
    return(
        <>
        <div className="progress-content">
            <h2>{title}</h2>
           <div className="progress">
               <div className="progress-done" style={{ 
                   background: "linear-gradient(to right, #338b6e, #227e6a)" ,
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