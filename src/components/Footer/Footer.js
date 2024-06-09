import React from 'react'
import styled from 'styled-components'

const Footer = () => {

 const FooterContainer = styled.footer`
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
`;
 const FooterText = styled.p`
  font-size: 14px;
`;

  return (
    <FooterContainer>
        <h1>Estudos do Linn</h1>
        <FooterText>Linn Yohan &copy; 2024</FooterText>
    </FooterContainer>
  )
}

export default Footer