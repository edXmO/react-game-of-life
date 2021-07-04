import React from "react"
import styled from "styled-components";

const Btn = styled.button`
    font-family: monospace;
    font-size: 1.6rem;
    text-decoration: none;
    padding: 1rem 2rem 1rem 2rem;
    cursor: pointer;
    text-decoration: none;
`

const Button = ({label, onClick}) => {
    return <Btn onClick={() => onClick()}>{label}</Btn>
}

export default Button;