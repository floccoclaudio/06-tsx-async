import React from "react";
import { ProductDetailsItemsEntity } from "../features/sroSlice";
import styled from "styled-components";

interface LuxItemProps {
  props: ProductDetailsItemsEntity;
}

const StyledCardWrapper = styled("div")`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledPropWrapper = styled("div")`
  width: 100%;
  padding: 5px;
  margin: 5px;
`;
const StyledBrand = styled("div")``;
const StyledUpc = styled("div")`
  padding-top: 3px;
  font-size: 13px;
`;
const StyledEpcWrapper = styled("div")`
  border: 1px solid grey;
  padding: 2px;
  font-size: 13px;
`;
const StyledCodeLine = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  padding: 2px;
`;
const StyledEpcCode = styled("div")`
  font-size: 15px;
  border-radius: 10px;
  padding: 8px;
`;
const StyledButton = styled("button")`
  transition: all;
  color: black;
  background-color: white;
  font-size: 15px;
  cursor: pointer;
  border: none;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 5px;
  &:hover {
    transition-duration: 2s;
    background-color: black;
    color: white;
  }
`;

const LuxItem: React.FC<LuxItemProps> = ({ props }) => {
  return (
    <StyledCardWrapper>
      <StyledPropWrapper>
        <StyledBrand>Brand Code: {props.brandDescription}</StyledBrand>
        <StyledUpc>Upc : {props.upcCode}</StyledUpc>
        <StyledEpcWrapper>
          EpcCodes :
          {props.epcCodes?.map((code) => {
            return (
              <StyledCodeLine key={code.epcCode}>
                <StyledEpcCode>{code.epcCode}</StyledEpcCode>
                <StyledButton>Add to found</StyledButton>
              </StyledCodeLine>
            );
          })}
        </StyledEpcWrapper>
      </StyledPropWrapper>
    </StyledCardWrapper>
  );
};

export default LuxItem;
