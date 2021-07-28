import React from "react";
import styled from "styled-components";
const StyledContentDiv = styled("div")`
  background-color: #ebf7d4;
  border: 1px solid black;
  padding: 20px;
  margin: 5px;
  grid-column: 2 / 15;
  grid-row: 1 / 6;
`;

const Content: React.FC = (props) => {
  return <StyledContentDiv>{props.children}</StyledContentDiv>;
};

export default Content;
