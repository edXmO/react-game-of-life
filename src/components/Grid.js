import React, { useState, useMemo, useCallback, useRef } from "react";
import styled from "styled-components";

/**
 * COMPONENTS
 */

import Controls from "./Controls";

const WIDTH = 50;
const HEIGHT = 50;

const RES = 2;

const ROWS = WIDTH / RES;
const COLS = HEIGHT / RES;


const GridWrapper = styled.div`
    display:flex;
    flex-direction: column;
`

const Grid2D = styled.div`
    display: grid;
    height: ${HEIGHT}rem;
    width: ${WIDTH}rem;
    grid-template-rows: repeat(${ROWS}, 1fr);
    grid-template-columns: repeat(${COLS}, 1fr);
    background: rgba( 45, 49, 58, 0.65 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const Cell = styled.div`
    background-color: ${({alive}) => alive === 1 ? "pink" : "transparent"};
    height: ${RES}rem;
    width: ${RES}rem;
    border: ${({running}) => !running ? `0.5px   solid #FFF` : undefined}
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
        <GridWrapper>
            <Controls 
                rows={ROWS}
                resetGame={setGrid}
                setRunning={setRunning}
                runSimulation={runSimulation} 
                running={running} 
                runningRef={runningRef}
            />
            <Grid2D>
                {renderGrid}
            </Grid2D>
        </GridWrapper>
    )
}

export default Grid;