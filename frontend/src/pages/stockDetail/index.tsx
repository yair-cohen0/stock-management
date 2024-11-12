import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchStockPrice } from "../../queries/fetchStockDetails.query.ts";
import { DetailsTable } from "./detailsTable.tsx";

export const StockDetail: React.FC = () => {
  const params = useParams();

  const stockDetailQuery = useQuery({
    queryKey: ["stockDetail", params.symbol],
    queryFn: async () =>
      params.symbol ? fetchStockPrice(params.symbol) : Promise.resolve(null),
  });

  return (
    <>
      {stockDetailQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <DetailsTable stockDetails={stockDetailQuery.data} />
      )}
    </>
  );
};
