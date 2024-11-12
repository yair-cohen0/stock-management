import React from "react";
import { StocksList } from "../../shared/components/stocksList.tsx";
import { portfolioStore } from "../../stores/portfolio.store.ts";
import { Typography } from "antd";
import { observer } from "mobx-react";

export const Portfolio: React.FC = observer(() => {
  return (
    <>
      <Typography.Title level={2}>Portfolio</Typography.Title>
      <StocksList stocks={portfolioStore.portfolio?.stocks || []} />
    </>
  );
});
