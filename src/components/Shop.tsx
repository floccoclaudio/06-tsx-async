import React from "react";
import styled from "styled-components";
import { fetchInventory } from "../features/mainSlice";
const StyledButton = styled("button")`
  border: 1px solid black;
  padding: 5px;
`;

const Shop = () => {
  return (
    <StyledButton
      onClick={() => {
        fetchInventory();
      }}></StyledButton>
  );
};

export default Shop;
