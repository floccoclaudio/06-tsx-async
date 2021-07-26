import React from "react";

import { ProductDetailsItemsEntity } from "../features/sroSlice";
interface LuxItemProps {
  props: ProductDetailsItemsEntity;
}

const LuxItem: React.FC<LuxItemProps> = (props) => {
  return <p>item</p>;
};

export default LuxItem;
