import React from "react";
import { StocksList } from "../../shared/components/stocksList.tsx";
import { portfolioStore } from "../../stores/portfolio.store.ts";
import { Typography } from "antd";

export const Portfolio: React.FC = () => {
  return (
    <>
      <Typography.Title level={3}>Stocks Portfolio</Typography.Title>
      <StocksList stocks={portfolioStore.portfolio?.stocks || []} />
    </>
  );
};
