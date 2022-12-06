import React from "react";
import Image from "../assets/airbnb.svg";

export default function Navbar(){
    return(
        <header>
            <nav>
                <img src={Image} className="logo" alt="airbnb logo"/>
            </nav>
        </header>
    );
}