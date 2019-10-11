import React from "react";
import styled from 'styled-components';

const PhotoSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-right: 10%;
    margin-left: 10%;
    background: #133757;
`;

const DailyImage = styled.img`
    width: 100%;
    height: auto;
`;


export default function Photo(props) {
    return ( 
        <PhotoSection className="photoSection">
            <DailyImage src={props.parts1.url} alt= "NASA_Photo_of_the_Day" />
        </PhotoSection>
    );
}

