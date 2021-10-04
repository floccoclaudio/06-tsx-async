import React from "react";
import { useAppSelector } from "../app/hooks";
const Ex01: React.FC = () => {
  const exOneItems = useAppSelector((state) => state.syncReducer.esercizi.ex01);

  return (
    <>
      {exOneItems.map((item) => {
        return <p>{item.brandCode}</p>;
      })}
    </>
  );
};

export default Ex01;
