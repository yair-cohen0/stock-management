import React, { useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStockPrice } from "../../queries/fetchStockDetails.query.ts";
import { DetailsTable } from "./detailsTable.tsx";
import { observer } from "mobx-react";
import { stockStore } from "../../stores/stock.store.ts";
import { useNavigate } from "react-router-dom";
import { StockActionButton } from "./stockActionButton.tsx"; // Add this at the top of the file

export const StockDetail: React.FC = observer(() => {
  const navigate = useNavigate();

  const navigateToHome = useCallback(
    (navigate: ReturnType<typeof useNavigate>) => {
      if (!stockStore.stock?.symbol) {
        navigate("/");
      }
    },
    [stockStore],
  );

  useEffect(() => navigateToHome(navigate), [navigate]);

  const stockDetailQuery = useQuery({
    queryKey: ["stockDetail", stockStore.stock?.symbol],
    queryFn: async () =>
      stockStore.stock?.symbol
        ? fetchStockPrice(stockStore.stock!.symbol)
        : Promise.resolve(null),
    enabled: !!stockStore.stock?.symbol,
  });

  return (
    <>
      {stockDetailQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <DetailsTable stockDetails={stockDetailQuery.data} />
          <div style={{ marginTop: "20px" }}>
            <StockActionButton />
          </div>
        </>
      )}
    </>
  );
});
