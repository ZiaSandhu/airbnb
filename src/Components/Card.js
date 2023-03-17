import React from "react";
// import card1 from '../Images/card1.png'
export default function Card(props){
    console.log(props)
    let status
    if(props.openSpot === 0)
        status="Sold Out"
    else
        status="Online"
    return (
        <div>
            <div className="card">
                <div> { status!=="" && <span className="sold">{status}</span>}
                <img className="card-img" src={props.img} alt="Card"/></div>
                <div className="card-body">
                    <div className="star"><img src='./Images/star.png' alt="" /><span> {props.stats.rating} ({props.stats.reviews}) {props.country}</span></div>
                    <p className="card-text">{props.title}</p>
                    <p className="card-title"><strong>From ${props.price}</strong> / person</p>
                </div>
            </div>
        </div>
    )
}