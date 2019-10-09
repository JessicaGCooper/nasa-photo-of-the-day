import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Photo() {

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=Rb1p7Wph42s91BTrR2MWnLk663go2CDNX07yeag3')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("The data was not returned:", error)
            });
    }, []);

    return (
        <div/>
    );
}