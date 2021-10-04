import React from "react";
import { useAppSelector } from "../app/hooks";
import ItemCard from "./ItemCard";

const Ex01: React.FC = () => {
  const exOneItems = useAppSelector((state) => state.syncReducer.esercizi.ex01);

  return (
    <>
      {exOneItems.map((item) => {
        return <ItemCard {...item} />;
      })}
    </>
  );
};

export default Ex01;
