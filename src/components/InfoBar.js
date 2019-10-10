import React, {useEffect, useState} from "react";
import axios from "axios";

export default function InfoBar(props) {
    return (
        <div className="InfoBarContainer">
            <div className="title">
                <h2>{props.parts1.title}</h2>
            </div>
            <div>
                <h3>Date: {props.parts1.date}</h3>
            </div>
        </div>
    );
}

