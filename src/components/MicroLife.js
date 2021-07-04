import React, { useCallback, useState } from "react";
import styled from "styled-components";

const WIDTH = 9;
const HEIGHT = 9;

const RES = 3

const ROWS = WIDTH / RES;
const COLS = HEIGHT / RES;

const MicroGrid = styled.div`
    display: grid;
    height: ${HEIGHT}rem;
    width: ${WIDTH}rem;
    grid-template-rows: repeat(${ROWS}, 1fr);
    grid-template-columns: repeat(${COLS}, 1fr);
`

const Cell = styled.div`
    background-color: ${({alive}) => alive === true ? "black" : "transparent"};
    height: ${RES}rem;
    width: ${RES}rem;
    border: 0.5px solid #000;
`

const MicroLife = () => {

    const [ grid, setGrid ] = useState(() => {
        const rows = [];
        for(let i = 0; i < ROWS; i++){
            rows.push(Array.from(Array(COLS).fill(Math.floor(Math.random()))));
        }
    });

    const runMicroGrid = () => {
        let newGrid = [];
        for(let i = 0; i < ROWS; i++){
            rows.push(Array.from(Array(COLS).fill(Math.floor(Math.random()))));
        }

        setGrid[newGrid];

        setTimeout(() => runMicroGrid(), 1000)

    };

    return (
        <MicroGrid>
            {grid.map((row, i) => row.map((col, i) => <Cell key={`${i}-${j}`} alive={col}/>))}
        </MicroGrid>
    )
}

export default MicroLife;