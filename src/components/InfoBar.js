import React from "react";
import styled from 'styled-components';
import { device } from "./MediaQueries" 

const InfoBarContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0a1631;
`;

const ImageName = styled.div`
    color: #e6a48b;
    width: 40%;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #0a1631;

    @media ${device.tablet} {
        width: 90%;
        margin-right: 5%;
        margin-left: 5%;
    }
`;

const Name = styled.h2`
    font-size: 1.7rem;
    padding: 10px;
    margin-top: 10px;
    line-height: 1.2;
    font-family: 'Josefin Sans', sans-serif;
`;

const ImageDate = styled.div`
    color: #e6a48b;
    width: 20%;
    padding: 10px;
    margin-bottom: 20px;
    background: #0a1631;

    @media ${device.tablet} {
        width: 60%;
        margin-right: 20%;
        margin-left: 20%;
    }
`;

const Date = styled.h3`
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Merriweather', serif;
`;

const DateSpan = styled.span`
    white-space: nowrap;
`;

export default function InfoBar(props) {
    return (
        <InfoBarContainer className="InfoBarContainer">
            <ImageName className="imageName">
                <Name>{props.parts1.title}</Name>
            </ImageName>
            <ImageDate className="imageDate">
                <Date>Date: <DateSpan>{props.parts1.date}</DateSpan></Date>
            </ImageDate>
        </InfoBarContainer>
    );
}

