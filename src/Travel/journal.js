import React from "react";
export default function Journal(props){
    return(
        <div className="travel">
            <img src={props.img} alt="" className="travel-img" />
            <div className="travel-body">
                <div className="loc">
                    <span><img src="./Img_travel/path.png" alt="location" />{props.country}</span>
                    <span><a href="#">View Google Map</a></span>
                </div>
                <h4>{props.Date.start}-{props.Date.End}</h4>
                <p>{props.Desc}</p>
            </div>
        </div>
    )
}