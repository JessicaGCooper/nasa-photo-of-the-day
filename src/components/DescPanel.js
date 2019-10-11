import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const PanelContainer = styled.div`
    width: 80%;
    margin-right: 10%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #4a746a;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

const Panel = styled.section`
    width: 40%;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #d66c44;
`;

const PanelBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #133757;
    border-radius: 10px;
`;


const DescTitle = styled.h3`
    font-size: 1.5rem;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Merriweather', serif;
    color: #e6a48b;
    text-transform: uppercase;
    letter-spacing: 3px; 
`;

const PanelButtonContainer = styled.div`
    background: #133757;
`;

const PanelButton = styled.button`
    background: #133757;
    border: 1px solid #133757;
`;

const PanelText = styled.p`
    font-size: 1rem;
    padding: 10px;
    margin: 10px;
    font-family: 'Merriweather', serif;
    text-align: justify;
    line-height: 1.5;
    color: #ffc3ad;
`;

const ButtonImage = styled.img`
    width: 40px;
    height: 40px;
    background: #133757;
    margin: 10px;

    &:hover {
        transform: scale(1.15);
      }
`;


export default function DescPanel(props) {

    const [showText, setShowText] = useState(false);
    const [arrowState, setArrowState] = useState();

    // const rotateArrow = () => {
    //     const arrow = document.querySelector(".ButtonImage");
    //     setArrowState(arrow.style.transform = "rotate(180deg)")
    // }

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

//font-family: 'Merriweather', serif;