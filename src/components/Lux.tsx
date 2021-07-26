import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LuxItem from "./LuxItem";
import { handleResponse } from "../features/sroSlice";
const StyledWrapper = styled("div")``;

const StyledButton = styled("button")`
  border: 100px solid black;
  height: 300px;
  background-color: red;
`;

const Content: React.FC = () => {
  // const luxItemList = useAppSelector(state => state.store.sroResponse)
  const products = useAppSelector((state) => state.sro.products);
  const dispatch = useAppDispatch();
  return (
    <StyledWrapper>
      <StyledButton onClick={() => dispatch(handleResponse())}>
        Do you really want to handle that respnse?????
      </StyledButton>
      {products.notFound?.map((notFound, index) => (
        <LuxItem key={`${index}-${notFound.upcCode}`} props={notFound} />
      ))}
    </StyledWrapper>
  );
};

export default Content;
