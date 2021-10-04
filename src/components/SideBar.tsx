import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
// import { fetchInventory } from "../features/mainSlice";
import { moveSomeItems, resetAll } from "../features/provaSyncReducer";

const StyledSideBar = styled("div")`
  background-color: #000000;
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
  background-color: #2912f7;
  padding: 20px;
  color: white;
  font-size: 2rem;
  border: none;
  margin: 5px;
  cursor: pointer;
  transition: 1s all ease;
  :hover {
    background-color: red;
    color: black;
    font-size: 3rem;
  }
`;

const SideBar: React.FC = (props) => {
  const dispatch = useAppDispatch();

  return (
    <StyledSideBar>
      {/* <StyledButton
        onClick={() => {
          dispatch(fetchInventory());
        }}>
        Fetch
      </StyledButton> */}
      {/* <StyledButton onClick={() => {}}>Fetch Users</StyledButton> */}
      <StyledButton onClick={() => dispatch(moveSomeItems())}>
        ex01
      </StyledButton>
      <StyledButton onClick={() => {}}>ex02</StyledButton>
      <StyledButton onClick={() => {}}>ex03</StyledButton>
      <StyledButton onClick={() => {}}>ex04</StyledButton>
      <StyledButton onClick={() => {}}>ex05</StyledButton>
      <StyledButton onClick={() => dispatch(resetAll())}>
        Reset All
      </StyledButton>
    </StyledSideBar>
  );
};

export default SideBar;
