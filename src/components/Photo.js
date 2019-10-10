import React from "react";


export default function Photo(props) {
    return ( 
        <div className="photoSection">
            <img src={props.parts1.hdurl} alt= "NASA_Photo_of_the_Day" />
        </div>
    );
}

