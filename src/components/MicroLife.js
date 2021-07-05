import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const WIDTH = 9;
const HEIGHT = 9;

const RES = 1;

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
    background-color: ${({alive}) => !alive ? "rgba( 45, 49, 58, 0.65 )" : "black"};
    height: ${RES}rem;
    width: ${RES}rem;
    border: 0.5px solid #fff;
`

const MicroLife = () => {

    const [grid, setGrid] = useState(() => {
        const rows = [];
        for(let i = 0; i < ROWS; i++){
            rows.push(Array.from(Array(COLS).fill(Math.floor(Math.random() * 2))));
        }
        return rows;
    });


    const runMicroGrid = useCallback(() => {

        let newGrid = [];
        for(let i = 0; i < ROWS; i++){
            newGrid.push(Array.from(Array(COLS).fill(Math.floor(Math.random() * 2))));
        }

        setGrid(newGrid);

        setTimeout(() => runMicroGrid(), 1000);
    }, []);

    useEffect(() => {
        runMicroGrid();
    }, []);


    const renderGrid = useMemo(() => {
        return grid.map((row, i) => row.map((col, j) => <Cell key={`${i}-${j}`} alive={col}/>))
    }, [grid]);

    return (
        <MicroGrid>
            {renderGrid}
        </MicroGrid>
    )
}

export default MicroLife;