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
    background: rgba( 45, 49, 58, 0.25);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Controls = ({setRunning, runSimulation, running, runningRef, resetGame, rows}) => {

    const [active, setActive] = useState();

    return (
        <ControlsWrapper>
            <Button 
                active={active}
                setActive={setActive}
                onClick={() => {
                if(runningRef.current === true){
                    return runningRef.current = false;;
                } else if(!runningRef.current){
                    runningRef.current = true;
                    runSimulation();
                }
            }} 
            label={runningRef.current ? "Stop" : "Start     "}
            />
            <Button 
                active={false}
                setActive={setActive}
                onClick={() => {
                    runningRef.current = false;
                    const newGrid = [];
                    for(let i = 0; i < rows; i++){ 
                        newGrid.push(new Array(rows).fill(0));
                    }
                    resetGame(newGrid);           
                }} 
                label={"Reset"} />
        </ControlsWrapper>
    );
}

export default Controls;