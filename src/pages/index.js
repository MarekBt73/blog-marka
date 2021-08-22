import React from 'react'
import styled from 'styled-components';

const StyledWrapper = styled.div`

@media all and (max-width: 760px) and (min-width: 320px){
max-width:480;
height: 100%;
background-color: #999999;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding: 25px;
}
`


const IndexPage = () => {
return(
  <StyledWrapper>

<h1>
  Blog Marka
</h1>
<p>
  Witam na blogu o układaniu płytek, malowaniu i remontach mieszkań.
</p>

  </StyledWrapper>
)
}

export default IndexPage