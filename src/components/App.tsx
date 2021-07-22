import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Shop from './Shop'
import SideBar from './SideBar'
import { useAppSelector } from '../app/hooks'





// import Navbar from './Navbar'
const StyledAppWrapper = styled('div')`
    display:grid;
    grid-template-columns: repeat( 4,1fr);
    grid-auto-rows: minmax(150px,auto);
    border: 1px solid purple;
    padding: 5px;
    
`

const App: React.FC = () => {

    const store = useAppSelector(state => state.store)

    return (
        <StyledAppWrapper>
            <SideBar>

            </SideBar>
            <Content>
                {store.isSuccess && <Shop />}

            </Content>
        </StyledAppWrapper>
    )
}

export default App
