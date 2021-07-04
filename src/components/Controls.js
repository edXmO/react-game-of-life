import React, {useState} from "react";
import styled from "styled-components";

/**
 * COMPONENTS
 */
import Button from "./Button";


const ControlsWrapper = styled.div`
    margin: 1rem 0 1rem 0;
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: rgba( 45, 49, 58, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Controls = ({setRunning, runSimulation, running, runningRef}) => {

    const [active, setActive] = useState();

    return (
        <ControlsWrapper>
            <Button 
                // isRunning={running}
                active={active}
                setActive={setActive}
                onClick={() => {
                console.log("running")
                setRunning(!running);
                runningRef.current = true;
                runSimulation();
            }} 
            label={"Start"}
            />
            <Button 
                // isRunning={!running}
                active={false} 
                setActive={setActive}
                onClick={() => console.log("")} label={"Stop"} />
            <Button 
                // isRunning={!running}
                active={false}
                setActive={setActive}
                onClick={() => console.log("start")} label={"Reset"} />
        </ControlsWrapper>
    );
}

export default Controls;