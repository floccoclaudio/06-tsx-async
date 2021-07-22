import React from 'react'
import styled from 'styled-components'
const StyledContentDiv = styled('div')`
    background-color: turquoise;
    border:1px solid black;
    padding:5px;
    margin:5px;
    grid-column: 2 / 5;
    grid-row: 1 / 5;
`


const Content: React.FC = (props) => {
    return (
        <StyledContentDiv>
            {props.children}
        </StyledContentDiv>
    )
}

export default Content
