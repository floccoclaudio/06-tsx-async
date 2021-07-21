import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Shop from './Shop'
// import Navbar from './Navbar'
const StyledAppWrapper = styled('div')`
  border: 1px solid purple;
  padding: 5px;
`

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <StyledAppWrapper>
                <Switch>
                    <Route path="/" exact>
                        <Shop />
                    </Route>
                </Switch>
            </StyledAppWrapper>
        </BrowserRouter>
    )
}

export default App
