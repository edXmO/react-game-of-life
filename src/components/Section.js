import React from "react"
import styled from "styled-components";

/**
 * COMPONENTS
 */
import Heading from "./Heading";
import InfoSection from "./InfoSection";

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 90vh;
    background: rgba( 45, 49, 58, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Section = () => {
    return (
        <SectionWrapper>
            <Heading />
            <InfoSection />
        </SectionWrapper>
    )
}

export default Section;