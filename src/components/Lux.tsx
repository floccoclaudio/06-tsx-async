import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import LuxItem from './LuxItem'
import { handleFound } from '../features/sroSlice'
const StyledWrapper = styled('div')`
  
`

const StyledButton = styled('button')`
border: 100px solid black;

height:300px;
background-color: red;
`


const Content: React.FC = () => {
    // const luxItemList = useAppSelector(state => state.store.sroResponse)

    const dispatch = useAppDispatch()
    return (
        <StyledWrapper>
            <StyledButton onClick={() => { dispatch(handleFound()) }}>Ready?!??!?!?</StyledButton>
        </StyledWrapper>
    )
}

export default Content
