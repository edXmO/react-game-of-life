import React from "react";
import styled from "styled-components";

/**
 * COMPONENTS
 */
import Grid from "../components/Grid";

const AppWrapper = styled.div`
  height: 100vh;
  background: #4169e1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  
  return (
    <AppWrapper>
      <Grid />
    </AppWrapper>
  );
}

export default App;
