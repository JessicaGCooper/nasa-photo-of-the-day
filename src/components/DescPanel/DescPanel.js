import React, { useState } from "react";

export default function DescPanel(props) {

    const [showText, setShowText] = useState(false);

    return (
        <div className="descPanelContainer">
           <section className="descPanel">
               <div className="descPanelBar">
                 <h3>Description</h3>
                 <div className="descPanelButton">
                    <button className="openButton" onClick={() => setShowText(!showText)}>
                        Open/Close Description
                    </button>
                </div>
                <div className="descPanelContent">
                    {showText && <p>{props.parts1.explanation}</p>}
                </div>
                </div>
           </section>
        </div>
    );
}