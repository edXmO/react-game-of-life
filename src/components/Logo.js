import React from "react";
import styled from "styled-components";

/**
 * COMPONENTS
 */

import MicroLife from "./MicroLife";

const GameLogoWrapper = styled.div`
    display: flex;
    background: rgba( 65, 105, 225, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.0px );
    -webkit-backdrop-filter: blur( 1.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 1.25rem;
`

const Headings = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 1rem 0 1rem;
`

const HeadingLogo = styled.h1`
    font-size: 3.8rem;
    color: #ffffff;
`
const SubHeadingLogo = styled.h4`
    width: 100%;
    margin-top: auto;
    align-self: flex-end;
    padding: 0 2rem 0 0;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: bold;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InfoButton = styled.div`
    border: 0.3rem solid #ffffff;  
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
`

const Logo = () => {
    return (
        <GameLogoWrapper>
            <Headings>
                <HeadingLogo>Game of Life</HeadingLogo>
                <SubHeadingLogo>
                    <InfoButton>i</InfoButton>
                    By John Horton Conway
                </ SubHeadingLogo>
            </Headings>
            <MicroLife />
        </ GameLogoWrapper >
    )
}

export default Logo;