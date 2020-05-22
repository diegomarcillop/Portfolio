import React from 'react';
import './Home.css'

export default function Home(){

    const onClick = () => {
        document.getElementById("skills").scrollIntoView({behavior:'smooth'})
    }
    return( 
        <div className="home" id="home">
            <h1>Hi, I'm Diego!</h1>
            <h2>Software developer| Photographer | Illustrator  </h2>
             <p className="description">I am a software developer, hobby photographer and illustrator in my spare time</p>
             <button className="btn_know_more" onClick={onClick}>Know more</button>
        </div> 
    )
}