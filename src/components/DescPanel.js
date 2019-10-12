import React, { useState } from "react";
import { PanelContainer, Panel, PanelBar, DescTitle, PanelButtonContainer, PanelButton, ButtonImage, PanelText } from "./DescPanelStyles"


export default function DescPanel(props) {

    const [showText, setShowText] = useState(false);

    return (
        <PanelContainer className="PanelContainer">
           <Panel className="Panel">
               <PanelBar className="PanelBar">
                    <DescTitle>Description</DescTitle>
                    <PanelButtonContainer className="PanelButtonContainer">
                        <PanelButton className="PanelButton" onClick={() => setShowText(!showText)}>
                            <ButtonImage className="ButtonImage" src={ require('./images/icons8-triangle-arrow-30.png')} alt="arrowIcon" />
                        </PanelButton>
                    </PanelButtonContainer>
                    <div className="PanelContent">
                        {showText && <PanelText>{props.parts1.explanation}</PanelText>}
                    </div>
                </PanelBar>
           </Panel>
        </PanelContainer>
    );
}
