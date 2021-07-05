import React from "react";
import styled from "styled-components";

/**
 * COMPONENTS
 */
import Grid from "../components/Grid";
import Section from "../components/Section";

const AppWrapper = styled.div`
  height: 100vh;
  background: #4169e1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

function App() {
  
  return (
    <AppWrapper>
      <Section />
      <Grid />
    </AppWrapper>
  );
}

export default App;
