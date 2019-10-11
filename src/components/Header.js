import React from "react";
import styled from 'styled-components';


const TopHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #d66c44 0%, #d18237 15%, #ffb471 30%, #f6bb2b 45%, #809d4a 60%, #4a746a 75%, #324856 100%);
  font-family: 'Oxygen Mono', monospace;
  border-top: 30px solid black;
  border-bottom: 15px solid black;
`;

const MainTitle = styled.h1`
  padding-top: 20px;  
  font-family: 'Josefin Sans', sans-serif;
  font-size: 4.5rem;
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Merriweather', serif;
  text-transform: uppercase;
  letter-spacing: 3px;
`;


const Header = () => {

return (
      <TopHeader>
        <MainTitle>NASA</MainTitle>
        <div className="iconContainer">
          <img src={ require('./images/icons8-shooting-stars-100.png')} alt="NASA icon" />
        </div>
        <SubTitle>Image of the Day</SubTitle>
      </TopHeader>
  )
}

export default Header

//#ce9180, #d66c44, #d18237, #ffb471, #f6bb2b, #809d4a, #4a746a, #324856
//#f2e897