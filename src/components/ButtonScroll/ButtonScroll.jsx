import React from 'react';
import './ButtonScroll.css';

export default function ButtonScroll() {

    const onClick = () => {
        document.getElementById("home").scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <button className="btn_scrolling" onClick={onClick}><i className="fas fa-angle-up"></i></button>
        </>
    )
}