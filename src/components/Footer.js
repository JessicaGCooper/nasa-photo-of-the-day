import React from "react";
import styled from 'styled-components';

const PhotoFooter = styled.header`
    diaplay: flex;
    align-content: center;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right, #d66c44 0%, #d18237 15%, #ffb471 30%, #f6bb2b 45%, #809d4a 60%, #4a746a 75%, #324856 100%);
    font-family: 'Oxygen Mono', monospace;
    margin-top: 30px;
    border-top: 15px solid black;
    border-bottom: 15px solid black;
`;

const Credit = styled.h3`
    font-size: 1rem;
    font-family: 'Merriweather', serif;
    letter-spacing: 3px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Footer = () => {

    return (

    <PhotoFooter>
        <Credit className="footer">Image &amp; Information Courtesy of NASA</Credit>
    </PhotoFooter>

    )
}
export default Footer