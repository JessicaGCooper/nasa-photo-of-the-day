import styled from "styled-components";
import { device } from "./MediaQueries" 

export const PanelContainer = styled.div`
    width: 80%;
    margin-right: 10%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0a1631;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    @media ${device.tablet} {
        width: 90%;
        margin-right: 5%;
        margin-left: 5%;
    }
`;

export const Panel = styled.section`
    width: 70%;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: #0a1631;

    @media ${device.tablet} {
        width: 80%;
    }
`;

export const PanelBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0a1631;
    border-radius: 10px;
`;

export const DescTitle = styled.h3`
    font-size: 1.5rem;
    padding: 10px;
    margin-top: 10px;
    font-family: 'Merriweather', serif;
    color: #e6a48b;
    text-transform: uppercase;
    letter-spacing: 3px;
`;

export const PanelButtonContainer = styled.div`
    background: #0a1631;
`;

export const PanelButton = styled.button`
    background: #0a1631;
    border: 1px solid #133757;
`;

export const ButtonImage = styled.img`
    width: 40px;
    height: 40px;
    background: #0a1631;
    margin: 10px;

    &:hover {
        transform: scale(1.15);
      }
`;

export const PanelText = styled.p`
    font-size: 1rem;
    padding: 10px;
    margin: 10px;
    font-family: 'Merriweather', serif;
    text-align: justify;
    line-height: 1.5;
    color: #ffc3ad;
`;