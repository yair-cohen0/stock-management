import React, { useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchStockPrice } from "../../queries/fetchStockDetails.query.ts";
import { DetailsTable } from "./detailsTable.tsx";
import { observer } from "mobx-react";
import { stockStore } from "../../stores/stock.store.ts";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { userStore } from "../../stores/user.store.ts";
import { portfolioStore } from "../../stores/portfolio.store.ts";
import { IStockInfo } from "../../types/stocks.type.ts"; // Add this at the top of the file

export const StockDetail: React.FC = observer(() => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!stock?.symbol) {
      navigate("/");
    }
  }, []);

  const stock = stockStore.stock;

  const stockDetailQuery = useQuery({
    queryKey: ["stockDetail", stock?.symbol],
    queryFn: async () =>
      stock?.symbol ? fetchStockPrice(stock?.symbol) : Promise.resolve(null),
    enabled: !!stock?.symbol,
  });

  const addStockToPortfolioMutation = useMutation({
    mutationFn: async (stock: IStockInfo) => {
      return await portfolioStore.addStockToPortfolio(
        stock,
        userStore.userName!,
      );
    },
    mutationKey: ["addStockToPortfolio", stock],
  });

  return (
    <>
      {stockDetailQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <DetailsTable stockDetails={stockDetailQuery.data} />

          <div style={{ marginTop: "20px" }}>
            <Button
              type="primary"
              onClick={() => {
                if (stock?.symbol) {
                  addStockToPortfolioMutation.mutate(stock);
                }
              }}
            >
              Save to Portfolio
            </Button>
          </div>
        </>
      )}
    </>
  );
});
