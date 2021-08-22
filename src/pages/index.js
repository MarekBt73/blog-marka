import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
    color: white;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`


margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding: 25px;
min-height: 100vh;

@media all and (max-width: 760px) and (min-width: 10px){
max-width:480;
background-color: #999999;

}
@media all and (max-width: 1024px) and (min-width: 761px){
max-width:760px;
background-color: #777777;

}
@media (min-width: 1025px){
max-width:1000px;
background-color: #999999;
}
`
const H1 = styled.h1`
color: black;
font-size: 52px;
`
const Pstyle = styled.p`
color: white;
font-size: 32px;
`

const IndexPage = () => (
  <>
  <GlobalStyle/>
  <StyledWrapper className="roman">
    <H1>Blog- Marka</H1>
    <Pstyle>Opowiadam o wykończeniach wnetrz</Pstyle>
  </StyledWrapper>
  </>
)

export default IndexPage


