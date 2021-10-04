import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Shop from "./Shop";
import SideBar from "./SideBar";
import Lux from "./Lux";
import { useAppSelector } from "../app/hooks";
import Ex01 from "./Ex01";

const StyledAppWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
  border: 1px solid purple;
  padding: 5px;
`;

const App: React.FC = () => {
  const store = useAppSelector((state) => state.store);
  const ex01 = useAppSelector((state) => state.syncReducer.esercizi.ex01);
  //   const ex02 = useAppSelector((state) => state.syncReducer.esercizi.ex02);
  // const ex03 = useAppSelector(state => state.syncReducer)
  // const ex04 = useAppSelector(state => state.syncReducer)
  // const ex05 = useAppSelector(state => state.syncReducer)
  //funzione render component
  return (
    <StyledAppWrapper>
      <SideBar></SideBar>
      <Content>
        {/* {store.isSuccess && <Shop />} */}
        {/* <Lux /> */}
        {ex01.length !== 0 && <Ex01 />}
      </Content>
    </StyledAppWrapper>
  );
};

export default App;

/*
post request con il body
 render a list of item with
 brand list  | upce |epc
 in case of missing , list them as unexpected
 in case of in stock, list them as not found
 add a button
*/
