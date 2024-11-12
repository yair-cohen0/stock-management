import React from "react";
import { List, Typography } from "antd";
import { IStockInfo } from "../../types/stocks.type.ts";

interface StocksListProps {
  stocks: IStockInfo[];
}

export const StocksList: React.FC<StocksListProps> = ({ stocks }) => {
  return (
    <div>
      <Typography.Title level={3}>Stocks List</Typography.Title>
      <List
        bordered
        dataSource={stocks}
        renderItem={(stock) => (
          <List.Item>
            <Typography.Text>
              {stock.symbol} - {stock.name}
            </Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};
