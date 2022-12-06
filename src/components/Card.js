import React from "react";


export default function Card(props){
    let badgeText;
    if (props.status == 0){
        badgeText = 'sold out'
    } else if (props.location == 'Online'){
        badgeText = 'online'
    }

    return(
            <div className="card">
                <img src={props.image} className='card-image'/>
                <div className="card-label">
                    <div className="rating">
                        <img src={props.starImg} />
                        <p className="rating-text"> <span className="card-span">{props.ratingValue}</span>{props.country} </p>
                    </div>
                    <h4 className="card-heading">{props.heading}</h4>
                    <p className="card-p">From {props.price} <span className="card-span2">/ person</span></p>
                    {badgeText && <div className="sold-out"><p>{badgeText}</p></div>}
                </div>
            </div>
    )
}