import { portfolioStore } from "../../stores/portfolio.store.ts";
import { stockStore } from "../../stores/stock.store.ts";
import { Button } from "antd";
import { useMutation } from "@tanstack/react-query";
import { IStockInfo } from "../../types/stocks.type.ts";
import { userStore } from "../../stores/user.store.ts";

export const StockActionButton = () => {
  const addStockToPortfolioMutation = useMutation({
    mutationFn: async (stock: IStockInfo) => {
      return await portfolioStore.addStockToPortfolio(
        stock,
        userStore.userName!,
      );
    },
    mutationKey: ["addStockToPortfolio", stockStore],
  });

  const removeStockFromPortfolioMutation = useMutation({
    mutationFn: async (stock: IStockInfo) => {
      return await portfolioStore.removeStockFromPortfolio(
        stock,
        userStore.userName!,
      );
    },
    mutationKey: ["removeStockFromPortfolio", stockStore],
  });

  return !portfolioStore.isStockInPortfolio(stockStore.stock!) ? (
    <Button
      type="primary"
      onClick={() => {
        if (stockStore.stock?.symbol) {
          addStockToPortfolioMutation.mutate(stockStore.stock);
        }
      }}
    >
      Save to Portfolio
    </Button>
  ) : (
    <Button
      type="primary"
      danger
      onClick={() => {
        if (stockStore.stock?.symbol) {
          removeStockFromPortfolioMutation.mutate(stockStore.stock);
        }
      }}
    >
      Remove from Portfolio
    </Button>
  );
};
