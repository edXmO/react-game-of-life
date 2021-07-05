import React, { useState } from "react";
import styled from "styled-components";

const InfoSectionWrapper = styled.section`
    padding: 1rem;
    flex: 4;
    background: rgba( 65, 105, 225, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.0px );
    -webkit-backdrop-filter: blur( 1.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const QuoteWrapper = styled.div`s
    width: 95%;
    height: 20rem;
    background: rgba( 65, 105, 225, 0.75 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 1.0px );
    -webkit-backdrop-filter: blur( 1.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin: 0.5rem;
    display: flex;
    align-items:center;
`

const Quote = styled.div`
    color: white;
    font-size: 1.6rem;
    padding: 1.5rem;
`

const QuoteHTML = styled.div`
    // color: black;
    color: rgba( 45, 49, 58, 0.25);
    font-size: 8rem;
    position: absolute;
    top: ${({leftQuote}) => leftQuote ? undefined : -1}rem;
    left: ${({leftQuote}) => leftQuote ? undefined : 1}rem;
    bottom: ${({leftQuote}) => leftQuote ? -2.5 : undefined}rem;
    right: ${({leftQuote}) => leftQuote ? 1 : undefined}rem;
`

const InfoSection = () => {

    const [isActive, setIsActive ] = useState(false);

    return (
        <InfoSectionWrapper>
            <QuoteWrapper>
                <Quote>
                    <QuoteHTML leftQuote={false}>&rdquo;</QuoteHTML> The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
                    It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.
                    One interacts with the Game of Life by creating and initial configuration and observing how it evolves. <QuoteHTML leftQuote={true}>&ldquo;</QuoteHTML>
                </Quote>
            </QuoteWrapper>
        </InfoSectionWrapper>
    )
}


export default InfoSection;