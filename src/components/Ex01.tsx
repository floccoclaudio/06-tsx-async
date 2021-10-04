import React from "react";
import { useAppSelector } from "../app/hooks";
import ItemCard from "./ItemCard";

const Ex01: React.FC = () => {
  const exOneItems = useAppSelector((state) => state.syncReducer.esercizi.ex01);

  return (
    <>
      {exOneItems.map((item) => {
        return <ItemCard {...item} />;
        // return (
        //   <p key={item.upcCode}>
        //     {item.brandCode} brand Code
        //     {item.upcCode} upc Code
        //     {item.modelCode} model Code
        //     {item.epcCodes.map((singleCode) => {
        //       console.log(singleCode.epcStatus);
        //     })}
        //   </p>
        // );
      })}
    </>
  );
};

export default Ex01;
