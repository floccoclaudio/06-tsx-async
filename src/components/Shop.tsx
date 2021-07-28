import React from "react";
import styled from "styled-components";


const StyledTitle = styled('div')`
width:25%;
margin:20px auto;
background-color:#F8FFE5;
text-align: center;
padding:10px;
`

const StyledSeparator = styled('div')`
border-top: 5px solid #1B9AAA;
margin-top:50px;
`





const Shop = () => {
  return <>
    <StyledTitle >Availble Items</StyledTitle>
    <StyledSeparator />
  </>
}
export default Shop;
