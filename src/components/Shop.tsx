import React from 'react'
import styled from 'styled-components'

const StyledButton = styled('button')`
border:1px solid black;
padding:5px;`


const Shop = () => {
    return (
        <StyledButton>Fetch item List from fake store API</StyledButton>
    )
}

export default Shop
