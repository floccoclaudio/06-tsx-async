import React from "react";
import styled from "styled-components";
import { ProductDetailsItemsEntity } from "../features/provaSyncReducer";

const StyledItemWrapper = styled("div")`
  border: 2px solid purple;
  padding: 2rem;
  border-radius: 5px;
  margin: 1rem;
`;

const ItemCard = (props: ProductDetailsItemsEntity) => {
  return (
    <StyledItemWrapper>
      <h1>{props.brandCode}</h1>
      <ul>
        {props.epcCodes.map((code) => {
          return <li>{code.epcCode}</li>;
        })}
      </ul>
    </StyledItemWrapper>
  );
};

export default ItemCard;
