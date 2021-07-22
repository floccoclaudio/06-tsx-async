import React from 'react'
import styled from 'styled-components'

import Shop from './Shop'
// import Navbar from './Navbar'
const StyledAppWrapper = styled('div')`
  border: 1px solid purple;
  padding: 5px;
`

const App: React.FC = () => {
    return (
        <StyledAppWrapper>
            <Shop />
        </StyledAppWrapper>
    )
}

export default App
