import React from "react";
import styled from "styled-components";

/**
 * COMPONENTS
 */

import Logo from "./Logo";

const HeadingWrapper = styled.div`
    width: 30rem;
    diplay: flex;
    padding: 2rem 1rem 2rem 1rem;
    flex: 1;
`

const Heading = () => {
    return (
        <HeadingWrapper>
            <Logo />
        </HeadingWrapper>
    )
}

export default Heading;