import React from "react";
import { useParams } from "react-router-dom";

export const StockDetail: React.FC = () => {
  const params = useParams();

  return <span>StockDetail: {params.symbol}</span>;
};
