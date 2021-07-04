import React from "react";
import styled from "styled-components";

/**
 * COMPONENTS
 */
import Button from "./Button";


const ControlsWrapper = styled.div`
    padding: 1.5rem;
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Controls = ({setRunning, runSimulation, running, runningRef}) => {
    return (
        <ControlsWrapper>
            <Button onClick={() => {
                console.log("running")
                setRunning(!running);
                runningRef.current = true;
                runSimulation();
            }} 
            label={"Start"}
            />
            <Button onClick={() => console.log("")} label={"Stop"} />
            <Button onClick={() => console.log("start")} label={"Reset"} />
        </ControlsWrapper>
    );
}

export default Controls;