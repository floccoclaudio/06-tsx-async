import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from "../app/hooks";
import { fetchInventory } from "../features/mainSlice";

const StyledSideBar = styled('div')`
    background-color: grey;
    border:1px solid black;
    padding:5px;
    margin:5px;
    grid-column: 1;
    grid-row: 1/6;
`

const StyledButton = styled('button')`
width:100%;
    background-color:#F8FFE5;
`

const SideBar: React.FC = (props) => {

    const dispatch = useAppDispatch()

    return (
        <StyledSideBar>
            <StyledButton
                onClick={() => {
                    dispatch(fetchInventory())
                }}>Fetch</StyledButton>
            <StyledButton
                onClick={() => {
                }}>Fetch Users</StyledButton>
        </StyledSideBar>
    )
}

export default SideBar