import React from 'react'
import styled from 'styled-components'

const Footer = () => {

 const FooterContainer = styled.footer`
  background-color: #ef9488;
  color: black;
  padding: 15px;
  margin-top: 1em
  text-align: center;
`;
 const FooterText = styled.p`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.5em;
`;

  return (
    <FooterContainer>
        <h1>Estudos do Linn</h1>
        <FooterText>Linn Yohan &copy; 2024</FooterText>
        <FooterText> Me siga</FooterText>
        <FooterText> twitter/X: @YohanHawks</FooterText>
        <FooterText>Instagram: @glacial_linn </FooterText>
    </FooterContainer>
  )
}

export default Footer