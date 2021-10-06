import React from "react";
import styled from "styled-components";
import { ProductDetailsItemsEntity } from "../features/provaSyncReducer";

const StyledItemWrapper = styled("div")`
  border: 2px solid purple;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
`;
const StyledButton = styled("button")`
  position: relative;
  margin-right: 2rem;
`;
const StyledEpcContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const StyledLi = styled("li")`
  margin-top: 15px;
`;
const ItemCard = (props: ProductDetailsItemsEntity) => {
  return (
    <StyledItemWrapper>
      <h5>{props.brandCode}</h5>
      <ul>
        epcCodes:
        {props.epcCodes.map((code) => {
          return (
            <StyledEpcContainer>
              <StyledLi>{code.epcCode}</StyledLi>
              <StyledButton>Remove</StyledButton>
            </StyledEpcContainer>
          );
        })}
      </ul>
    </StyledItemWrapper>
  );
};

export default ItemCard;
