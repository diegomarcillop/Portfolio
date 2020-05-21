import React from 'react';
import './Home.css'

export default function Home(){

    const onClick = () => {
        document.getElementById("skills").scrollIntoView({behavior:'smooth'})
    }
    return( 
        <div className="home" id="home">
            <h1>Hi, I'm Diego!</h1>
             <p className="description">I am a software developer, hobby photographer and illustrator in my spare time</p>
            <img src="/img/home.svg" alt="image_home" style={{ width:"50vh"}}/>
            <button className="btn_know_more" onClick={onClick}>Know more</button>
        </div> 
    )
}