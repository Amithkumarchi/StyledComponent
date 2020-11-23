import React from "react";
import styled from "styled-components";

export default function App() {
  const StyledDiv = styled.div`
    border: 2px solid;
    width: 100px;
    height: 100px;
  `;

  return <StyledDiv>Sample application using styled component</StyledDiv>;
}
