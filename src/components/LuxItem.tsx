import React from "react";
import { ProductDetailsItemsEntity } from "../features/sroSlice";
import styled from "styled-components";
interface LuxItemProps {
  props: ProductDetailsItemsEntity;
}

const StyledCardWrapper = styled("div")`
  border: 1px solid black;
`;
const StyledPropWrapper = styled("div")``;
const StyledBrand = styled("div")``;
const StyledPrice = styled("div")``;

const LuxItem: React.FC<LuxItemProps> = ({ props }) => {
  return (
    <StyledCardWrapper>
      <StyledPropWrapper>
        <StyledBrand>Brand Code: {props.brandDescription}</StyledBrand>
        <StyledPrice>Price : {props.price}</StyledPrice>
      </StyledPropWrapper>
    </StyledCardWrapper>
  );
};

export default LuxItem;
