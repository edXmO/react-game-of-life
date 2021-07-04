import React from "react"
import styled from "styled-components";

const Btn = styled.button`
    flex: 1;
    font-family: monospace;
    color: #25221e;
    font-weight: bold;
    font-size: 1.6rem;
    text-decoration: none;
    padding: 1rem 2rem 1rem 2rem;
    cursor: pointer;
    text-decoration: none;
    border-radius: 10px;
    border: 0;
    background-color: ${({active}) => active === true ? "white" : "transparent"}
`

const Button = ({ label, onClick, active, setActive, isRunning }) => {

    return <Btn 
            disabled={isRunning}
            active={active} 
            onClick={() => {
                onClick();
                setActive(!active)
            }}>
                {label}
            </Btn>
}

export default Button;