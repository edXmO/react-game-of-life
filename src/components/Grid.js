import React, { useState, useMemo, useCallback, useRef } from "react";
import styled from "styled-components";

const WIDTH = 50;
const HEIGHT = 50;

const RES = 2;

const ROWS = WIDTH / RES;
const COLS = HEIGHT / RES;


const Grid2D = styled.div`
    display: grid;
    background-color: #000000;
    height: ${HEIGHT}rem;
    width: ${WIDTH}rem;
    grid-template-rows: repeat(${ROWS}, 1fr);
    grid-template-columns: repeat(${COLS}, 1fr);
`;

const Cell = styled.div`
    background-color: ${({alive}) => alive === 1 ? "pink" : "black"};
    height: ${RES}rem;
    width: ${RES}rem;
    border: ${({running}) => !running ? `0.5px   solid #FFF` : undefined}
`

const Start = styled.button`
`

const Grid = () => {

    const [running, setRunning] = useState(false);
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for(let i = 0; i < ROWS; i++){ 
            rows.push(new Array(ROWS).fill(0));
        }
        return rows;
    });

    const editGrid = (grid, row, col, val = 1) => {
        const newGrid = [...grid];
        newGrid[row][col] = val ?? !grid[row][col];
        return newGrid;
    }

    const runningRef = useRef(running);

    const runSimulation = useCallback(() => {
        if(!runningRef.current) return;

        let newGrid = [...grid];

        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                if(i === 0 || j === 0 || i === ROWS - 1 || j === COLS - 1) continue;

                let numberOfNeighbors = [
                    grid[i - 1][j],
                    grid[i - 1][j + 1],
                    grid[i - 1][j - 1],
                    grid[i][j - 1],
                    grid[i + 1 ][j],
                    grid[i + 1][j - 1],
                    grid[i  + 1][j + 1],
                    grid[i][j + 1]
                ].filter(alive => alive).length;
                
                if(!grid[i][j] && numberOfNeighbors === 3){
                    editGrid(newGrid, i, j, 1);
                } else if(grid[i][j] && (numberOfNeighbors === 2 || numberOfNeighbors === 3)){
                    editGrid(newGrid, i, j, 1)
                } else {
                    editGrid(newGrid, i, j, 0);
                }
            }
        }

        setGrid(newGrid);

        setTimeout(() => runSimulation(), 500);
    }, [grid])

    const renderGrid = useMemo(() => {
        return grid.map((row, i) => row.map((col, j) => <Cell running={running} key={`${i}-${j}`} alive={col} onClick={() => {
            if(running) return;
            let newGrid = editGrid(grid, i, j);
            setGrid(newGrid);
        }} />));
    }, [grid, running]);

    return (
        <>
        <Start onClick={() => {
            setRunning(!running);
            runningRef.current = true;
            runSimulation();
            }}>
                Start
        </Start>
        <Grid2D>
            {renderGrid}
        </Grid2D>
        </>
    )
}

export default Grid;