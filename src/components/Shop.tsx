import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
import { fetchInventory } from "../features/mainSlice";

const StyledButton = styled("button")`
  border: 1px solid black;
  padding: 5px;
`;

const Shop = () => {

  const dispatch = useAppDispatch()

  return (<StyledButton onClick={() => {
    dispatch(fetchInventory())
  }}>Fetch from fakeStore API</StyledButton>);
};

export default Shop;
