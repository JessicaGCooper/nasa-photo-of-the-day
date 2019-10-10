import React, { useState } from "react";
import styled from 'styled-components';

const PanelContainer = styled.div`

`;

const Panel = styled.section`

`;

const PanelBar = styled.div`

`;


const DescTitle = styled.h3`

`;

const PanelButtonContainer = styled.div`

`;

const Button = styled.button`

`;

const PanelContent = styled.div`

`;

const PanelText = styled.p`

`;


export default function DescPanel(props) {

    const [showText, setShowText] = useState(false);

    return (
        <PanelContainer className="PanelContainer">
           <Panel className="Panel">
               <PanelBar className="PanelBar">
                    <DescTitle>Description</DescTitle>
                    <PanelButtonContainer className="PanelButtonContainer">
                        <Button className="Button" onClick={() => setShowText(!showText)}>
                            Open/Close Description
                        </Button>
                    </PanelButtonContainer>
                    <PanelContent className="PanelContent">
                        {showText && <PanelText>{props.parts1.explanation}</PanelText>}
                    </PanelContent>
                </PanelBar>
           </Panel>
        </PanelContainer>
    );
}

//font-family: 'Merriweather', serif;