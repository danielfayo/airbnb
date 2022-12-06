import React from "react";
import Image from "../assets/Group77.svg";

export default function Hero(){
    return(
        <main>
            <img src={Image} className="hero-image"/>
            <div className="hero-text">
                <h1 className="hero-heading">Online Experiences</h1>
                <p className="hero-paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </main>
    )
}