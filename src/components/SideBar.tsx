import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
import { fetchInventory } from "../features/mainSlice";

const StyledSideBar = styled("div")`
  background-color: #75da9f;
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
        Fetch
      </StyledButton>
      <StyledButton onClick={() => {}}>Fetch Users</StyledButton>
    </StyledSideBar>
  );
};

export default SideBar;
