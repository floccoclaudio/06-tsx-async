import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
import { fetchInventory } from "../features/mainSlice";
import { handleResponse } from "../features/sroSlice";

import { StyledDangerousButton } from "./Lux";
const StyledSideBar = styled("div")`
  background-color: #9bf6ff;
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  grid-column: 1;
  grid-row: 1/6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled("button")`
  width: 80%;
  background-color: #f8ffe5;
  padding: 20px;
`;

const SideBar: React.FC = (props) => {
  const dispatch = useAppDispatch();

  return (
    <StyledSideBar>
      <StyledButton
        onClick={() => {
          dispatch(fetchInventory());
        }}>
        Fetch from FakeStore API
      </StyledButton>
      <StyledButton onClick={() => {}}>
        Fetch Users from json placeholder
      </StyledButton>
      <StyledDangerousButton onClick={() => dispatch(handleResponse())}>
        Fetch your doom
      </StyledDangerousButton>
    </StyledSideBar>
  );
};

export default SideBar;
