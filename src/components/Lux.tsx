import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LuxItem from "./LuxItem";
import { handleResponse } from "../features/sroSlice";

const StyledWrapper = styled("div")``;

const StyledButton = styled("button")`
  border: 5px solid black;
  background-color: red;
  width: 100%;
  font-family: monospace;
  font-weight: 800;
  font-size: 100px;
`;
const StyledCommandsWrapper = styled("div")`
  display: flex;
  flex-direction: row;
`;

const StyledListsWrapper = styled("div")`
  & > * {
    box-sizing: border-box;
  }
`;

const StyledItemsList = styled("div")`
  width: 100%;
  padding: 10px;
`;

const StyledTitle = styled("div")`
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border: 1px solid black;
`;

const Content: React.FC = () => {
  // const luxItemList = useAppSelector(state => state.store.sroResponse)
  const products = useAppSelector((state) => state.sro.products);
  const dispatch = useAppDispatch();
  return (
    <StyledWrapper>
      <StyledCommandsWrapper>
        <StyledButton onClick={() => dispatch(handleResponse())}>
          Handle and Sort Response
        </StyledButton>
      </StyledCommandsWrapper>
      <StyledListsWrapper>
        <StyledItemsList>
          <StyledTitle>Not Found</StyledTitle>
          {products.notFound?.map((notFound, index) => (
            <LuxItem key={`${index}-${notFound.upcCode}`} props={notFound} />
          ))}
          <StyledTitle>Unexpected</StyledTitle>
          {products.unexpected?.map((unexpected, index) => (
            <LuxItem
              key={`${index}-${unexpected.upcCode}`}
              props={unexpected}
            />
          ))}
        </StyledItemsList>
      </StyledListsWrapper>
    </StyledWrapper>
  );
};

export default Content;
