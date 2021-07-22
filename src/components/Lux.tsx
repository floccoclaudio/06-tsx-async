import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../app/hooks'
import LuxItem from './LuxItem'
const StyledWrapper = styled('div')`
  
`

const Content: React.FC = () => {
    const luxItemList = useAppSelector(state => state.store.sroResponse)


    return (
        <StyledWrapper>
            {luxItemList.productDetailsItems?.map(item => {
                return <LuxItem />
            })}
        </StyledWrapper>
    )
}

export default Content
